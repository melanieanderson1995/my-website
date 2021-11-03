import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import profile from "../../assets/images/Profile.JPG"
import Footer from '../footer';

const useStyles = makeStyles((theme) => ({
    description: {
        fontSize: 20,
        color: "#f5f5f5"
    }
  }));

export default function About () {
    const classes = useStyles()
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', padding: 20, justifyContent: "center"}}>
                <img src={profile} style={{ width: 400 }} alt="Lane Anderson"/>
                <div style={{ alignItems: "center", justifyContent: "center", paddingLeft: 20 }}>
                    <div className={classes.description}>
                        Artist Statement            
                    </div>
                    <div className={classes.description}>
                        History and artistic development INCLUDING degrees           
                    </div>
                    <div className={classes.description}>
                        Plans for the future          
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}