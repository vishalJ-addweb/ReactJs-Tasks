import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Divider, Typography } from "@mui/material";
import { rows, columns } from "../../dataFiles/DataGridItems";
// import { rows, columns } from "../../dataFiles/DataGridItems";

const Datagrid = () => {
  const [row, setRow] = useState(5);
  const pageSizeChangeHandler = (e) => {
    setRow(e);
  };
  return (
    <div
      style={{
        width: "90%",
        margin: "50px",
      }}
    >
      <div>
        <div>
          <h1>Data Grid</h1>
        </div>
        <div style={{ margin: "40px 0px 50px 0px", backgroundColor: "black" }}>
          <Divider />
        </div>
      </div>

      <div style={{ backgroundColor: "white" }}>
        <div style={{ fontSize: "25px", padding: "20px", fontWeight: "bold" }}>
          Data Grid
          <Typography>
            A fast and extendable data table and data grid for React, made by
            Material-UI. Official docs
          </Typography>
        </div>

        <div style={{ height: 400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={row}
            onPageSizeChange={pageSizeChangeHandler}
            rowsPerPageOptions={[5, 10, 15]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Datagrid;
