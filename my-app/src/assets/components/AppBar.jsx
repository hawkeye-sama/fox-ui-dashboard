import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { HomeOutlined, LocalMallOutlined, AccountCircle, Home, LocalMall } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';
import { MenuItem, Menu } from "@material-ui/core";
import { useDispatch,useSelector } from "react-redux";
import { changeTab } from "../../store/actions";
import MenuIcon from '@material-ui/icons/Menu';
import {setMobileOpen} from "../../store/actions";




function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: "100%",
    maxHeight: 5,
    '& > span': {
      maxWidth: 100,
      width: '100%',
      backgroundColor: '#ff6d00',
    },

  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const LinkTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),

    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab component="a"
  onClick={(event) => {
    event.preventDefault();
  }}
  {...props} />);


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
  },
  AppBarSettings: {
    zIndex: theme.zIndex.drawer + 1,
    height: 56,
    backgroundColor: "white",
    color: "#858585",
  },
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  endPanelSettings: {
    justifyContent: "end",
  },
  roundCornerDiv: {
    borderRadius: 20,
    backgroundColor: "#ff6d00",
    padding: 18,
    width: 5,
    height: 5,
    color: "white"

  },
  title: {
    color: "#ff6d00",

  }
}));

export default function MyAppBar() {
  const dispatch = useDispatch();
  const mobileOpen = useSelector(state => state.mobileOpen);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(changeTab({ tab: newValue }))
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleDrawerToggle() {
    dispatch(setMobileOpen({mobileOpen: !mobileOpen}))
  }
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBarSettings}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ color: "#ff6d00" }} className={(classes.title, classes.grow)}>
            Fox UI
          </Typography>
          <div className={classes.grow}>
            <StyledTabs value={value} onChange={handleChange} >
              <LinkTab
                icon={value === 0 ? <Home /> : <HomeOutlined />}
                style={{ color: value === 0 ? '#ff6d00' : '' }}
                {...a11yProps(0)}
              />
              <LinkTab
                icon={value === 1 ? <LocalMall /> : <LocalMallOutlined />}
                style={{ color: value === 1 ? '#ff6d00' : '' }}
                {...a11yProps(1)}
              />
            </StyledTabs>

          </div>
          <div className={(classes.grow, classes.endPanelSettings)}>
            <div >

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.roundCornerDiv}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>

            </div>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  );
}
