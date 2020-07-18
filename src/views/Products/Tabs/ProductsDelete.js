import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomSelect from "components/CustomSelect/CustomSelect.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
// import { AttachMoney, AddAPhoto } from "@material-ui/icons";
import { Grow, IconButton } from "@material-ui/core";
import MyCustomTable from "../../../components/MyCustomTable/MyCustomTable";

import testImage from "assets/img/faces/kendall.jpg";


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
    },
    avartarIconButton:{
        padding:"0",
        borderColor:"#82818194",
        transition: "box-shadow 0.2s, top 0.2s",
        boxShadow:" 0 0 3px #515151",
        top:0,
        '&:hover':{
            boxShadow:"rgba(0, 0, 0, 0.52) 3px 4px 12px 0px, rgba(55, 71, 79, 0.62) 0px 7px 10px -5px",
            top:-5,
        },
        
    }
};

const useStyles = makeStyles(styles);

export default function ProductsDelete(props) {
    const classes = useStyles();
     

    return (
        <div>
            <Grow in={true}
                {...(true ? { timeout: 1000 } : {})}>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card>
                                <CardHeader color="danger">
                                    <h4 className={classes.cardTitleWhite}>Delete Products</h4>
                                    <p className={classes.cardCategoryWhite}>You can delete products by using following table</p>
                                </CardHeader>
                                <CardBody>
                                    <Grow in={true} timeout={1100}>
                                        <div>
                                            <MyCustomTable
                                                isDelete={true}
                                                tableHeaderColor="danger"
                                                tableHead={[
                                                    //field should match wih data object.
                                                    { title: 'Product Name', field: 'p_name' },
                                                    { title: 'Price', field: 'p_price' },
                                                    { title: 'Quantity', field: 'p_quantity' },
                                                    { title: 'Category', field: 'p_category' },
                                                    { title: 'Manufacturer', field: 'p_manufacturer' },
                                                    {
                                                        title: 'Images',
                                                        field: 'p_image',
                                                        render: rowData =>
                                                            <div>
                                                                <AvatarGroup max={4}>
                                                                    <IconButton className={classes.avartarIconButton}> 
                                                                        <Avatar 
                                                                            alt="Remy Sharp" 
                                                                            src={testImage} 
                                                                            style={{
                                                                                width: "40px",
                                                                                height: "40px",
                                                                            }}
                                                                            />
                                                                    </IconButton>                                                                
                                                                    <IconButton className={classes.avartarIconButton}> 
                                                                        <Avatar 
                                                                            alt="Remy Sharp" 
                                                                            src={testImage} 
                                                                            style={{
                                                                                width: "40px",
                                                                                height: "40px",
                                                                            }}
                                                                        />
                                                                    </IconButton>
                                                                    <IconButton className={classes.avartarIconButton}> 
                                                                        <Avatar 
                                                                            alt="Remy Sharp" 
                                                                            src={testImage} 
                                                                            style={{
                                                                                width: "40px",
                                                                                height: "40px",
                                                                            }}
                                                                            />
                                                                    </IconButton>
                                                                </AvatarGroup>
                                                            </div>

                                                    },

                                                ]}
                                                tableData={[
                                                    { p_name: 'T shirt', p_price: '$ 20', p_quantity: 22, p_category: "Shirts", p_manufacturer: "Khaadi",  },
                                                    { p_name: 'Pants', p_price: '$ 10', p_quantity: 52, p_category: "Pants", p_manufacturer: "Khishmish", },
                                                    { p_name: 'Cosemetics', p_price: '$ 503', p_quantity: 52, p_category: "Cosemetics", p_manufacturer: "Limelight", },
                                                    { p_name: 'Jeans', p_price: '$ 20', p_quantity: 52, p_category: "Pants", p_manufacturer: "Limelight", },
                                                    { p_name: 'Sleeveless', p_price: '$ 90', p_quantity: 52, p_category: "Shirts", p_manufacturer: "Limelight", },
                                                    { p_name: 'Watch', p_price: '$ 70', p_quantity: 52, p_category: "Acessories", p_manufacturer: "Rado", },
                                                    
                                                ]}
                                          
                                            />


                                        </div>
                                    </Grow>

                                </CardBody>
                            </Card>
                        </GridItem>

                    </GridContainer>

                </div>
            </Grow>
        </div>
    );
}
