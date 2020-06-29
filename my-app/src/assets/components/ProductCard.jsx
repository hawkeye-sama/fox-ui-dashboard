import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar } from '@material-ui/core';
import myImage from  '../imgs/testImage.jpg'

const useStyles = makeStyles((theme) => ({
    paper: {
        
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: " 200px",
        height: "250px",
        transition: "width 1s, height 1s",
        
    },
    avatarSettings:{
        width: '200px',
        height: '150px',
        transition: "width 1s, height 1s",
    }
}));

export default function ProductCard() {
    const [itemClicked, setItemClicked] = React.useState((false))
    const [elevationValue, setElevaionValue] = React.useState((5))
    const classes = useStyles();
    const setMyItemClicked = (value) => {
        setItemClicked(value)
    }
    return (

        <Paper 
            className={classes.paper}
            style={itemClicked ? { width: "300px", height: "300px" } : {}}
            onMouseLeave={(e) => { setElevaionValue(5) }}
            onMouseOver={(e) => { setElevaionValue(10) }}
            square={false}
            elevation={elevationValue} onClick={(e) => { setMyItemClicked(!itemClicked) }}
        >
            <div>
                <Avatar className={classes.avatarSettings}  alt="RS"  style={itemClicked ? { width: "300px", height: "300px" } : {}} variant="square" src={myImage} />
            </div>
           

        </Paper>


    )

}