
// @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";
import React from "react";
// @material-ui/icons

// core components


import { Slide, Grow } from "@material-ui/core";
import { useSelector } from "react-redux";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import ManuHome from "./tabs/ManuHome";


// const useStyles = makeStyles(styles);

export default function Manufacturers(props) {

    const pageAnimation = useSelector(state => state.pageAnimation);

    // const classes = useStyles();
    return (
        <div>
            <Grow in={true} timeout={500}>
                <div>
                    <Slide in={true} direction={pageAnimation.animationType} timeout={200}>
                        <div>
                            <ManuHome direction={"up"} />
                        </div>
                    </Slide>
                </div>
            </Grow>
        </div>
    );
}
