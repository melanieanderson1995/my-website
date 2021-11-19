import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@mui/material';
import Footer from '../footer';


const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        padding: 20,
        fontSize: 32,
        color: "#f5f5f5"
    },
}))

export default function Contact () {
    const classes = useStyles();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSuccess(true);
        }
    }, []);

    return (
        <>
            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className={classes.header}>
                    Contact
                </div>
                {success && (
                    <Alert severity="success">
                        <AlertTitle>Message Sent</AlertTitle>
                        Thank you for your message!
                    </Alert>
                )}
                <Card style={{ width: 400, display: 'flex', margin: 20, backgroundColor: "#3c3c3c", padding: 20 }}>
                    <form 
                    name="contact" 
                    method="POST" 
                    action="/contact/?success=true"
                    data-netlify="true" 
                    style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: 500}}
                    >
                    <input type="hidden" name="form-name" value="contact" />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <TextField id="standard-basic" label="name" name="name" style={{ backgroundColor: "#f5f5f5", borderRadius: 5, width: 200, marginBottom: 10 }}  />
                        <TextField id="standard-basic" label="email" name="email" style={{ backgroundColor: "#f5f5f5", borderRadius: 5, width: 200, marginBottom: 10 }} />
                        <TextField multiline id="standard-basic" label="message" name="message" style={{ backgroundColor: "#f5f5f5", borderRadius: 5, width: 200, marginBottom: 10 }} />
                    </div>
                    <Button type="submit" style={{ backgroundColor: '#1e1e1e', color: "#f5f5f5", width: 100, fontSize: 24, marginLeft: 10, marginRight: 10, marginTop: 10 }}>Send</Button>
                    </form>
                </Card>
            </div>
            <Footer/>
        </>
    )
}