import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Hoc from "./routesComponents/Hoc";
import Home from "./routesComponents/Home";
import DataGrid from "./routesComponents/DataGrid";
const drawerWidth = 240;

const RoutesFiles = () => {
  return (
    <>
      <Box sx={{ width: `calc(100vw - ${drawerWidth}px)` }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoc" element={<Hoc />} />
          <Route path="/dataGrid" element={<DataGrid />} />
        </Routes>
      </Box>
    </>
  );
};

export default RoutesFiles;
