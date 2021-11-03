import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    },
    footerSocialMedia: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        paddingTop: 20,
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
            <div className={classes.footerSocialMedia}>
                <a href="https://www.facebook.com/laneandersontattoo" target="blank">
                    <FacebookIcon style={{ color: "#f5f5f5", paddingRight: 20 }} />
                </a>
                <a href="https://www.instagram.com/laneandersonart/" target="blank">
                    <InstagramIcon style={{ color: "#f5f5f5", paddingRight: 20 }} />
                </a>
                <a href="https://www.linkedin.com/in/lane-anderson-art/" target="blank">
                    <LinkedInIcon style={{ color: "#f5f5f5"}} />
                </a>
            </div>
            <section className={classes.footerSubscription}>
                <p className={classes.copyrightMessage}>
                    © Melanie Anderson 2021
                </p>
            </section>
        </div>
    )
}