import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const fields = 'id TimestampEST From To Value Memo TxnHash'.split(' ');
const columns = fields.map(field => ({ field: field }));

export default function DataGridDemo(props) {
    return (
        <DataGrid
            rows={props.events}
            columns={columns}
            autoHeight
        />
    );
}
