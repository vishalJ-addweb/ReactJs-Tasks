import React from "react";
import { Box, Toolbar } from "@mui/material";
import Home from "./Home";
// const drawerWidth = 240;

const Routes = () => {
  return (
    <div>
      <Box
        // sx={{ width: `calc(100vw - ${drawerWidth}px)` }}
        sx={{ width: "100vw" }}
      >
        <Toolbar />
        <Home />
      </Box>
    </div>
  );
};

export default Routes;
