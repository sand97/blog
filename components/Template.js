import makeStyles from "@material-ui/styles/makeStyles/index";
import {Grid, Button, Avatar} from '@material-ui/core';
import Main from '../components/main/Main';
import CategoryContainer from '../components/categorie/CategoryContainer';

const useStyles = makeStyles({
    '@global': {
        'body': {
            margin: 0
        },
        'a' : {
            textDecoration : "none",
            color : "inherit"
        }
    },
    avatar: {
        margin: 10,
    },
    appName: {
        color: "#3ab117",
        fontSize: "25px",
        fontWeight: "bold",
        padding: "20px",
        textAlign: "center"
    },
    button: {
        borderRadius: "20px",
        background: "#3ab117",
        color : "#fff"
    },
    hours: {
        color: "#b6b5b8"
    },
    author: {
        color: "#3ab117"
    },
});

function createMarkup(strHtml) {
    return {__html: strHtml};
}


function Template(props) {
    const classes = useStyles();
    return(
        <Grid container justify="space-between">
            <Grid item xs={1}>
                <div>
                    <div className={classes.appName}>
                        NEWSTEC
                    </div>
                    <div>
                        <Main/>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <CategoryContainer categories={props.categories}/>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <div>
                        <Grid justify={"space-between"}  alignItems={"center"} direction="row" container>
                            <Grid xs={6} item container alignItems={"center"}>
                                <Grid>
                                    <Avatar className={classes.avatar}>H</Avatar>
                                </Grid>
                                <Grid>
                                    <span className={classes.hours}>By</span>
                                    <span className={classes.author}>Author</span>
                                    <span className={classes.hours}>2 day ago</span>
                                </Grid>
                            </Grid>
                            <Grid xs={3} item>
                                <Button style={{borderRadius: "20px",background: "#3ab117",color : "#fff"}} variant="contained">Shared</Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={createMarkup(props.currentCategory)}/>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}
export default Template;