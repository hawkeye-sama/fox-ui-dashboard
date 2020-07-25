
// @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";
import React from "react";
// @material-ui/icons

// core components
import MyTabs from "components/CustomTabs/MyCustomTab.js";


import { Slide, Grow } from "@material-ui/core";
import { useSelector } from "react-redux";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import { Home, HomeOutlined, AddCircle, AddCircleOutline, Edit, EditOutlined, Delete, DeleteOutline } from '@material-ui/icons'
import CategoriesHome from "./tabs/CategoriesHome";


// const useStyles = makeStyles(styles);

export default function Categories(props) {

    const [activeTab, setActiveTab] = React.useState(0);
    const pageAnimation = useSelector(state => state.pageAnimation);
    const [productTabsAnimation, setProductTabsAnimation] = React.useState("up");
    
    // const classes = useStyles();
    return (
        <div>
            <Grow in={true} timeout={500}>
                <div>
                    <Slide in={true} direction={pageAnimation.animationType} timeout={200}>
                        <div>
                            {/* Tabs */}
                            <MyTabs
                                myClick={(activeTab, productTabsAnimation) => { setActiveTab(activeTab); setProductTabsAnimation(productTabsAnimation) }}
                                customColor={"customPurple"}
                                tabs={[
                                    {
                                        tabName: "Home",
                                        ...(activeTab === 0 ? { tabIcon: Home } : { tabIcon: HomeOutlined }),
                                        tabContent: (
                                            <div>
                                                    <div>
                                                        <CategoriesHome direction={productTabsAnimation} />
                                                    </div>
                                            </div>

                                        )
                                    },
                                    {
                                        tabName: "Add",
                                        ...(activeTab === 1 ? { tabIcon: AddCircle } : { tabIcon: AddCircleOutline }),
                                        tabContent: (
                                            <div>


                                                <Slide in={true} direction={productTabsAnimation} timeout={400}>
                                                    <div>
                                                        
                                                    </div>
                                                </Slide>
                                            </div>

                                        )
                                    },
                                    {
                                        tabName: "Edit",
                                        ...(activeTab === 2 ? { tabIcon: Edit } : { tabIcon: EditOutlined }),
                                        tabContent: (

                                            <Slide in={true} direction={productTabsAnimation} timeout={400}>
                                                <div>
                                                   
                                                </div>
                                            </Slide>

                                        )
                                    },
                                    {
                                        tabName: "Delete",
                                        ...(activeTab === 3 ? { tabIcon: Delete } : { tabIcon: DeleteOutline }),
                                        tabContent: (

                                            <Slide in={true} direction={productTabsAnimation} timeout={400}>
                                                <div>
                                                </div>
                                            </Slide>

                                        )
                                    }
                                ]}
                            />
                        </div>
                    </Slide>
                </div>
            </Grow>
        </div>
    );
}
