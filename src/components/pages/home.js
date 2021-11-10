import React, {useState, useEffect} from 'react';
import Footer from '../footer'
import { Paper } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'


function Item(props)
{
    return (
        <Paper style={{ backgroundColor: "black", height: 500, padding: 20, justifyContent: "center", alignItems: "center"}}>
        <div style={{justifyContent: "center", alignItems: 'center'}}>
        <img style={{ height: 500, justifyContent: 'center', alignItems: 'center' }} src={props.item.path} alt={props.item.description} />
        </div>
        </Paper>
 )
}

export default function Home () {
    const [itemIndex, setItemIndex] = React.useState(0);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = React.useState(null);

    useEffect(() => {
        fetch('projects/images.json'
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
            setImages(response.images);
            setLoading(false);
          })
        }, [])


    return (
        <Paper style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "black"}}>
            { !loading && (
                <Carousel 
                indicatorIconButtonProps={{ style: {padding: '10px', color: '#3c3c3c'} }} 
                activeIndicatorIconButtonProps={{ style: {color: "#f5f5f5"} }}
                style={{ height: 500, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}
                >
                    {
                        images.sort(() => .5 - Math.random()).slice(0,5).map((item, i) => <Item key={i} item={item} style={{ alignItems: 'center', justifyContent: 'center'}} /> )
                    }
                </Carousel>
            )}
            <Footer/>
        </Paper>
    )
}