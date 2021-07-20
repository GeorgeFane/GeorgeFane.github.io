import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Tooltip, Typography } from '@material-ui/core';
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

const columns = [
    { field: 'name' },
    { field: 'last_updated' },
    { field: 'price', ...usdPrice },
    { field: 'market_cap', ...usdPrice },
    { field: 'volume_24h', type: 'number' },
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
        this.state = { rows: [] };
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/GeorgeFane/cmc-api/main/today.csv')
            .then(resp => {
                var rows = readString(resp.data, { header: true }).data;
                rows.forEach( (row, id) => row.id = id);
                this.setState({ rows });
            });
    }

    render () {
        const { rows } = this.state;
        return rows.length ? (
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
            />
        ) : (
            <span>Loading rows...</span>
        );
    }
}

export default Map;
