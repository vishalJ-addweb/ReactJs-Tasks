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
      { title: "Default", to: "/default" },
      { title: "Analytics", to: "/analytics" },
      { title: "Saas", to: "/saas" },
    ],
  },
  {
    icon: <WebOutlinedIcon />,
    title: "Pages",
    items: [
      { title: "Profile", to: "/profile" },
      { title: "Settings", to: "/settings" },
      { title: "Pricing", to: "/pricing" },
      { title: "Chat", to: "/chat" },
      { title: "Blank Page", to: "/blankpage" },
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
    items: [
      { title: "List", to: "/list" },
      { title: "Details", to: "/details" },
    ],
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
      { title: "Sign In", to: "/signin" },
      { title: "Sign Up", to: "/signup" },
      { title: "Reset Password", to: "/resetpassword" },
      { title: "404 Page", to: "/404page" },
      { title: "500 Page", to: "/500page" },
    ],
  },
  {
    icon: <GroupOutlinedIcon />,
    title: "Design Patterns",
    items: [
      { title: "HOC Pattern", to: "/hoc" },
      { title: "Render Props Pattern", to: "/renderprops" },
      { title: "Hooks Pattern", to: "/hooks" },
    ],
  },
];

export const elementsItems = [
  {
    icon: <GridViewOutlinedIcon />,
    title: "Components",
    items: [
      { title: "Alerts", to: "/alerts" },
      { title: "Accordian", to: "/accordian" },
      { title: "Avatars", to: "/avatars" },
      { title: "Badges", to: "/badges" },
      { title: "Buttons", to: "/buttons" },
      { title: "Cards", to: "/cards" },
      { title: "Chips", to: "/chips" },
      { title: "Dialogs", to: "/dialogs" },
      { title: "Lists", to: "/lists" },
      { title: "Menus", to: "/menus" },
      { title: "Pagination", to: "/pagination" },
      { title: "Progress", to: "/progress" },
      { title: "Snackbars", to: "/snackbars" },
      { title: "Tooltips", to: "/tooltips" },
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
      { title: "Pickers", to: "/pickers" },
      { title: "Selection Controls", to: "/selectionControls" },
      { title: "Selects", to: "/selects" },
      { title: "Text Fields", to: "/textFields" },
      { title: "Editors", to: "/editors" },
      { title: "Formik", to: "/formik" },
    ],
  },
  {
    icon: <FormatListBulletedOutlinedIcon />,
    title: "Tables",
    items: [
      { title: "Simple Tables", to: "/simpleTables" },
      { title: "Advanced Tables", to: "/advancedTables" },
      { title: "Data Grid", to: "/dataGrid" },
    ],
  },
  {
    icon: <FavoriteBorderOutlinedIcon />,
    title: "Icons",
    items: [
      { title: "Material Icons", to: "/materialIcons" },
      { title: "Feather Icons", to: "/featherIcons" },
    ],
  },
  {
    icon: <MapOutlinedIcon />,
    title: "Maps",
    items: [
      { title: "Google Maps", to: "/googleMaps" },
      { title: "Vector Maps", to: "/vectorMaps" },
    ],
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
