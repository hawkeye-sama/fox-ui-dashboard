import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-dashboard-react/components/CURDTabsStyle.js";


const useStyles = makeStyles(styles);

export default function MyCustomTabs(props) {
  const [activeTab, setValue] = React.useState(0);
  const handleChange = (event, value) => {
    var productTabsAnimation="up";
    if(activeTab > value){
      productTabsAnimation = "left"
    }else if(activeTab < value) {
      productTabsAnimation = "right"
    }
    setValue(value);
    props.myClick(value,productTabsAnimation);
    
  };
  const classes = useStyles();
  const { headerColor,customColor, plainTabs, tabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
  return (
    <Card plain={plainTabs} style={{
      backgroundColor:"#eeeeee", 
      boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0)",

    }}>
      <CardHeader color={headerColor} plain={plainTabs} style={{
          background: "#fff",
          boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.14)",
          borderRadius:10,
          padding:6,
        }}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={activeTab}
          onChange={handleChange}
          
          classes={{
            root: classes.tabsRoot,
            indicator: classes.indicatorStyle,
            scrollButtons: classes.displayNone
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected+" "+classes[customColor],
                  wrapper: classes.tabWrapper
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop, key) => {
          if (key === activeTab) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
}

MyCustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  customColor: PropTypes.oneOf([
    "customBlue",
    "customOrange",
    "customPurple",
    "customPink",
    "customGreen",
    "customDeepOrange",
    "customRed",
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};
