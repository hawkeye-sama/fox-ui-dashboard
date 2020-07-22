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
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { bugs, website, server } from "variables/general.js";

import { Fade, Slide, CircularProgress } from "@material-ui/core";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import ProductsViewedChart from "../../../components/MyCharts/ProductsCharts/ProductsViewedChart";
import { ShoppingCart } from "@material-ui/icons";
import ProductsAddedChart from "../../../components/MyCharts/ProductsCharts/ProductsAddedChart";
import ProductsPopularChart from "../../../components/MyCharts/ProductsCharts/ProductsPopularChart";

const useStyles = makeStyles(styles);

export default function ProductsHome(props) {
  const classes = useStyles();
  const [showContent, setShowContent] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500)

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
                    <CardHeader  color="warning" stats icon>
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
                      <ProductsViewedChart  />
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
                      <ProductsAddedChart  />
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
                      <ProductsPopularChart  />
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
                <GridItem xs={12} sm={12} md={6}>
                  <CustomTabs
                    title="Tasks:"
                    headerColor="primary"
                    tabs={[
                      {
                        tabName: "Bugs",
                        tabIcon: BugReport,
                        tabContent: (
                          <Tasks
                            checkedIndexes={[0, 3]}
                            tasksIndexes={[0, 1, 2, 3]}
                            tasks={bugs}
                          />
                        ),
                      },
                      {
                        tabName: "Website",
                        tabIcon: Code,
                        tabContent: (
                          <Tasks
                            checkedIndexes={[0]}
                            tasksIndexes={[0, 1]}
                            tasks={website}
                          />
                        ),
                      },
                      {
                        tabName: "Server",
                        tabIcon: Cloud,
                        tabContent: (
                          <Tasks
                            checkedIndexes={[1]}
                            tasksIndexes={[0, 1, 2]}
                            tasks={server}
                          />
                        ),
                      },
                    ]}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader color="warning">
                      <h4 className={classes.cardTitleWhite}>
                        Employees Stats
              </h4>
                      <p className={classes.cardCategoryWhite}>
                        New employees on 15th September, 2016
              </p>
                    </CardHeader>
                    <CardBody>
                      <Table
                        tableHeaderColor="warning"
                        tableHead={["ID", "Name", "Salary", "Country"]}
                        tableData={[
                          ["1", "Dakota Rice", "$36,738", "Niger"],
                          ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                          ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                          ["4", "Philip Chaney", "$38,735", "Korea, South"],
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
