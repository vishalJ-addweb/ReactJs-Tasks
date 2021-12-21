import React, { useState } from "react";
import {
  // Divider,
  // AppBar,
  Box,
  CssBaseline,
  Drawer,
  // IconButton,
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar,
  // Typography,
} from "@mui/material";
// import { styled, alpha } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// import MenuIcon from "@mui/icons-material/Menu";
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
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const drawerWidth = 240;

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

const SideBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="error">
  //           <ChatBubbleOutlineOutlinedIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>

  //     <MenuItem>
  //       <IconButton
  //         size="large"
  //         aria-label="show 17 new notifications"
  //         color="inherit"
  //       >
  //         <Badge badgeContent={17} color="error">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>

  //     <MenuItem>
  //       <IconButton size="large" color="inherit">
  //         <LanguageOutlinedIcon />
  //       </IconButton>
  //       <p>Languages</p>
  //     </MenuItem>

  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <PowerSettingsNewIcon />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  const drawer = (
    <div>
      {/* <Toolbar sx={{ backgroundColor: blue[700] }}>
        <Typography>Material App</Typography>
      </Toolbar>
      <Divider /> */}

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
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      {/* <AppBar
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
            sx={{ mr: 2,  display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ChatBubbleOutlineOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <LanguageOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <PowerSettingsNewIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu} */}

      {/* Drawer */}
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
    </div>
  );
};

export default SideBar;
