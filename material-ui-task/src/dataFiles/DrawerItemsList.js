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

export const pagesItems = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    items: [
      { title: "Default", items: [{ title: "hello" }] },
      { title: "Analytics" },
      { title: "Saas" },
    ],
  },
  {
    icon: <WebOutlinedIcon />,
    title: "Pages",
    items: [
      { title: "Profile" },
      { title: "Settings" },
      { title: "Pricing" },
      { title: "Chat" },
      { title: "Blank Page" },
    ],
  },
  {
    icon: <AssignmentOutlinedIcon />,
    title: "Projects",
    items: [],
  },
  {
    icon: <ShoppingCartOutlinedIcon />,
    title: "Orders",
    items: [],
  },
  {
    icon: <ShoppingCartOutlinedIcon />,
    title: "Invoices",
    items: [{ title: "List" }, { title: "Details" }],
  },
  {
    icon: <CheckBoxOutlinedIcon />,
    title: "Tasks",
    items: [],
  },
  {
    icon: <CalendarTodayOutlinedIcon />,
    title: "Calendar",
    items: [],
  },
  {
    icon: <GroupOutlinedIcon />,
    title: "Auth",
    items: [
      { title: "Sign In" },
      { title: "Sign Up" },
      { title: "Reset Password" },
      { title: "404 Page" },
      { title: "500 Page" },
    ],
  },
];

export const elementsItems = [
  {
    icon: <GridViewOutlinedIcon />,
    title: "Components",
    items: [
      { title: "Alerts" },
      { title: "Accordian" },
      { title: "Avatars" },
      { title: "Badges" },
      { title: "Buttons" },
      { title: "Cards" },
      { title: "Chips" },
      { title: "Dialogs" },
      { title: "Lists" },
      { title: "Menus" },
      { title: "Pagination" },
      { title: "Progress" },
      { title: "Snackbars" },
      { title: "Tooltips" },
    ],
  },
  {
    icon: <AutoGraphOutlinedIcon />,
    title: "Charts",
    items: [],
  },
  {
    icon: <ContentPasteOutlinedIcon />,
    title: "Forms",
    items: [
      { title: "Pickers" },
      { title: "Selection Controls" },
      { title: "Selects" },
      { title: "Text Fields" },
      { title: "Editors" },
      { title: "Formik" },
    ],
  },
  {
    icon: <FormatListBulletedOutlinedIcon />,
    title: "Tables",
    items: [
      { title: "Simple Tables" },
      { title: "Advanced Tables" },
      { title: "Data Grid" },
    ],
  },
  {
    icon: <FavoriteBorderOutlinedIcon />,
    title: "Icons",
    items: [{ title: "Material Icons" }, { title: "Feather Icons" }],
  },
  {
    icon: <MapOutlinedIcon />,
    title: "Maps",
    items: [{ title: "Google Maps" }, { title: "Vector Maps" }],
  },
];

export const materialAppItems = [
  {
    icon: <MenuBookOutlinedIcon />,
    title: "Documentation",
    items: [],
  },
  {
    icon: <AutoGraphOutlinedIcon />,
    title: "Changelog",
    items: [],
  },
];
