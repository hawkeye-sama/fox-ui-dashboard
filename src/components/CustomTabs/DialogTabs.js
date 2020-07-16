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

import styles from "assets/jss/material-dashboard-react/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function DialogTabs(props) {
  const [activeTab, setValue] = React.useState(props.activeTab);
  
  const handleChange = (event, value) => {
    setValue(value);
    props.myClick(value);
  };
  const classes = useStyles();
  const { plainTabs, tabs, title, rtlActive, myHeaderColor } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
  React.useEffect(() => {
    setValue(props.activeTab);
}, [props.activeTab])


  return (
    // Not optimized way of using classes, To do improve code structure
    <Card plain={plainTabs} style={{
        backgroundColor:"#eeeeee", 
        boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0)",
        marginTop:0,
        marginBottom:0,
    }}>
      <CardHeader plain={plainTabs}
        style={{
                background: myHeaderColor.background,
                boxShadow:myHeaderColor.boxShadow,
                  marginLeft:0,
                  marginRight:0,
                }}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={activeTab}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
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
                  selected: classes.tabSelected,
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
      <CardBody style={{backgroundColor:"white"}}>
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

DialogTabs.propTypes = {
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
