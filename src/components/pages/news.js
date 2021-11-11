import React, { useEffect, useState } from 'react';
import { Divider, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../footer';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        padding: 20,
        fontSize: 32,
        color: "#f5f5f5"
    },
    eventTitle: {
        fontSize: 24,
        fontWeight: 600,
        color: "#f5f5f5"
    },
    eventInfo: {
        fontSize: 22,
        color: "#f5f5f5"
    },
    eventDescription: {
        fontSize: 20,
        color: "#f5f5f5"
    }
}))

export default function News () {
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();


useEffect(() => {
    fetch('projects/events.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(response => {
        console.log("RESPONSE", response)
        return response.json();
      })
      .then(response => {
        console.log("MY JSON", response)
        setEvents(response.events.sort((a, b) => a.date.year > b.date.year ? -1 : 1));
        setLoading(false);
      })
    }, [])

    return (
        <Paper style={{ backgroundColor: "black" }}>
            <div className={classes.header}>
                News
            </div>
            <div style={{ padding: 20 }}>
                { !loading && (
                    <div>
                        {events.map((event) => (
                            <div style={{ padding: 20, flexDirection: 'row', display: 'flex'}}>
                                <img src={event.image} style={{ width: 150}} alt="event"/>
                                <div style={{ paddingLeft: 20 }}>
                                    <div className={classes.eventTitle}>
                                        {event.name}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                                        <div className={classes.eventInfo}>
                                            {event.date.month}, {event.date.year}
                                        </div>
                                        <div className={classes.eventInfo} style={{ paddingLeft: 40 }}>
                                            {event.location}
                                        </div>
                                    </div>
                                    <div className={classes.eventDescription}>
                                        {event.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer/>
        </Paper>
    )
}