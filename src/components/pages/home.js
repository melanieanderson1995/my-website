import React from 'react'
import Footer from '../footer'
import { Paper } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import spaceJeff from "../../assets/illustration/spaceJeff.jpg"
import fourthDim1 from '../../assets/sculpture/fourthDim1.JPG'
import lamprey from "../../assets/illustration/lamprey.jpg"

const carouselImages = [
    {
        img: spaceJeff,
        title: "No Sound in Space, Jeff",
        year: "2016",
        description: "Our first encounter with Quiet Man Jeff, an origin story.",
        materials: "Digital"
    },
    {
        img: fourthDim1,
        title: "Fourth Dimension 1",
        year: "2019",
        description: "A visualization of a fourth dimensional object passing through our third dimensional world.",
        materials: "Yarn"
    },
    {
        img: lamprey,
        title: "Wow Ze Dong",
        year: "2015",
        description: "Part of the Dick-tators series, inserting unique animals into classic propaganda posters.",
        materials: "Marker, paint" 
    }
]

function Item(props)
{
    return (
        <Paper style={{ backgroundColor: "black", height: 500, padding: 20, justifyContent: "center", alignItems: "center"}}>
        <div style={{justifyContent: "center"}}>
        <img style={{ height: 500, justifyContent: 'center', alignItems: 'center' }} src={props.item.img} alt={props.item.description} />
        </div>
        </Paper>
 )
}

export default function Home () {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center'}}>
            {/* <Carousel 
            indicatorIconButtonProps={{ style: {padding: '10px', color: '#3c3c3c'} }} 
            activeIndicatorIconButtonProps={{ style: {color: "#f5f5f5"} }}
            style={{ height: 500, backgroundColor: 'red' }}
            >
                {
                    carouselImages.map((item, i) => <Item key={i} item={item} /> )
                }
            </Carousel> */}
            <Footer/>
        </div>
    )
}