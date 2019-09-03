import Link from 'next/link';
import makeStyles from '@material-ui/styles/makeStyles'
import {Grid, Box} from '@material-ui/core';

import React from "react";

const useStyle = makeStyles({
    root: {
        marginBottom: "30px"
    },
    img: {
        width: "100%",
        height: 100,
        objectFit: "cover"
    },
    content: {
        textAlign: "justify"
    },
    hours: {
        color: "#b6b5b8"
    },

    author: {
        color: "#3ab117"
    },
});

function strip(html) {
    console.log(this)
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

function CategoryItem(props) {
    const data = props.data;
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Grid container id={data.id} spacing={2}>
                <Grid item xs={4}>
                    <img src={data.jetpack_featured_media_url} className={classes.img}/>
                </Grid>
                <Grid item xs={8} container  direction="column" justify="space-between">
                    <Grid item>
                        <div className={classes.hours}>{data.date}</div>
                    </Grid>
                    <Grid item>
                        <div className={classes.content}>{data.content.rendered.slice(0, 60)}...</div>
                    </Grid>
                    <Grid item>
                        <div className={classes.hours}>
                            By<span className={classes.author}> creator</span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default CategoryItem;