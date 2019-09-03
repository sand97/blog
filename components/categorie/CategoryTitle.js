import {Grid, Typography} from "@material-ui/core"
import React from "react";
import makeStyles from '@material-ui/styles/makeStyles'

const useStyle = makeStyles({

    rootActive : {
        borderBottom : "2px solid #3ab117",
        color : "#3ab117"
    },
    root : {
        color : "#b6b5b8"
    }
});

function CategoryTitle(props) {
    const classes = useStyle();
    return (
        <Grid item style={{padding : 15}} className={props.active ? classes.rootActive : classes.root}>
            <Typography> {props.children} </Typography>
        </Grid>
    );
}
export default CategoryTitle;