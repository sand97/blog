import React from "react";
import Grid from "@material-ui/core/Grid"
import CategoryItem from './CategoryItem'
import CategoryTitle from './CategoryTitle'
import makeStyles from '@material-ui/styles/makeStyles'
import Link from 'next/link';

const useStyle = makeStyles({
    root: {
        border: "1px solid rgba(0,0,0, 0.1)",
        padding: "20px"
    },
    firstLine: {
        marginBottom: 50
    }
});


function CategoryContainer(props) {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.firstLine}>
                <Grid dirrecttion={"row"} container>
                    <CategoryTitle active>LASTED</CategoryTitle>
                    <CategoryTitle>POPULAR</CategoryTitle>
                </Grid>
            </div>
            <div>
                {props.categories.map(item => (
                    <Link href="/p/[id]" as={`/p/${item.id}`}>
                        <a>
                            <CategoryItem data={item}/>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoryContainer;