import { GridList, GridListTile } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    artGrid: {
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        textAlign: "center",
        padding: 20,
        fontSize: 32,
    },
    gridTile: {
        '&:hover': {opacity: .7}
    }
  }));

const illustrationImages = [
    { img: "http://placekitten.com/200/200", title: "img1" },
    { img: "http://placekitten.com/200/200", title: "img2" },
    { img: "http://placekitten.com/200/200", title: "img3" },
]

export default function Illustration () {
    const classes = useStyles();

    return (
        <>
            <div className={classes.header}>
                Illustrations
            </div>
            <GridList cellHeight={160} cols={3} className={classes.artGrid}>
                {illustrationImages.map((image) => (
                    <GridListTile className={classes.gridTile} key={image.img} cols={image.cols || 1}>
                        <img src={image.img} alt={image.title} />
                     </GridListTile>
                ))}
            </GridList>
        </>
    )
}