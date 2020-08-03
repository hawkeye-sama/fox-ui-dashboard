import React from 'react';
// import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import { Grow } from '@material-ui/core';
import DialogTabs from "components/CustomTabs/DialogTabs.js";


// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import { InsertPhoto, InsertPhotoOutlined, EditAttributes, EditAttributesOutlined } from '@material-ui/icons'
import ModifyContent from 'views/Products/Tabs/DialogTabContent/ModifyContent';
import ModifyImage from 'views/Products/Tabs/DialogTabContent/ModifyImage';
export default function TestDialog(props) {
    const { openDialog, onCloseDialog } = props;
   
    const [activeTab, setActiveTab] = React.useState(props.tabSelector);

    // const [imageFiles,setImageFiles] = React.useState([]);
    function handleCloseDialog(){
        onCloseDialog();
        setActiveTab(0);
    }
    React.useEffect(() => {
        setActiveTab(props.tabSelector);
    }, [props.tabSelector])
    return (
        <div>
            <Dialog open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="form-dialog-title"
                onEscapeKeyDown={handleCloseDialog}
                TransitionComponent={Grow}
                transitionDuration={300}
                maxWidth="lg"
            >
                <Grow in={true} timeout={600} style={{ transformOrigin: "0 0 0" }} >
                    <div>
                        <DialogTabs
                            activeTab={activeTab}
                            myClick={(activeTab) => {setActiveTab(activeTab)}}
                            myHeaderColor={{
                                // changing color between yellow and purple
                                background:"linear-gradient(60deg, #ffa726, #fb8c00)",
                                boxShadow:"rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgba(255, 152, 0, 0.4) 0px 7px 10px -5px"
                            }}
                            tabs={[
                                {
                                    tabName: "Modify",

                                    ...(activeTab === 0 ? { tabIcon: EditAttributes } : { tabIcon: EditAttributesOutlined }),
                                    tabContent: (
                                        <div>
                                            <ModifyContent onClose={handleCloseDialog} />
                                        </div>

                                    )
                                },
                                {
                                    tabName: "Images",
                                    ...(activeTab === 1 ? { tabIcon: InsertPhoto } : { tabIcon: InsertPhotoOutlined }),
                                    tabContent: (
                                        <div>
                                            <ModifyImage onClose={handleCloseDialog} />
                                        </div>

                                    )
                                },
                            ]}
                        />
                    </div>
                </Grow>
                

            </Dialog>
        </div>
    );
}
