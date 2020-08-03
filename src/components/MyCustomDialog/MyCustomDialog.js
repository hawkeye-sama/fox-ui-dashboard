import React from 'react';
// import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import { Grow } from '@material-ui/core';
import DialogTabs from "components/CustomTabs/DialogTabs.js";

export default function MyCustomDialog(props) {
    const { openDialog, onCloseDialog,headerColor } = props;
   
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
                                background:({
                                    fox: "linear-gradient(60deg, #ff7043, #ff7042)",
                                    warning: "linear-gradient(60deg, #ffa726, #fb8c00)",
                                    primary: "linear-gradient(60deg, #ab47bc, #8e24aa)",
                                    danger:  "linear-gradient(60deg, #ef5350, #e53935)",
                                    success: "linear-gradient(60deg, #66bb6a, #43a047)",
                                    info: "linear-gradient(60deg, #26c6da, #00acc1)",
                                    rose: "linear-gradient(60deg, #ec407a, #d81b60)",
                              
                                    
                                }[headerColor]),
                                boxShadow:({
                                    fox: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgb(255 112 67 / 0.4)",
                                    warning: "rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgba(255, 152, 0, 0.4) 0px 7px 10px -5px",
                                    primary: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4)",
                                    danger: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(244, 67, 54,.4)",
                                    success: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)",
                                    info: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4)",
                                    rose: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(233, 30, 99,.4)",
                                

                                }[headerColor])
                                  
                                // background:"linear-gradient(60deg, #ffa726, #fb8c00)",
                                // boxShadow:"rgba(0, 0, 0, 0.14) 0px 4px 20px 0px, rgba(255, 152, 0, 0.4) 0px 7px 10px -5px"
                            }}
                            tabs={
                                props.tabs.map((tab,i)=>(
                                    {    
                                        ...(activeTab === i ? { tabIcon: tab.MainIcon } : { tabIcon: tab.SecondaryIcon }),
                                        tabName:tab.title,
                                        tabContent: (
                                            <div key={i}>
                                                <tab.tabBody onClose={handleCloseDialog}  />
                                            </div>
                                        )
                                    }
                                ))


                                // {
                                //     tabName: "Modify",

                                //     ...(activeTab === 0 ? { tabIcon: EditAttributes } : { tabIcon: EditAttributesOutlined }),
                                //     tabContent: (
                                //         <div>
                                //             <ModifyContent onClose={handleCloseDialog} />
                                //         </div>

                                //     )
                                // },
                                // {
                                //     tabName: "Images",
                                //     ...(activeTab === 1 ? { tabIcon: InsertPhoto } : { tabIcon: InsertPhotoOutlined }),
                                //     tabContent: (
                                //         <div>
                                //             <ModifyImage onClose={handleCloseDialog} />
                                //         </div>

                                //     )
                                // },
                            }
                        />
                    </div>
                </Grow>
                

            </Dialog>
        </div>
    );
}




