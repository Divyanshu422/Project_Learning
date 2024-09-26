import React from 'react'

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import { useState } from 'react';

function AgGrid() {

     // Row Data: The data to be displayed.
 const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make", checkboxSelection: true },
    { field: "model"},
    { field: "price" },
    { field: "electric" }
  ]);

  const defaultColDef = {
    sortable: true,  
    filter: true,
    editable: true,
    flex: 1, // Allows columns to grow and shrink equally  
  }
  
  return (
    // wrapping container with theme & size
    <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef} // Apply default properties to all columns
        />
    </div>
  )
}

export default AgGrid





