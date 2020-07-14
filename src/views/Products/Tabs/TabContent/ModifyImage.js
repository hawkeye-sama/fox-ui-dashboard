import React from 'react';
// import Button from '@material-ui/core/Button';


import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import { Grow } from '@material-ui/core';
import MyCarousel from '../../../../components/MyCarousel/MyCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import CustomButton from "components/CustomButtons/Button.js";

export default function ModifyImage(props) {

    // const { onClose } = props;
    




    return (
        <div >
            <Grow in={true} timeout={700} style={{ transformOrigin: "0 0 0" }} >
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Grow in={true} style={{ transformOrigin: "0 0 0" }}
                            {...(true ? { timeout: 900 } : {})}>
                            <div>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div style={{minWidth:630,minHeight:392,maxWidth:630,maxHeight:392}}>
                                            {/* <MyCarousel /> */}
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
