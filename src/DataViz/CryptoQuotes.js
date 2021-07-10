import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Tooltip, Typography } from '@material-ui/core';

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
    valueFormatter: (params) => {
        const valueFormatted = Number(params.value * 100).toLocaleString();
        return `${valueFormatted} %`;
    },
}

const sample = {
    "name":"Bitcoin",
    "price":33010.0697484057,
    "volume_24h":28915872345.6352500916,
    "percent_change_1h":0.0157456,
    "percent_change_24h":-0.77388887,
    "percent_change_7d":-0.05832909,
    "percent_change_30d":1.01173964,
    "percent_change_60d":-44.28185933,
    "percent_change_90d":-45.67767242,
    "market_cap":618988719008.0666503906,
    "last_updated":"2021-07-09T04:29:02.000Z"
};

const fields = 'id Hall Meal Time Foods'.split(' ');
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
        axios.get('https://raw.githubusercontent.com/GeorgeFane/cmc-api/main/today.json')
            .then(resp => {
                var rows = resp.data;
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
