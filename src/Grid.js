import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid

import { useEffect, useState } from 'react';

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component

const Grid = ({ items }) => {
  const [columns, setColumns] = useState([]);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (items && items.length > 0) {
      setColumns(
        Object.keys(items[0]).map((i) => ({
          field: i,
          headerName: i.replaceAll('_', ' '),
        }))
      );
      setRowData(items);
    }
  }, [items]);

  return (
    // wrapping container with theme & size
    <div
      className='ag-theme-quartz' // applying the grid theme
      style={{ height: 500, marginTop: 300, paddingLeft: 100, paddingRight: 100 }} // the grid will fill the size of the parent container
    >
      <AgGridReact rowData={rowData} columnDefs={columns} />
    </div>
  );
};

export default Grid;
