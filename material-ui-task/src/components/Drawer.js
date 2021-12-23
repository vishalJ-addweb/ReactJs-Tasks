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
import Routes from "./Routes";

const drawerWidth = 240;

const SideBar = (props) => {
  const { window } = props;
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

        {["Dashboard"].map((text, index) => {
          if (index === 0) {
            return RecursiveDrawerItems(text, index, [
              "Default",
              "Analytics",
              "Saas",
            ]);
          } else {
            return RecursiveDrawerItems(text, index);
          }
        })}
        <ListItem button onClick={() => setDashboardOpen(!dashboardOpen)}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {dashboardOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={dashboardOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Default" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Analytics" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Saas" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => setPagesOpen(!pagesOpen)}>
          <ListItemIcon>
            <WebOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
          {pagesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={pagesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Pricing" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Chat" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Blank Page" />
            </ListItem>
          </List>
        </Collapse>

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
        <Collapse in={invoicesOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Detail" />
            </ListItem>
          </List>
        </Collapse>

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
      <Collapse in={authOpen} timeout="auto" unmountOnExit>
        <List>
          <ListItem button sx={{ pl: 9 }}>
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem button sx={{ pl: 9 }}>
            <ListItemText primary="Sign Up" />
          </ListItem>
          <ListItem button sx={{ pl: 9 }}>
            <ListItemText primary="Reset Password" />
          </ListItem>
          <ListItem button sx={{ pl: 9 }}>
            <ListItemText primary="404 Page" />
          </ListItem>
          <ListItem button sx={{ pl: 9 }}>
            <ListItemText primary="500 Page" />
          </ListItem>
        </List>
      </Collapse>

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
        <Collapse in={componentsOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Alerts" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Accordian" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Avatars" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Badges" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Buttons" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Cards" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Chips" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Dialogs" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Lists" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Menus" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Pagination" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Progress" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Snackbars" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Tooltips" />
            </ListItem>
          </List>
        </Collapse>

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
        <Collapse in={formsOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Pickers" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Selection Controls" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Selects" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Text Fields" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Editors" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Formik" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => setTablesOpen(!tablesOpen)}>
          <ListItemIcon>
            <FormatListBulletedOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
          {tablesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={tablesOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Simple Table" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Advanced Table" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Data Grid" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => setIconsOpen(!iconsOpen)}>
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Icons" />
          {iconsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={iconsOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Material Icons" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Feather Icons" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => setMapsOpen(!mapsOpen)}>
          <ListItemIcon>
            <MapOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Maps" />
          {mapsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={mapsOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Google Maps" />
            </ListItem>
            <ListItem button sx={{ pl: 9 }}>
              <ListItemText primary="Vactor Maps" />
            </ListItem>
          </List>
        </Collapse>
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
