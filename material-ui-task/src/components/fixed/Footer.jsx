import React from "react";
import {
  Box,
  Paper,
  Avatar,
  Toolbar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import Icon from "../../images/lucy.jpg";
const drawerWidth = 240;

const Footer = () => {
  return (
    <Box
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        left: "0",
        zIndex: 1300,
        position: "absolute",
        top: "630px",
        display: "flex",
      }}
    >
      <Paper
        sx={{
          position: "fixed",
          display: "flex",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <Box sx={{ display: "flex", marginRight: "46px" }}>
          <Avatar
            alt="Pic Of UI/UX"
            src={Icon}
            sx={{ my: 1.5, ml: 1 }}
          ></Avatar>
          <Toolbar sx={{ display: "flex", flexDirection: "column", py: 0.5 }}>
            <Typography sx={{ fontSize: "0.8125rem", margin: "5px" }}>
              Lucy Lavender
            </Typography>
            <Typography sx={{ fontSize: "0.7rem" }}>UI/UX Designer</Typography>
          </Toolbar>
        </Box>
        <Box>
          <Divider orientation="vertical" />
        </Box>
        <Box>
          <Button
            sx={{
              color: "inherit",
              marginTop: "12px",
              marginBottom: "12px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            Support
          </Button>
          <Button
            sx={{
              color: "inherit",
              marginTop: "12px",
              marginBottom: "12px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            Services
          </Button>
          <Button
            sx={{
              color: "inherit",
              marginTop: "12px",
              marginBottom: "12px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            Help Center
          </Button>

          <Button
            sx={{
              color: "inherit",
              marginTop: "12px",
              marginBottom: "12px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            Terms Of Service
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Button
            sx={{
              color: "inherit",
              marginTop: "12px",
              marginBottom: "12px",
              marginRight: "12px",
            }}
          >
            2021-Material App
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Footer;
