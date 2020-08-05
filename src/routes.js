import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Products from "views/Products/Products.js";
import Categories from "views/Categories/Categories.js";

import Icons from "views/Icons/Icons.js";
import CategoryIcon from "@material-ui/icons/Category";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import LocalGroceryStoreOutlinedIcon from "@material-ui/icons/LocalGroceryStoreOutlined";
import {
  DashboardOutlined,
  CategoryOutlined,
  PersonOutlineOutlined,
  BubbleChartOutlined,
  Store,
  StoreOutlined
} from "@material-ui/icons";
import Manufacturers from "./views/Manufacturers/Manufacturers";
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
    component: Categories,
    layout: "/admin",
    tab:2,
    myColor:"customPurple"
  },
  {
    path: "/product/manufacturers",
    name: "Manufacturers",
    icon: Store,
    secondaryIcon: StoreOutlined,
    component: Manufacturers,
    layout: "/admin",
    tab:3,
    myColor:"customPink"
  },
  {
    path: "/bd",
    name: "Big Data/Analytics",
    icon: Person,
    secondaryIcon: PersonOutlineOutlined,
    component: UserProfile,
    layout: "/admin",
    tab:4,
    myColor:"customGreen"
  },
  {
    path: "/ml",
    name: "Machine Learning",
    icon: BubbleChart,
    secondaryIcon: BubbleChartOutlined,
    component: Icons,
    layout: "/admin",
    tab:7,
    myColor:"customRed"
  },

];

export default dashboardRoutes;
