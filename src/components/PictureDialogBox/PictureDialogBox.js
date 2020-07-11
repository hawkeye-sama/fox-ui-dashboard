import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grow } from '@material-ui/core';
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import { AttachMoney, AddAPhoto } from "@material-ui/icons";
import { InputAdornment, IconButton } from "@material-ui/core";
import CustomButton from "components/CustomButtons/Button.js";

export default function PictureDialogBox(props) {
    const { openDialog, onCloseDialog, title } = props;


    const [catValue, setCatValue] = React.useState("");
    const [manuValue, setManuValue] = React.useState("");
    // const [imageFiles,setImageFiles] = React.useState([]);
    const [iconFieldHolder, setIconFieldHolder] = React.useState("");

    function handleCategoryChange(e) {
        setCatValue(e.target.value);
    }
    function handleManufacturerChange(e) {
        setManuValue(e.target.value);
    }

    function handleFileSelection(e) {
        var vals = [...e.target.files]
        // setImageFiles((prevState) => [...prevState, ...e.target.files])
        var myIconFieldHolder = iconFieldHolder;
        vals.forEach(function (file) {
            myIconFieldHolder = myIconFieldHolder + file.name.substring(0, 3) + "---." + file.type.substring(6,) + ", "
        })
        setIconFieldHolder(myIconFieldHolder);
    }



    return (
        <div>
            <Dialog open={openDialog}
                onClose={onCloseDialog}
                aria-labelledby="form-dialog-title"
                onEscapeKeyDown={onCloseDialog}
                TransitionComponent={Grow}
                transitionDuration={300}
                fullWidth={true}
                maxWidth="md"
            >
                <Grow in={true} timeout={600} style={{ transformOrigin: "0 0 0" }} >
                    <div>
                        <DialogTitle id="form-dialog-title" style={{
                            background: " linear-gradient(60deg, #ab47bc, #8e24aa)",
                            boxShadow: " 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4)",
                            color: "white",
                        }}>
                            <div>
                                {title}
                            </div>
                            <div>
                                <input
                                    accept="image/*"
                                    style={{display:"none"}}
                                    id="contained"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="contained">
                                    <CustomButton
                                        component="span"
                                        round
                                        color="transparent"
                                        
                                        style={{
                                            position: "absolute",
                                            top: 5,
                                            right: 20,
                                            padding: 10,
                                            color: "white",
                                            border: "2px solid #ffffff87",
                                        }}
                                    >
                                        Click here to upload
                                        <AddAPhoto style={{
                                                marginTop: "-5px",
                                                marginLeft: "10px"
                                            }} 
                                        />
                                    </CustomButton>                                
                                </label>
                            </div>



                        </DialogTitle>
                    </div>
                </Grow>

                <DialogContent>
                    <Grow in={true} timeout={700} style={{ transformOrigin: "0 0 0" }} >
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Grow in={true} style={{ transformOrigin: "0 0 0" }}
                                    {...(true ? { timeout: 900 } : {})}>
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
                                    {...(true ? { timeout: 1000 } : {})}>
                                    <div>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={3}>
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
                                            <GridItem xs={12} sm={12} md={3}>
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
                                            <GridItem xs={12} sm={12} md={6}>
                                                <CustomInput
                                                    labelText={(iconFieldHolder === "") ?
                                                        'Click on icon to add images' : iconFieldHolder
                                                    }
                                                    id="Images"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}


                                                    inputProps={{
                                                        disabled: true,
                                                        endAdornment: (
                                                            <InputAdornment>
                                                                <input
                                                                    style={{ display: 'none' }}
                                                                    multiple accept="image/*"
                                                                    id="icon-button-file"
                                                                    type="file"

                                                                    onChange={handleFileSelection}
                                                                />
                                                                <label htmlFor="icon-button-file">
                                                                    <IconButton style={{ color: "#757575b8" }} aria-label="upload picture" component="span">
                                                                        <AddAPhoto />
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

                                <Grow in={true} style={{ transformOrigin: "0 0 0" }}
                                    {...(true ? { timeout: 1200 } : {})}>
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
                            </GridItem>

                        </GridContainer>

                    </Grow>

                </DialogContent>

                <DialogActions>
                    <Grow in={true} timeout={1400} style={{ transformOrigin: "0 0 0" }} >
                        <div>
                            <Button onClick={onCloseDialog} size="large" style={{ color: "#9c27b0", marginRight: 15 }}>
                                Cancel
                            </Button>
                            <CustomButton onClick={onCloseDialog} color="primary">Save</CustomButton>
                        </div>

                    </Grow>
                </DialogActions>
            </Dialog>
        </div>
    );
}
