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
                    <br />
                    <div className={classes.description}>
                        As a child, I attended multiple studios for professional art training. I went on to specialize in art for my high school International Baccalaureate degree, earned 2014, after also attended the Virginia Commonwealth University’s summer pre-college program for art. I then attended Carnegie Mellon University, majoring in their interdisciplinary degree program (BXA), specializing in Japanese and Visual Arts. During my undergraduate career, I worked as an entomological imaging intern at the Smithsonian Natural History Museum in Washington, D.C., attended a semester abroad in London, UK, at the University of the Arts London: Chelsea College of Arts, and began work as a tattoo artist. I graduated from my undergraduate program in 2018, and continued on to complete my masters in the University of the Arts London: Central St. Martins’ interdisciplinary program, where my art shifted from illustration to textile and fiber sculptures. I earned my Arts and Sciences degree in 2020 with a focus on Sculpture and Theoretical Physics. I am currently in the process of applying to the interdisciplinary Media, Art, and Text program at VCU, with intent to study the effect of scientific illustration on how the public interprets scientific data and findings, as well as continuing my work on scientific illustration through 3D materials.          
                    </div>
                    <br />
                </div>
            </div>
            <Footer/>
        </>
    )
}