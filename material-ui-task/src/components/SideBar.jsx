import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
// import { Expand } from "@mui/icons-material";

const drawerWidth = 240;

const SideBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [invoicesOpen, setInvoicesOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const [componentsOpen, setComponentsOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);
  const [tablesOpen, setTablesOpen] = useState(false);
  const [iconsOpen, setIconsOpen] = useState(false);
  const [mapsOpen, setMapsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar>
        <Typography>Material App</Typography>
      </Toolbar> */}

      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          PAGES
        </ListSubheader>

        <ListItem button onClick={() => setDashboardOpen(!dashboardOpen)}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {dashboardOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <ListItem button onClick={() => setPagesOpen(!pagesOpen)}>
          <ListItemIcon>
            <WebOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
          {pagesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AssignmentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>

        <ListItem button onClick={() => setInvoicesOpen(!invoicesOpen)}>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
          {invoicesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CheckBoxOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CalendarTodayOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>

        <ListItem button onClick={() => setAuthOpen(!authOpen)}>
          <ListItemIcon>
            <GroupOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Auth" />
          {authOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>

      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          ELEMENTS
        </ListSubheader>

        <ListItem button onClick={() => setComponentsOpen(!componentsOpen)}>
          <ListItemIcon>
            <GridViewOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
          {componentsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AutoGraphOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItem>

        <ListItem button onClick={() => setFormsOpen(!formsOpen)}>
          <ListItemIcon>
            <ContentPasteOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Forms" />
          {formsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <ListItem button onClick={() => setTablesOpen(!tablesOpen)}>
          <ListItemIcon>
            <FormatListBulletedOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
          {tablesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <ListItem button onClick={() => setIconsOpen(!iconsOpen)}>
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Icons" />
          {iconsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <ListItem button onClick={() => setMapsOpen(!mapsOpen)}>
          <ListItemIcon>
            <MapOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Maps" />
          {mapsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
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
      {/* <List>
        <ListItem button key="1" onClick={listItemHandleClick}>
          <ListItemIcon>
            <MenuBookOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Hello" />
          {listOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={listOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <MenuBookOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default SideBar;
