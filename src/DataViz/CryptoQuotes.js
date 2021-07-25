import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { readString } from 'react-papaparse';

import axios from 'axios';

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const usdPrice = {
    type: 'number',
    valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
    cellClassName: 'font-tabular-nums',
};

const pct = {
    type: 'number',
    width: 144,
    valueFormatter: (params) => {
        const valueFormatted = Number(params.value * 100).toLocaleString();
        return `${valueFormatted} %`;
    },
}

const width = 122;
const columns = [
    { field: 'name' },
    { field: 'price', ...usdPrice },
    { field: 'last_updated', type: 'dateTime', width },
    { field: 'market_cap', ...usdPrice, width },
    { field: 'volume_24h', type: 'number', width },
    { field: 'percent_change_1h', ...pct },
    { field: 'percent_change_24h', ...pct },
    { field: 'percent_change_7d', ...pct },
    { field: 'percent_change_30d', ...pct },
    { field: 'percent_change_60d', ...pct },
    { field: 'percent_change_90d', ...pct },
];

class Map extends React.Component {
    constructor () {
        super();
        this.state = {
            rows: [],
            loading: true,
        };
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/GeorgeFane/cmc-api/main/today.csv')
            .then(resp => {
                var rows = readString(resp.data, { header: true }).data;
                rows.pop();
                rows.forEach( (row, id) => {
                    row.id = id;
                    row.last_updated = new Date(row.last_updated);
                });

                const loading = false;
                this.setState({ rows, loading });
            });
    }

    render () {
        const { rows, loading } = this.state;
        const data = { rows, columns, loading, autoHeight: true,
            pageSize: 10 };
        return <DataGrid {...data} />;
    }
}

export default Map;
