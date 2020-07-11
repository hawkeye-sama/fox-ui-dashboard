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
import { Grow } from "@material-ui/core";
import MyCustomTable from "../../../components/MyCustomTable/MyCustomTable";
import MyCustomDialog from "../../../components/MyCustomDialog/MyCustomDialog";



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
    const [showDialogBox, setShowDialogBox] = React.useState(false);

    function handleSelection(rowId) {
        setShowDialogBox(true)
    }
    function handleClose() {
        setShowDialogBox(false)
    }
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
                                                tableHeaderColor="rose"
                                                tableHead={[
                                                    //field should match wih data object.
                                                    { title: 'Name', field: 'name' },
                                                    { title: 'Surname', field: 'surname' },
                                                    { title: 'Birth Year', field: 'birthYear' },
                                                    {
                                                        title: 'Birth Place',
                                                        field: 'birthCity',
                                                        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                                                    },
                                                ]}
                                                tableData={[
                                                    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                                    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                                                ]}
                                                handleRowSelection={handleSelection}
                                            />
                                            <MyCustomDialog
                                                openDialog={showDialogBox}
                                                onCloseDialog={handleClose}
                                                title="Modify Product"
                                            >
                                            
                                            </MyCustomDialog>
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
