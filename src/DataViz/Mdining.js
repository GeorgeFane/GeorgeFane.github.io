import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Tooltip, Typography } from '@material-ui/core';

import axios from 'axios';

const url = 'https://us-central1-georgefane.cloudfunctions.net/mdining'

const fields = 'id Hall Meal Time Foods'.split(' ');
const columns = [
    {
        field: 'Courses',
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
    { field: 'isOpen', type: 'boolean' },
    { field: 'Hall' },
    { field: 'Meal' },
    { field: 'Open' },
    { field: 'Close' },
];

class Map extends React.Component {
    constructor () {
        super();
        this.state = { rows: [] };
    }

    async componentDidMount() {
        const resp = await axios.get(url);
        const rows = resp.data.data.map( (row, id) => ({ id, ...row }) );
        this.setState({ rows });
        
        // axios.get('https://raw.githubusercontent.com/GeorgeFane/MDining-Scraper/master/scraped.txt')
        //     .then(resp => {
        //         const rows = resp.data.map( (row, id) => {
        //             row.id = id;
        //             return row;
        //         });
        //         this.setState({ rows });
        //     });
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
