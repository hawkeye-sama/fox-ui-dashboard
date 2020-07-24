import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import { Fade, Slide, CircularProgress } from "@material-ui/core";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import ProductsViewedChart from "components/MyCharts/ProductsCharts/ProductsViewedChart";
import { ShoppingCart } from "@material-ui/icons";
import ProductsAddedChart from "components/MyCharts/ProductsCharts/ProductsAddedChart";
import ProductsPopularChart from "components/MyCharts/ProductsCharts/ProductsPopularChart";

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
// import { AttachMoney, AddAPhoto } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import MyCustomTable from "components/MyCustomTable/MyCustomTable";
import testImage from "assets/img/faces/kendall.jpg";




const useStyles = makeStyles(styles);

export default function ProductsHome(props) {
  const classes = useStyles();
  const [showContent, setShowContent] = React.useState(false)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      
    }, 500)
    return () => {
      clearTimeout(timer)
      setShowContent(false)
    };
  }, [])
  return (
    <div>
      <Fade in={!showContent} timeout={0} mountOnEnter unmountOnExit>
        <div style={{ position: "absolute", top: 200, left: "50%" }}>
          <CircularProgress style={{ color: "#fea11d" }} />
        </div>
      </Fade>
      <Fade in={showContent} mountOnEnter unmountOnExit timeout={1200}>
        <div>
          <Slide in={true} direction={props.direction} timeout={400}>
            <div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="warning" stats icon>
                      <CardIcon color="warning">
                        <ShoppingCart />
                      </CardIcon>
                      <p className={classes.cardCategory}>Total Products</p>
                      <h3 className={classes.cardTitle}>
                        1000
                      </h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <DateRange />
                        Updated 24 hours ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="success" stats icon>
                      <CardIcon color="success">
                        <Store />
                      </CardIcon>
                      <p className={classes.cardCategory}>Products Viewed</p>
                      <h3 className={classes.cardTitle}>10</h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <DateRange />
                        Last 24 Hours
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="danger" stats icon>
                      <CardIcon color="danger">
                        <Icon>info_outline</Icon>
                      </CardIcon>
                      <p className={classes.cardCategory}>Incomplete Products</p>
                      <h3 className={classes.cardTitle}>75</h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <LocalOffer />
                        Checked few minutes ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="info" stats icon>
                      <CardIcon color="info">
                        <Accessibility />
                      </CardIcon>
                      <p className={classes.cardCategory}>Recommendation done</p>
                      <h3 className={classes.cardTitle}>+245</h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <Update />
                        Just Updated
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Card chart>
                    <CardHeader color="warning" >
                      <ProductsViewedChart />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Daily Products Viewed</h4>
                      <p className={classes.cardCategory}>
                        <span className={classes.successText}>
                          <ArrowUpward
                            className={classes.upArrowCardCategory}
                          />{" "}
                              55%
                        </span>{" "}
                          increased views.
                      </p>
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> updated 4 minutes ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card chart>
                    <CardHeader color="success" >
                      <ProductsAddedChart />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Products Added</h4>
                      <p className={classes.cardCategory}>
                        Each month inventory comparison
                      </p>
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> Updated 2 days ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card chart>
                    <CardHeader color="danger">
                      <ProductsPopularChart />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Popular Products</h4>
                      <p className={classes.cardCategory}>
                        Pie chart comparison
                      </p>
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> Updated 2 days ago.
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>
                        Products
                      </h4>
                      <p className={classes.cardCategoryWhite}>
                        Following shows all Items
                      </p>
                    </CardHeader>
                    <CardBody>
                      <MyCustomTable
                        tableHeaderColor="primary"
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
                          { p_name: 'T shirt', p_price: '$ 20', p_quantity: 22, p_category: "Shirts", p_manufacturer: "Khaadi" },
                          { p_name: 'Pants', p_price: '$ 50', p_quantity: 52, p_category: "Pants", p_manufacturer: "Limelight" },
                          { p_name: 'Watch', p_price: '$ 100', p_quantity: 82, p_category: "Accessories", p_manufacturer: "Rado" },
                          { p_name: 'Kura', p_price: '$ 10', p_quantity: 10, p_category: "Shirts", p_manufacturer: "Levi" },
                          { p_name: 'Tights', p_price: '$ 15', p_quantity: 1, p_category: "Pants", p_manufacturer: "Go" },
                          { p_name: 'Shorts', p_price: '$ 70', p_quantity: 5, p_category: "Pants", p_manufacturer: "Lang" },
                          

                        ]}
                      
                      />

                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>

            </div>

          </Slide>
        </div>
      </Fade>
    </div>
  );
}
