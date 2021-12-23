import React, { useState, useCallback } from "react";
import {
  Divider,
  Box,
  CssBaseline,
  Drawer,
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar,
  Typography,
} from "@mui/material";
import { indigo, blue } from "@mui/material/colors";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
// import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
// import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
// import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import Routes from "./Routes";

const drawerWidth = 240;

const SideBar = (props) => {
  const { window } = props;

  const handleDrawerToggle = () => {
    props.isClose();
  };

  const RecursiveDrawerItems = (text, index, nestedItems = null) => {
    const [openElement, setOpenElement] = useState(false);
    const handleClick = useCallback(() => {
      setOpenElement(!openElement);
    }, [openElement, setOpenElement]);
    if (nestedItems === null) {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      );
    } else {
      return (
        <>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
            {openElement ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openElement} timeout="auto" unmountOnExit>
            <List component="div" sx={{ pl: 7 }}>
              {nestedItems.map((text, index) => {
                return RecursiveDrawerItems(text, index);
              })}
            </List>
          </Collapse>
        </>
      );
    }
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{ display: "sticky", backgroundColor: blue[700], color: "white" }}
      >
        <Typography>Material App</Typography>
      </Toolbar>
      <Divider />

      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          PAGES
        </ListSubheader>

        {[
          "Dashboard",
          "Pages",
          "Projects",
          "Orders",
          "Invoices",
          "Tasks",
          "Calendar",
          "Auth",
        ].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, [
              "Default",
              "Analytics",
              "Saas",
            ]);
          } else if (index === 1) {
            return RecursiveDrawerItems(text, index, [
              "Profile",
              "Settings",
              "Pricing",
              "Chat",
              "Blank Page",
            ]);
          } else if (index === 4) {
            return RecursiveDrawerItems(text, index, [
              "Profile",
              "Settings",
              "Pricing",
              "Chat",
              "Blank Page",
            ]);
          } else if (index === 7) {
            return RecursiveDrawerItems(text, index, [
              "Profile",
              "Settings",
              "Pricing",
              "Chat",
              "Blank Page",
            ]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })}
      </List>

      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          ELEMENTS
        </ListSubheader>

        {["Components"].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, [
              "Alerts",
              "Accordian",
              "Avatars",
              "Badges",
              "Avatars",
              "Buttons",
              "Cards",
              "Chips",
              "Dialogs",
              "Lists",
              "Menus",
              "Pagination",
              "Progress",
              "Snackbars",
              "Tooltips",
            ]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })}

        <ListItem button>
          <ListItemIcon>
            <AutoGraphOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItem>

        {["Forms"].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, [
              "Pickers",
              "Selection Controls",
              "Selects",
              "Text Fields",
              "Editors",
              "Formik",
            ]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })}

        {["Tables"].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, [
              "Simple Table",
              "Advanced Table",
              "Data Grid",
            ]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })}

        {["Icons"].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, [
              "Material Icons",
              "Feather Icons",
            ]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })}

        {["Maps"].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, [
              "Google Maps",
              "Vactor Maps",
            ]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })}
      </List>

      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          MATERIAL APP
        </ListSubheader>
        {[
          { text: "Documentation", icon: <MenuBookOutlinedIcon /> },
          { text: "Changelog", icon: <AutoGraphOutlinedIcon /> },
        ].map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Toolbar></Toolbar>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={props.isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflow: "hidden",
              "&:hover": {
                overflow: "scroll",
                overflowX: "hidden",
              },
              // width
              "::-webkit-scrollbar": {
                width: "5px",
              },
              // Handle
              "::-webkit-scrollbar-thumb": {
                backgroundColor: indigo[50],
              },
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              // top: "64px",
              boxSizing: "border-box",
              width: drawerWidth,
              overflow: "hidden",
              "&:hover": {
                overflow: "scroll",
                overflowX: "hidden",
              },
              // width
              "::-webkit-scrollbar": {
                width: "5px",
              },
              // Handle
              "::-webkit-scrollbar-thumb": {
                backgroundColor: indigo[50],
              },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Routes />
    </div>
  );
};

export default SideBar;
