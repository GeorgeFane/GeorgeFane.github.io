import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const fields = 'id TimestampEST From To Value Memo TxnHash'.split(' ');
const columns = fields.map(field => ({ field: field }));

export default function DataGridDemo(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.events}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
