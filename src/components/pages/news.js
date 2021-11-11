import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../footer';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        padding: 20,
        fontSize: 32,
        color: "#f5f5f5"
    },
}))

export default function News () {
    const classes = useStyles();

    return (
        <Paper style={{ backgroundColor: "black" }}>
            <div className={classes.header}>
                News
            </div>
            <div>
                {events.map((event) => (
                    <div>
                        {event.name}
                    </div>
                ))}
            </div>
            <Footer/>
        </Paper>
    )
}