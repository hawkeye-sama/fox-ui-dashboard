import React from 'react';
// import Button from '@material-ui/core/Button';


import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import { Grow } from '@material-ui/core';
import CustomButton from "components/CustomButtons/Button.js";
import Button from '@material-ui/core/Button';

import MyCarousel from '../../../../components/MyCarousel/MyCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {AddAPhoto} from '@material-ui/icons';
// added custom css to make the carousel responsive
import 'assets/css/MyCarouselCustom.css'

export default function ModifyImage(props) {
    const { onClose } = props;


    return (
        <div >
            <Grow in={true} timeout={700} style={{ transformOrigin: "0 0 0" }} >
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Grow in={true}
                            {...(true ? { timeout: 900 } : {})}>
                            <div>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div className="containerSettings">
                                            <MyCarousel />
                                        </div>
                                    </GridItem>

                                </GridContainer>
                            </div>
                        </Grow>
                        <Grow in={true} timeout={1100} style={{ transformOrigin: "0 0 0" }} >
                            <div>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div style={{ textAlignLast: "end" }}>
                                            <Button onClick={onClose} size="large" style={{ color: "#ff7043", marginRight: 15 }}>
                                                Exit
                                            </Button>
                                          
                                                <input
                                                    accept="image/*"
                                                    style={{display:"none"}}
                                                    id="contained"
                                                    multiple
                                                    type="file"
                                                />
                                                <label htmlFor="contained">
                                                    <CustomButton component="span" color="fox">
                                                        <AddAPhoto />
                                                        <span style={{marginTop:1}}>Upload</span>
                                                    </CustomButton>                                
                                                </label>
                                         
                                        </div>


                                    </GridItem>
                                </GridContainer>

                            </div>

                        </Grow>
                    </GridItem>


                </GridContainer>

            </Grow>


        </div>
    );
}
