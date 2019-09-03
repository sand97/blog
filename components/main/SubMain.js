import {Grid, Icon, Typography} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles'
import React from "react";
const useStyle = makeStyles({
    root : {
        padding : "10px 0px 10px 10px",
        paddingLeft : "15px",
        margin : "5px"
    },
    rootActive : {
        padding : "10px 0px 10px 8px",
        paddingLeft : "15px",
        borderLeft : "2px solid #3ab117",
        margin : "5px"
    },
    icon : {
        color : "#b6b5b8"
    },
    typo : {
        color : "#b6b5b8",
        marginLeft : 5
    }
});
function SubMain(props){
    const classes = useStyle();
    return(
        <div className={props.active ? classes.rootActive : classes.root }>
            <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                <Grid item>
                    <Icon className={classes.icon}>
                        {props.children}
                    </Icon>
                </Grid>
                <Grid item>
                    <Typography className={classes.typo} variant="body2" gutterBottom>
                        {props.name}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
export default SubMain;