import React from 'react';
// import Button from '@material-ui/core/Button';


import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import CustomButton from "components/CustomButtons/Button.js";
import Button from '@material-ui/core/Button';
import { Grow } from '@material-ui/core';
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import { AttachMoney } from "@material-ui/icons";
import { InputAdornment } from "@material-ui/core";
// import CustomButton from "components/CustomButtons/Button.js";

export default function ModifyContent(props) {

    const { onClose } = props;
    const [catValue, setCatValue] = React.useState("");
    const [manuValue, setManuValue] = React.useState("");
    // const [imageFiles,setImageFiles] = React.useState([]);

    function handleCategoryChange(e) {
        setCatValue(e.target.value);
    }
    function handleManufacturerChange(e) {
        setManuValue(e.target.value);
    }




    return (
        <div >
            <Grow in={true} timeout={700} style={{ transformOrigin: "0 0 0" }} >
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Grow in={true} style={{ transformOrigin: "0 0 0" }}
                            {...(true ? { timeout: 800 } : {})}>
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
                        <Grow in={true} style={{ transformOrigin: "0 0 0" }}
                            {...(true ? { timeout: 900 } : {})}>
                            <div>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomSelect
                                            labelText="Category"
                                            id="Category"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            value={catValue}
                                            handleChange={(e) => { handleCategoryChange(e) }}
                                            menuItems={[
                                                { label: "T-Shirt", value: 1 },
                                                { label: "Pants", value: 2 },
                                                { label: "Purse", value: 3 }
                                            ]}

                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomSelect
                                            labelText="Manufacturer"
                                            id="Category"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            value={manuValue}
                                            handleChange={(e) => { handleManufacturerChange(e) }}
                                            menuItems={[
                                                { label: "Khaadi", value: 1 },
                                                { label: "Tims", value: 2 },
                                                { label: "Levi's", value: 3 }
                                            ]}

                                        />
                                    </GridItem>
                                </GridContainer>

                            </div>
                        </Grow>

                        <Grow in={true} style={{ transformOrigin: "0 0 0" }}
                            {...(true ? { timeout: 1000 } : {})}>
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
                        <Grow in={true} timeout={1100} style={{ transformOrigin: "0 0 0" }} >
                            <div>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div style={{textAlignLast:"end",marginTop:10}}>
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

            </Grow>


        </div>
    );
}
