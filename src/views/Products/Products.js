
// @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";
import React from "react";
// @material-ui/icons

// core components
import MyTabs from "components/CustomTabs/MyCustomTab.js";

import Tasks from "components/Tasks/Tasks.js";
import { server } from "variables/general.js";

import { Slide, Grow } from "@material-ui/core";
import { useSelector } from "react-redux";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import ProductsHome from "./Tabs/ProductsHome";
import { Home, HomeOutlined, AddCircle, AddCircleOutline, Edit, EditOutlined, Delete, DeleteOutline } from '@material-ui/icons'
import ProductsAdd from "./Tabs/ProductsAdd";
import ProductsEdit from "./Tabs/ProductsEdit";


// const useStyles = makeStyles(styles);

export default function Products(props) {

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
                                headerColor="primary"
                                tabs={[
                                    {
                                        tabName: "Home",
                                        ...(activeTab === 0 ? { tabIcon: Home } : { tabIcon: HomeOutlined }),
                                        tabContent: (
                                            <div>


                                                <Slide in={true} direction={productTabsAnimation} timeout={400} >
                                                    <div>
                                                        < ProductsEdit />
                                                    </div>
                                                </Slide>
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
                                                        <ProductsAdd />
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
                                                    <ProductsHome />
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
                                                    <Tasks
                                                        checkedIndexes={[1]}
                                                        tasksIndexes={[0, 1, 2]}
                                                        tasks={server}
                                                    />
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
