import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    description: {
        fontSize: 20,
    }
  }));

export default function About () {
    const classes = useStyles()
    return (
        <>
            <p className={classes.description}>
Artist Statement            
            </p>
            <p className={classes.description}>
History and artistic development INCLUDING degrees           
            </p>
            <p className={classes.description}>
Plans for the future          
            </p>
        </>
    )
}