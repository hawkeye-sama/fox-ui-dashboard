import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "components/CustomButtons/Button.js";
import Button from '@material-ui/core/Button';
import { Grow } from '@material-ui/core';
import CustomInput from "components/CustomInput/CustomInput.js";


const styles = {
    divStyle: {
        width:500,
        height:190,
        ['@media screen and (min-width: 0px) and (max-width: 400px)']: { // eslint-disable-line no-useless-computed-key
            width:271,   
        }
    },
};

const useStyles = makeStyles(styles);

export default function ModifyManu(props) {
    const classes = useStyles();
    const { onClose } = props;
    return (
        <div >
            <Grow in={true} timeout={700} style={{ transformOrigin: "0 0 0" }} >
                <div className={classes.divStyle}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Grow in={true} style={{ transformOrigin: "0 0 0" }}
                            {...(true ? { timeout: 800 } : {})}>
                            <div>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            type="text"
                                            labelText="Manufacturer Name"
                                            id="catName"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </Grow>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem  xs={12} sm={12} md={12} >
                        <Grow in={true} timeout={1100} style={{ transformOrigin: "0 0 0" }} >
                            <div>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div style={{textAlignLast:"end",marginTop:55}}>
                                            <Button onClick={onClose} size="large" style={{ color: "#ff7043", marginRight: 15 }}>
                                                Cancel
                                            </Button>
                                            <CustomButton onClick={onClose} color="fox" >
                                                Save
                                            </CustomButton>
                                        </div>
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </Grow>
                    </GridItem>
                </GridContainer>
                </div>
            </Grow>
        </div>
    );
}
