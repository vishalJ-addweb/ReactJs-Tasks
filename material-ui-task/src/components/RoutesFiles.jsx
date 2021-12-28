import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Hoc from "./routesComponents/Hoc";
import Home from "./routesComponents/Home";
import Datagrid from "./routesComponents/Datagrid";
const drawerWidth = 240;

const RoutesFiles = () => {
  return (
    <>
      <Box
        sx={{
          width: `calc(100vw - ${drawerWidth}px)`,
          backgroundColor: "rgb(247, 249, 252)",
          height: "100vh",
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoc" element={<Hoc />} />
          <Route path="/dataGrid" element={<Datagrid />} />
        </Routes>
      </Box>
    </>
  );
};

export default RoutesFiles;
