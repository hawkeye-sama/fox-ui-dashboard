import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, IconButton } from '@material-ui/core';

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import myImage from 'assets/img/faces/kendall.jpg'
// added custom css to make the carousel responsive
import 'assets/css/MyCarouselCustom.css'
import {  Cancel } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    FavouriteIconSettings: {
        position: 'absolute',
        borderRadius: 20,
        top:15,
        right:185,
        backgroundColor: "#757575",
        padding: 10,
        width: 20,
        height: 20,
        color: "white",
        transition: "box-shadow 0.2s, top 0.2s",
        boxShadow:" 0 0 3px #515151",
        
        '&:hover':{
            color:"#ff9800",
            backgroundColor:"white",
            boxShadow:"rgba(252, 145, 7, 0.62) -1px -1px 20px 0px, rgba(255, 152, 0, 0.66) 0px 7px 10px -5px",
            top:13,
        },
        ['@media screen and (min-width: 0px) and (max-width: 400px)']: { // eslint-disable-line no-useless-computed-key
            right:100,
            top:10,
        }

    }
    
}));
function Project(props) {
    const classes = useStyles();
   
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Paper

                        style={{
                            
                            height: "280px",
                            width:"280px",
                            overflow: "hidden",
                            textAlignLast: "center"
                        }}
                        elevation={10}
                    >
                        <div>
                            <img className="imgSettings" alt="RS" src={myImage} />
                            <IconButton  className={classes.FavouriteIconSettings} >
                                <Cancel   />                   
                            </IconButton>
                        </div>

                    </Paper>
                </GridItem>
            </GridContainer>
        </div>

    )
}

const items = [
    {
        name: "Lear Music Reader",
        description: "A PDF Reader specially designed for musicians.",
        color: "#64ACC8"
    },
    {
        name: "Hash Code 2019",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        color: "#7D85B1"
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78"
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E"
    }
]

export default function MyCarousel (props) {
 
        return (
            <div style={{ color: "#494949" }}>
                <GridContainer>
                    <GridItem xs={3} sm={3} md={3} >
                        <Carousel
                            className="carousalSettings"
                            autoPlay={false}
                            timer={300}
                            animation={"fade"}
                            indicators={true}
                            timeout={300}
                            navButtonsAlwaysVisible={true}

                        >
                        

                                
                                {
                                    items.map((item, index) => {
                                        return <div key={index} style={{textAlign:"-webkit-center"}}><Project item={item} key={index}  /></div>
                                    })
                                }
                     
                        </Carousel>
                    </GridItem>
                </GridContainer>

            </div>
        )
}