import React from 'react';
import MyAppBar from '../../components/AppBar';
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    pageSettings:{
        marginTop: 5,
        backgroundColor:"#f5f5f5",
    }
  }));

export default function MainSite() {
    const tab = useSelector(state => state.tab);
    const classes = useStyles();
    return (
        <div>
            {/* My App Bar */}
            < MyAppBar />
            {/* Page Below */}
            <div className={classes.pageSettings}>
                <TabPanel value={tab} index={0} >
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    
                </TabPanel >
                <TabPanel value={tab} index={1}>
                    Page Two
                </TabPanel>
            </div>
            
        </div >
    )

}