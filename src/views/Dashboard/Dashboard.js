import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import {Store,ShoppingCart,Category,DateRange,Update} from "@material-ui/icons";

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
import { Slide, Fade } from "@material-ui/core";
// import { useSelector } from "react-redux";



import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import LineChartWithFill from "components/MyCharts/LineChartWithFill.js";
import BarChart from "components/MyCharts/BarChart";
import BarChartWithShapes from "components/MyCharts/BarChartWithShapes";

const useStyles = makeStyles(styles);

export default function Dashboard(props) {
 
  // const pageAnimation = useSelector(state => state.pageAnimation);
  const classes = useStyles();
  return (
    <div>
      <Fade in={true} timeout={1200}>
        <div>
          <Slide in={true} direction={"up"} timeout={400}>
            <div>
              <GridContainer>
            
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="info" stats icon>
                      <CardIcon color="info">
                        <ShoppingCart />
                      </CardIcon>
                      <p className={classes.cardCategory}>Products</p>
                      <h3 className={classes.cardTitle}>
                        400
                      </h3>
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
                    <CardHeader color="success" stats icon>
                      <CardIcon color="success">
                        <Category />
                      </CardIcon>
                      <p className={classes.cardCategory}>Categories</p>
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
                        <Store />
                      </CardIcon>
                      <p className={classes.cardCategory}>Manufacturers</p>
                      <h3 className={classes.cardTitle}>75</h3>
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
                    <CardHeader color="rose" stats icon>
                      <CardIcon color="rose">
                        <Accessibility />
                      </CardIcon>
                      <p className={classes.cardCategory}>Recommendations</p>
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
                    <CardHeader color="info" >
                      <LineChartWithFill 
                        chartData={[12, 17, 7, 17, 23, 18, 38]}
                        labels= {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
                        title="Products Viewed"
                        options={{
                          minVal:0,
                          maxVal:40,
                          stepSize:10,
                        }}
                      />
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
                    <CardHeader color="danger" >
                      {/* <ProductsAddedChart /> */}
                      <BarChart 
                        labels= {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']}
                        label= 'Added Products'
                        chartData= {[65, 59, 80, 81, 56, 55, 40, 100, 55, 20, 75, 30]}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Recommendation over time</h4>
                      <p className={classes.cardCategory}>
                        Monthly Recommendation done 
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
                    <CardHeader color="rose">
                      {/* <ProductsPopularChart /> */}
                      <BarChartWithShapes 
                        labels={['Jan', 'Feb', 'Mar']}
                        titles={['Shirt','Shoes']}
                        chartData = {[[20, 100, 56],[65, 59, 80]]}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Popular Categories</h4>
                      <p className={classes.cardCategory}>
                        Displaying popular categories 
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
                <GridItem xs={12} sm={12} md={4}>
                  <Card chart>

                    <CardHeader color="success" >
                      {/* <ProductsAddedChart /> */}
                      <BarChart 
                        labels= {['Rado', 'Khaadi', 'Lime', 'D&Q', "Levi's", 'JJ', 'Polo','North','Cate','Timber','Puma','Nike']}
                        label= 'Manufacturers'
                        chartData= {[5, 88, 60, 25, 84, 97, 33, 13, 21, 29, 47, 72]}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Manufacturers comparison</h4>
                      <p className={classes.cardCategory}>
                        Values of Manufacturers
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
                  <CardHeader color="warning" >
                      <LineChartWithFill 
                        chartData={[5, 88 , 50, 44, 78, 95, 65]}
                        labels= {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
                        title="Visits"
                        options={{
                          minVal:0,
                          maxVal:100,
                          stepSize:20,
                        }}
                      />
                      
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Website Views</h4>
                      <p className={classes.cardCategory}>
                        Daily website visitors
                      </p>
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> Updated today
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card chart>
                    <CardHeader color="primary">
                      {/* <ProductsPopularChart /> */}
                      <LineChartWithFill 
                        chartData={[78, 50, 40, 11, 68, 25, 5, 12, 35, 57, 20, 9]}
                        labels= {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']}
                        title="Visits"
                        options={{
                          minVal:0,
                          maxVal:100,
                          stepSize:20,
                        }}
                      />
                      
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Bugs</h4>
                      <p className={classes.cardCategory}>
                         Month wise Bugs comparison
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

            </div>
          </Slide>
        </div>
      </Fade>
    </div>
  );
}
