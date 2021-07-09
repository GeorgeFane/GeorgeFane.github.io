import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import axios from 'axios';

const fields = 'id Hall Meal Time Foods'.split(' ');
const columns = fields.map(field => ({ field: field }));

const rows = axios.get('https://raw.githubusercontent.com/GeorgeFane/MDining-Scraper/master/scraped.txt')
    .then(resp => resp.data.map( (row, id) => {
        row.id = id;
        row.Foods = row.Foods.map(food => food.trim()).join(', ');
        console.log(row)
        return row;
    }))

class Map extends React.Component {
    constructor () {
        super()
        this.state = { rows: [] }
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/GeorgeFane/MDining-Scraper/master/scraped.txt')
            .then(resp => {
                const rows = resp.data.map( (row, id) => {
                    row.id = id;
                    row.Foods = row.Foods.map(food => food.trim()).join(', ');
                    return row;
                });
                this.setState({ rows });
            });
    }

    render () {
        const { rows } = this.state
        return rows.length ? (
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
            />
        ) : (
            <span>Loading rows...</span>
        )
    }
}

export default Map;
