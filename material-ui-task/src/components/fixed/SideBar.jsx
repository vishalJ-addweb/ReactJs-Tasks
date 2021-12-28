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
import { Link } from "react-router-dom";
import RoutesFiles from "../RoutesFiles";
import {
  pagesItems,
  elementsItems,
  materialAppItems,
} from "../../dataFiles/DrawerItemsList";
import { hasChildren } from "../../dataFiles/utils";
// import {
//   pagesItems,
//   elementsItems,
//   materialAppItems,
// } from "../../dataFiles/DrawerItemsList";
// import { hasChildren } from "../../dataFiles/utils";

const drawerWidth = 240;

const SideBar = (props) => {
  const { window } = props;

  const handleDrawerToggle = () => {
    props.isClose();
  };

  const RecursiveDrawerItems = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
  };

  const SingleLevel = ({ item }) => {
    return (
      <ListItem button component={Link} to={`${item.to}`}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    );
  };

  const MultiLevel = ({ item }) => {
    const [openElement, setOpenElement] = useState(false);
    const handleClick = useCallback(() => {
      setOpenElement(!openElement);
    }, [openElement, setOpenElement]);
    return (
      <>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
          {openElement ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openElement} timeout="auto" unmountOnExit>
          <List component="div">
            {item.items.map((child, key) => {
              return <RecursiveDrawerItems key={key} item={child} />;
            })}
          </List>
        </Collapse>
      </>
    );
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: "sticky",
          backgroundColor: blue[700],
          color: "white",
        }}
      >
        <Typography>Material App</Typography>
      </Toolbar>
      <Divider />
      <ListSubheader component="div" id="nested-list-subheader">
        PAGES
      </ListSubheader>
      {pagesItems.map((item, key) => (
        <RecursiveDrawerItems key={key} item={item} />
      ))}
      <ListSubheader component="div" id="nested-list-subheader">
        Elements
      </ListSubheader>
      {elementsItems.map((item, key) => (
        <RecursiveDrawerItems key={key} item={item} />
      ))}
      <ListSubheader component="div" id="nested-list-subheader">
        Material App
      </ListSubheader>
      {materialAppItems.map((item, key) => (
        <RecursiveDrawerItems key={key} item={item} />
      ))}
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
      <RoutesFiles />
    </div>
  );
};

export default SideBar;
