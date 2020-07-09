import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomSelect from "components/CustomSelect/CustomSelect.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
// import { AttachMoney, AddAPhoto } from "@material-ui/icons";
import {  Grow } from "@material-ui/core";
import MyCustomTable from "../../../components/MyCustomTable/MyCustomTable";


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

export default function ProductsEdit(props) {
    const classes = useStyles();

    // const [catValue,setCatValue] = React.useState("");
    // const [manuValue,setManuValue] = React.useState("");
    // // const [imageFiles,setImageFiles] = React.useState([]);
    // const [iconFieldHolder,setIconFieldHolder] = React.useState("");

    // function handleCategoryChange(e){
    //     setCatValue(e.target.value);
    // }
    // function handleManufacturerChange(e){
    //     setManuValue(e.target.value);
    // }

    // function handleFileSelection(e){
    //     var vals = [...e.target.files]
    //     // setImageFiles((prevState) => [...prevState, ...e.target.files])
    //     var myIconFieldHolder = iconFieldHolder; 
    //     vals.forEach(function (file){
    //         myIconFieldHolder = myIconFieldHolder + file.name.substring(0,3) + "---." + file.type.substring(6,) +", "
    //     })
    //     setIconFieldHolder(myIconFieldHolder);
    // }
    // console.log(imageFiles)
    return (
        <div>
            <Grow in={true}
                {...(true ? { timeout: 1000 } : {})}>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card>
                                <CardHeader color="rose">
                                    <h4 className={classes.cardTitleWhite}>Edit Products</h4>
                                    <p className={classes.cardCategoryWhite}>You can Edit products by using following table</p>
                                </CardHeader>
                                <CardBody>
                                   <Grow in={true} timeout={1200}>
                                       <div>
                                       <MyCustomTable
                                            // tableHeaderColor="rose"
                                            // tableHead={["ID", "Name", "Salary", "Country"]}
                                            // tableData={[
                                            //     ["1", "Dakota Rice", "$36,738", "Niger"],
                                            //     ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                                            //     ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                                            //     ["4", "Philip Chaney", "$38,735", "Korea, South"],
                                            // ]}
                                        />
                                       </div>
                                   </Grow>
                                    
                                </CardBody>
                                <CardFooter>
                                    <Grow in={true}
                                        {...(true ? { timeout: 1300 } : {})} >
                                        <div>
                                            <Button color="rose">Submit</Button>
                                        </div>
                                    </Grow>
                                    
                                </CardFooter>
                            </Card>
                        </GridItem>

                    </GridContainer>

                </div>
            </Grow>
        </div>
    );
}
