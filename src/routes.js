import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Products from "views/Products/Products.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import CategoryIcon from "@material-ui/icons/Category";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import LocalGroceryStoreOutlinedIcon from "@material-ui/icons/LocalGroceryStoreOutlined";
import {
  DashboardOutlined,
  CategoryOutlined,
  PersonOutlineOutlined,
  LibraryBooksOutlined,
  BubbleChartOutlined,
  LocationOnOutlined,
  NotificationsOutlined,
  Store,
  StoreOutlined
} from "@material-ui/icons";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    secondaryIcon: DashboardOutlined,
    component: DashboardPage,
    layout: "/admin",
    tab:0,
    myColor:"customBlue"
  },
  {
    path: "/products",
    name: "Products",
    icon: LocalGroceryStoreIcon,
    secondaryIcon: LocalGroceryStoreOutlinedIcon,
    component: Products,
    layout: "/admin",
    tab:1,
    myColor:"customDeepOrange"
  },
  {
    path: "/product/category",
    name: "Categories",
    icon: CategoryIcon,
    secondaryIcon: CategoryOutlined,
    component: UserProfile,
    layout: "/admin",
    tab:2,
    myColor:"customPurple"
  },
  {
    path: "/product/manufacturers",
    name: "Manufacturers",
    icon: Store,
    secondaryIcon: StoreOutlined,
    component: UserProfile,
    layout: "/admin",
    tab:3,
    myColor:"customPink"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    secondaryIcon: PersonOutlineOutlined,
    component: UserProfile,
    layout: "/admin",
    tab:4,
    myColor:"customGreen"
  },

  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    secondaryIcon: LibraryBooksOutlined,
    component: Typography,
    layout: "/admin",
    tab:6,
    myColor:"customOrange"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    secondaryIcon: BubbleChartOutlined,
    component: Icons,
    layout: "/admin",
    tab:7,
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    secondaryIcon: LocationOnOutlined,
    component: Maps,
    layout: "/admin",
    tab:8,
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    secondaryIcon: NotificationsOutlined,
    component: NotificationsPage,
    layout: "/admin",
    tab:9,
  },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   secondaryIcon: LanguageOutlined,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
