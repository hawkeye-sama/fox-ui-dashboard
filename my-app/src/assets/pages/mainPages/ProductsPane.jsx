import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Grow } from '@material-ui/core';
import ProductCard from '../../components/ProductCard';


const useStyles = makeStyles((theme) => ({
    pageSettings: {
        backgroundColor: "#f5f5f5",
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    root: {
        display: 'flex',

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ProductsPane() {
    const classes = useStyles();
    const [open] = React.useState(true)
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Grid container direction="row" spacing={3}>
                <Grow   
                    in={open}
                    style={{ transformOrigin: '0 0 0' }}
                     {...(open ? { timeout: 500 } : {})}>
                    <Grid item xs={3}>
                        <ProductCard />
                    </Grid>
                </Grow>

            </Grid>
        </main>
    )

}