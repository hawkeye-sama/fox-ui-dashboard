import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { AttachMoney, AddAPhoto } from "@material-ui/icons";
import { InputAdornment, Grow, IconButton } from "@material-ui/core";


const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

export default function ProductsAdd(props) {
    const classes = useStyles();

    return (
        <div>
            <Grow in={true}
                {...(true ? { timeout: 1000 } : {})}>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card>
                                <CardHeader color="warning">
                                    <h4 className={classes.cardTitleWhite}>Add Products</h4>
                                    <p className={classes.cardCategoryWhite}>You can add more products by filling this form</p>
                                </CardHeader>
                                <CardBody>
                                    <Grow in={true}
                                        {...(true ? { timeout: 1200 } : {})}>
                                        <div>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={5}>
                                                    <CustomInput
                                                        type="text"
                                                        labelText="Product Name"
                                                        id="productName"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={3}>
                                                    <CustomInput
                                                        labelText="Price"
                                                        type="number"
                                                        id="price"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            endAdornment: (
                                                                <InputAdornment>
                                                                    <AttachMoney color="action" />
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <CustomInput
                                                        labelText="Quantity"
                                                        type="number"
                                                        id="quantity"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                    />
                                                </GridItem>
                                            </GridContainer>
                                        </div>
                                    </Grow>
                                    <Grow in={true}
                                        {...(true ? { timeout: 1400 } : {})}>
                                        <div>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <CustomInput
                                                        labelText="Category"
                                                        id="Category"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <CustomInput
                                                        labelText="Manufacturer"
                                                        id="Manufacturer"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <CustomInput
                                                        labelText="Click on icon to add image"
                                                        id="Images"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}


                                                        inputProps={{
                                                            disabled: true,
                                                            endAdornment: (
                                                                <InputAdornment>
                                                                    <input style={{display: 'none'}} accept="image/*" id="icon-button-file" type="file" />
                                                                    <label htmlFor="icon-button-file">
                                                                        <IconButton  style={{color:"#757575b8"}} aria-label="upload picture" component="span">
                                                                            <AddAPhoto  />
                                                                        </IconButton>
                                                                    </label>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    />
                                                </GridItem>
                                            </GridContainer>

                                        </div>
                                    </Grow>

                                    <Grow in={true}
                                        {...(true ? { timeout: 1600 } : {})}>
                                        <div>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={12}>
                                                    <CustomInput
                                                        labelText="Any Description"
                                                        id="description"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            multiline: true,
                                                            rows: 5
                                                        }}
                                                    />
                                                </GridItem>
                                            </GridContainer>

                                        </div>
                                    </Grow>
                                </CardBody>
                                <CardFooter>
                                    <Button color="warning">Submit</Button>
                                </CardFooter>
                            </Card>
                        </GridItem>

                    </GridContainer>

                </div>
            </Grow>
        </div>
    );
}
