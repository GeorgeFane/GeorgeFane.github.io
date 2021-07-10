import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '& .charity': {
            backgroundColor: 'red',
        },
    },
});

const charity = '0x596Aa50158BFf76F8D08F848d701C83a4F754d9c';

const fields = 'id TimestampEST From To Continent Value Memo TxnHash'.split(' ');
const columns = [
    { field: 'id', type: 'number' },
    { field: 'TimestampEST' },
    { field: 'From' },
    { field: 'To' },
    { field: 'Continent' },
    { field: 'Value', type: 'number' },
    { field: 'Memo' },
    { field: 'TxnHash' },
]

export default function DataGridDemo({ rows }) {
    const classes = useStyles();

    return rows.length ? (
        <div className={classes.root}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                pageSize={5}
                getCellClassName={(params) => params.field === 'From' && params.value === charity ? 'charity' : ''
                }
                sortModel={[{
                    field: 'id',
                    sort: 'desc',
                }]}
            />
        </div>
    ) : (
        <div>Loading rows...</div>
    );
}
