import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Tooltip, Typography } from '@material-ui/core';

import axios from 'axios';

const fields = 'id Hall Meal Time Foods'.split(' ');
const columns = [
    {
        field: 'Foods',
        renderCell: params => <Tooltip
            placement='right'
            title={
                <Typography variant='h6'>
                    {params.value}
                </Typography>
            }
        >
            <div>{params.value}</div>
        </Tooltip>
    },
    { field: 'id' },
    { field: 'Hall' },
    { field: 'Meal' },
    { field: 'Time' },
];

class Map extends React.Component {
    constructor () {
        super();
        this.state = { rows: [] };
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/GeorgeFane/MDining-Scraper/master/scraped.txt')
            .then(resp => {
                const rows = resp.data.map( (row, id) => {
                    row.id = id;
                    row.Foods = row.Foods.map(food => food.trim())
                        .join(', ');
                    return row;
                });
                this.setState({ rows });
            });
    }

    render () {
        const { rows } = this.state;
        return rows.length ? <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
        /> : <span>Loading rows...</span>;
    }
}

export default Map;
