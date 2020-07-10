import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grow, Zoom, Fade } from '@material-ui/core';

export default function MyCustomDialog(props) {
    const { openDialog, onCloseDialog } = props;



    
    return (
        <div>
            <Dialog open={openDialog}
                onClose={onCloseDialog}
                aria-labelledby="form-dialog-title"
                onEscapeKeyDown={onCloseDialog}
                TransitionComponent={Grow}
                transitionDuration={300}
                
            >
                <Grow in={true} timeout={500}  style={{transformOrigin:"0 0 0"}}>
                    <div>
                        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    </div>
                </Grow>

                <DialogContent>
                    <Grow in={true} timeout={600} style={{transformOrigin:"0 0 0"}}>
                        <div>
                            <DialogContentText>
                                To subscribe to this website, please enter your email address here. We will send updates
                                occasionally.
                            </DialogContentText>
                        </div>
                    </Grow>
                    <Grow in={true} timeout={700}  style={{transformOrigin:"0 0 0"}} >
                        <div>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                            />
                        </div>
                    </Grow>

                </DialogContent>

                <DialogActions>
                    <Grow in={true} timeout={800}  style={{transformOrigin:"0 0 0"}} >
                        <div>
                            <Button onClick={onCloseDialog} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={onCloseDialog} color="primary">
                                Subscribe
                            </Button>
                        </div>

                    </Grow>
                </DialogActions>
            </Dialog>
        </div>
    );
}
