import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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

const drawerWidth = 240;

const SideBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography>Material App</Typography>
      </Toolbar>
      <List>
        {[
          { text: "Dashboard", icon: <DashboardIcon /> },
          { text: "Pages", icon: <WebOutlinedIcon /> },
          { text: "Projects", icon: <AssignmentOutlinedIcon /> },
          { text: "Orders", icon: <ShoppingCartOutlinedIcon /> },
          { text: "Tasks", icon: <CheckBoxOutlinedIcon /> },
          { text: "Calendar", icon: <CalendarTodayOutlinedIcon /> },
          { text: "Auth", icon: <GroupOutlinedIcon /> },
        ].map((text) => (
          <ListItem button key={text.text}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Components", icon: <GridViewOutlinedIcon /> },
          { text: "Charts", icon: <AutoGraphOutlinedIcon /> },
          { text: "Forms", icon: <ContentPasteOutlinedIcon /> },
          { text: "Tables", icon: <FormatListBulletedOutlinedIcon /> },
          { text: "Icons", icon: <FavoriteBorderOutlinedIcon /> },
          { text: "Maps", icon: <MapOutlinedIcon /> },
        ].map((text) => (
          <ListItem button key={text.text}>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {text.icon}
            </ListItemIcon>
            <ListItemText primary={text.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Documentation", icon: <MenuBookOutlinedIcon /> },
          { text: "Changelog", icon: <AutoGraphOutlinedIcon /> },
        ].map((text, index) => (
          <ListItem button key={text.text}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.text} />
          </ListItem>
        ))}
      </List>
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
