import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { setMobileOpen } from "../../store/actions";
import { Divider, Typography, Collapse, Grow } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt, faDragon,faShoePrints,faHatWizard } from "@fortawesome/free-solid-svg-icons";


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
    catTypography: {
        color: "#757575",
    }
}));

function ResponsiveDrawer() {
    const mobileOpen = useSelector(state => state.mobileOpen);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [openSecond, setOpenSecond] = React.useState(true);
    const theme = useTheme();
    function handleDrawerToggle() {
        dispatch(setMobileOpen({ mobileOpen: !mobileOpen }))
    }
    const handleItemClick = (listId) => {
        if(listId===1)
            setOpen(!open);
        else if(listId===2)
            setOpenSecond(!openSecond)
    };
    const drawer = (
        <div>
            
            <List>
                <ListItem button onClick={(e)=>{handleItemClick(1)}} >
                    <ListItemText primary={
                        <React.Fragment>
                            <Typography variant="h6" className={classes.catTypography}>Categories</Typography>
                        </React.Fragment>
                    }  />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Grow in={open} 
                            style={{ transformOrigin: '0 0 0' }}
                            {...(open ? { timeout: 500 } : {})} >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faTshirt}  />
                                </ListItemIcon>
                                <ListItemText primary="Shirts"  />
                            </ListItem>
                        </Grow>
                        <Grow  in={open}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(open ? { timeout: 1000 } : {})}
                        >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faDragon}  />
                                </ListItemIcon>
                                <ListItemText primary="Pants"  />
                            </ListItem>
                            
                        </Grow>
                        <Grow  in={open}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(open ? { timeout: 1500 } : {})}
                        >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faShoePrints}  />
                                </ListItemIcon>
                                <ListItemText primary="Shoes"  />
                            </ListItem>
                        </Grow>
                        <Grow  in={open}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(open ? { timeout: 2000 } : {})}
                        >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faHatWizard}  />
                                </ListItemIcon>
                                <ListItemText primary="Hats"  />
                            </ListItem>
                        </Grow>
                    </List>
                </Collapse>
            </List>
            <Divider />
            
            <List>
                <ListItem button onClick={(e)=>{handleItemClick(2)}} >
                    <ListItemText primary={
                        <React.Fragment>
                            <Typography variant="h6" className={classes.catTypography}>Prices</Typography>
                        </React.Fragment>
                    }  />
                    {openSecond ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openSecond} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Grow in={openSecond} 
                            style={{ transformOrigin: '0 0 0' }}
                            {...(open ? { timeout: 500 } : {})} >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faTshirt}  />
                                </ListItemIcon>
                                <ListItemText primary="Shirts"  />
                            </ListItem>
                        </Grow>
                        <Grow  in={openSecond}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(open ? { timeout: 1000 } : {})}
                        >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faDragon}  />
                                </ListItemIcon>
                                <ListItemText primary="Pants"  />
                            </ListItem>
                            
                        </Grow>
                        <Grow  in={openSecond}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(open ? { timeout: 1500 } : {})}
                        >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faShoePrints}  />
                                </ListItemIcon>
                                <ListItemText primary="Shoes"  />
                            </ListItem>
                        </Grow>
                        <Grow  in={openSecond}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(open ? { timeout: 2000 } : {})}
                        >
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faHatWizard}  />
                                </ListItemIcon>
                                <ListItemText primary="Hats"  />
                            </ListItem>
                        </Grow>
                    </List>
                </Collapse>
            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon />
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.content}>
                <div className={classes.toolbar} />

            </div>
        </div>
    );
}
ResponsiveDrawer.propTypes = {
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
};
export default ResponsiveDrawer;