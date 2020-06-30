import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, IconButton, Typography, Box, Avatar, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import myImage from '../imgs/testImage.jpg'
import { FavoriteBorder, Favorite, Details, AddShoppingCart } from '@material-ui/icons';
import '../css/addCartAnimation.css'

const useStyles = makeStyles((theme) => ({
    paper: {

        color: theme.palette.text.secondary,
        width: " 230px",
        height: "310px",
        transition: "width 1s, height 1s",

    },
    avatarSettings: {
        width: '230px',
        height: '165px',
        transition: "width 1s, height 1s",
    },
    FavouriteIconSettings: {
        position: 'absolute',
        borderRadius: 20,
        marginLeft: -40,
        marginTop: 10,
        backgroundColor: "white",
        padding: 16,
        width: 2,
        height: 2,
        color: "#757575",
        '&:hover': {
            backgroundColor: "white",
            color: "#757575",
        }
    },
    cardBottomSettings: {
        paddingLeft: 5,
    },
    innerBrandSettings: {
        position: 'absolute',
        marginLeft: 85,
        marginTop: -40,
        backgroundColor: "white",
        padding: 22,
        width: 5,
        height: 5,
        color: "#757575",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    button: {

    }

}));
const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);
const CartButton = withStyles((theme) => ({
    root: {
        border: "0px solid black",
        borderColor: "#ff6d00",
        backgroundColor: "#ff6d00",
        color: "white",
        boxShadow: "0 4px 8px 0 rgba(255, 109, 0, 0.30), 0 6px 20px 0 rgba(255, 109, 0, 0.3)",
        '&:hover': {
            backgroundColor: "#ff6d00",
            color: "white",
            boxShadow: "0 4px 8px 0 rgba(255, 109, 0, 0.60), 0 6px 20px 0 rgba(255, 109, 0, 0.60)",
        },
        '&:active': {
            boxShadow: "0 4px 8px 0 rgba(255, 109, 0, 0.0), 0 6px 20px 0 rgba(255, 109, 0, 0.0)"
        }
    },
}))(Button);
const DetailsButton = withStyles((theme) => ({
    root: {

        border: "0px solid black",
        borderColor: "#039be5",
        backgroundColor: "#039be5",
        color: "white",
        boxShadow: "0 4px 8px 0 rgba(3, 155, 229, 0.30), 0 6px 20px 0 rgba(3, 155, 229, 0.3)",
        '&:hover': {
            backgroundColor: "#039be5",
            color: "white",
            boxShadow: "0 4px 8px 0 rgba(3, 155, 229, 0.60), 0 6px 20px 0 rgba(3, 155, 229, 0.60)",
        },
        '&:active': {
            boxShadow: "0 4px 8px 0 rgba(3, 155, 229, 0.0), 0 6px 20px 0 rgba(3, 155, 229, 0.0)"
        }
    },
}))(Button);

export default function ProductCard() {
    const [itemClicked, setItemClicked] = React.useState((false))
    const [elevationValue, setElevaionValue] = React.useState((5))
    const [isFavouriteItem, setFavouriteItem] = React.useState((false))
    const [setAnimation, startAnimation] = React.useState((false))
    const classes = useStyles();
    const setMyItemClicked = (value) => {
        setItemClicked(value)
    }
    const setStartAnimation = (value) => {
        setTimeout(()=>{
            console.log("hello");
            startAnimation(!value);
        },1400);
        startAnimation(value);

    }
    return (
        
        <div>

            <Paper
                className={classes.paper}
                style={itemClicked ? { width: "300px", height: "300px" } : {}}
                onMouseLeave={(e) => { setElevaionValue(5) }}
                onMouseOver={(e) => { setElevaionValue(10) }}
                square={false}
                elevation={elevationValue}

            >
                <div>
                    <img className={classes.avatarSettings} alt="RS" style={itemClicked ? { width: "300px", height: "300px" } : {}} src={myImage} />
                    <IconButton style={isFavouriteItem ? { color: "#ff6d00" } : { color: "#757575" }} className={classes.FavouriteIconSettings} onClick={(e) => { setFavouriteItem(!isFavouriteItem) }}>
                        {isFavouriteItem ?
                            <Favorite fontSize="small" />
                            :
                            <FavoriteBorder fontSize="small" />
                        }
                    </IconButton>
                    <Avatar className={classes.innerBrandSettings}>
                        BA
                    </Avatar>
                    <div className={classes.cardBottomSettings} style={{ paddingTop: 10 }}
                    // onClick={(e) => { setMyItemClicked(!itemClicked) }}
                    >
                        <Typography component="div" style={{ paddingBottom: 5 }}>
                            <Box fontWeight="fontWeightBold" fontSize={16}>
                                Normal T shirt
                            </Box>
                        </Typography>
                        <Typography component="div" style={{ paddingBottom: 5 }}>
                            <Box fontWeight="fontWeightRegular" fontSize={16} >
                                $30.99
                            </Box>
                        </Typography>

                        <Box borderColor="transparent">
                            <StyledRating
                                name="customized-color"
                                defaultValue={4}
                                readOnly
                                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                icon={<Favorite fontSize="small" />}
                            />

                        </Box>


                        <CartButton
                            style={{ marginTop: 5, }}
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            startIcon={<AddShoppingCart />}
                            onClick={(e) => { setMyItemClicked(!itemClicked) }}
                        >
                            Add Cart
                        </CartButton>


                        <DetailsButton
                            style={{ marginLeft: 5, marginTop: 5, }}
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            startIcon={<Details />}
                            onClick={(e) => { setStartAnimation(true) }}
                        >
                            Details
                        </DetailsButton>
                        {setAnimation ?
                            <div className="main">
                                <div className="circle"></div>
                            </div>
                            :
                            <div></div>
                            }


                    </div>
                </div>


            </Paper>

        </div>

    )

}