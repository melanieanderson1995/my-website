import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1f1f1f",
        justifyContent: "center",
        alignSelf: "center"
    },
    footerSubscription: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: 20
    },
    footerSocialMedia: {
        display: "flex",
        flexDirection: "row"
    },
    copyrightMessage: {
        color: "white",
        alignSelf: "center",
        fontSize: 24,
    },
  }));

export default function Footer () {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <section className={classes.footerSubscription}>
                <p className={classes.copyrightMessage}>
                    © Melanie Anderson 2021
                </p>
            </section>
            <section className={classes.footerSocialMedia}>
            </section>
        </div>
    )
}