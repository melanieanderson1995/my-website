import { GridList, GridListTile, Modal, Card, IconButton, Fade, Grow } from '@material-ui/core';
import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import abstractExperiment from "../../assets/illustration/abstractExperiment.jpg"
import antarcticats from "../../assets/illustration/antarcticats.jpg"
import babyVeins from "../../assets/illustration/babyVeins.jpg"
import balletLeg from "../../assets/illustration/balletLeg.jpg"
import balloonJeff from "../../assets/illustration/balloonJeff.jpg"
import bandFlyer from "../../assets/illustration/bandFlyer.jpg"
import bicycleFish from "../../assets/illustration/bicycleFish.jpg"
import birth from "../../assets/illustration/birth.jpg"
import brokenFingers from "../../assets/illustration/brokenFingers.jpg"
import butterflyNebula from "../../assets/illustration/butterflyNebula.jpg"
import capsuleCorp from "../../assets/illustration/capsuleCorp.jpg"
import cockroach from "../../assets/illustration/cockroach.jpg"
import comicSans from "../../assets/illustration/comicSans.jpg"
import cosmicRay from "../../assets/illustration/cosmicRay.jpg"
import creationOfAdam from "../../assets/illustration/creationOfAdam.jpg"
import dislocated from "../../assets/illustration/dislocated.jpg"
import distantFutures from "../../assets/illustration/distantFutures.jpg"
import drinkingJeff from "../../assets/illustration/drinkingJeff.jpg"
import eyesOpen from "../../assets/illustration/eyesOpen.jpg"
import finalsJeff from "../../assets/illustration/finalsJeff.jpg"
import flyingJeff from "../../assets/illustration/flyingJeff.jpg"
import fullOfShit from "../../assets/illustration/fullOfShit.jpg"
import gasMask from "../../assets/illustration/gasMask.jpg"
import goldenCactus from "../../assets/illustration/goldenCactus.jpg"
import hairyLegs from "../../assets/illustration/hairyLegs.jpg"
import headClouds from "../../assets/illustration/headClouds.jpg"
import headShot from "../../assets/illustration/headShot.jpg"
import headTubes from "../../assets/illustration/headTubes.jpg"
import headTumor from "../../assets/illustration/headTumor.jpg"
import hummingbird from "../../assets/illustration/hummingbird.jpg"
import lamprey from "../../assets/illustration/lamprey.jpg"
import liteweight from "../../assets/illustration/liteweight.jpg"
import longFingers from "../../assets/illustration/longFingers.jpg"
import lunarcy from "../../assets/illustration/lunarcy.jpg"
import mantises from "../../assets/illustration/mantises.jpg"
import manyLeggedDog from "../../assets/illustration/manyLeggedDog.jpg"
import mcEscher from "../../assets/illustration/mcEscher.jpg"
import meltingEyeballs from "../../assets/illustration/meltingEyeballs.jpg"
import mermaid from "../../assets/illustration/mermaid.jpg"
import mlady from "../../assets/illustration/mlady.jpg"
import mole from "../../assets/illustration/mole.jpg"
import morelMan from "../../assets/illustration/morelMan.jpg"
import nishikie from "../../assets/illustration/nishikie.jpg"
import openVeins from "../../assets/illustration/openVeins.jpg"
import pezMan from "../../assets/illustration/pezMan.jpg"
import pickingUp from "../../assets/illustration/pickingUp.jpg"
import pillarsOfCreation from "../../assets/illustration/pillarsOfCreation.jpg"
import poundingHeart from "../../assets/illustration/poundingHeart.jpg"
import protoren from "../../assets/illustration/protoren.jpg"
import sasquatch from "../../assets/illustration/sasquatch.jpg"
import separateHands from "../../assets/illustration/separateHands.jpg"
import skeletonCuddle from "../../assets/illustration/skeletonCuddle.jpg"
import softBaby from "../../assets/illustration/softBaby.jpg"
import spaceJeff from "../../assets/illustration/spaceJeff.jpg"
import teethFalling from "../../assets/illustration/teethFalling.jpg"
import tiedUp from "../../assets/illustration/tiedUp.jpg"
import treeNightmare from "../../assets/illustration/treeNightmare.jpg"
import wall from "../../assets/illustration/wall.jpg"
import waterTrash from "../../assets/illustration/waterTrash.jpg"
import Footer from '../footer';


const useStyles = makeStyles((theme) => ({
    artGrid: {
        justifyContent: "center",
        padding: 20,
        paddingTop: 0
    },
    header: {
        textAlign: "center",
        padding: 20,
        fontSize: 32,
        color: "#332e44"
    },
    gridTile: {
        borderWidth: 5,
        borderColor: "black",
        '&:hover': {opacity: .7},
    },
    modalCard: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#fffff7"
    },
    iconButtonRight: {
        float: "right",
        color: "#332e44",
      },
    imageTitle: {
        fontSize: 24,
        fontWeight: 600,
        marginTop: 10,
        marginBottom: 10,
        color: "#332e44",
    },
    imageYear: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 0,
        color: "#332e44",
    },
    imageMaterials: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 0,
        color: "#332e44",
    },
    imageDescription: {
        fontsize: 20,
        margin: 0,
        color: "#332e44",
    }
  }));

const illustrationImages = [
    { img: abstractExperiment, title: "An Exercise in Chaos" },
    { img: antarcticats, title: "Tshirt Design for Antarcticats (ATL)" },
    { img: babyVeins, title: "Don't be Vain" },
    { img: balletLeg, title: "Load-Bearing" },
    { img: balloonJeff, title: "Jeff Takes Off" },
    { img: bandFlyer, title: "Flyer for concert at Black Forge (PGH)" },
    { img: bicycleFish, title: "A Jaunty Chap" },
    { img: birth, title: "Conception Oven" },
    { img: brokenFingers, title: "Baby Carrots" },
    { img: butterflyNebula, title: "Wings of Stars" },
    { img: capsuleCorp, title: "Album Cover for Capsule Corp (PGH)" },
    { img: cockroach, title: "A Kafka-Esque Nightmare" },
    { img: comicSans, title: "Graphic Design is Important" },
    { img: cosmicRay, title: "A Cosmic Ray" },
    { img: creationOfAdam, title: "Creation of Adam in the style of Stewart Helm" },
    { img: dislocated, title: "Out of Place" },
    { img: distantFutures, title: "Tshirt Design for Distant Futures (PGH)" },
    { img: drinkingJeff, title: "Bottoms Up" },
    { img: eyesOpen, title: "Can't Look Away" },
    { img: finalsJeff, title: "Jeff does his Taxes" },
    { img: flyingJeff, title: "Jeff Takes a Leap of Faith" },
    { img: fullOfShit, title: "Full of Shit" },
    { img: gasMask, title: "Flowery Scent" },
    { img: goldenCactus, title: "The Golden Root-io" },
    { img: hairyLegs, title: "Sexture" },
    { img: headClouds, title: "Thought Bubbles" },
    { img: headShot, title: "Before it Gets Worse" },
    { img: headTubes, title: "Jacked In" },
    { img: headTumor, title: "Of a Melon" },
    { img: hummingbird, title: "Bird Bones" },
    { img: lamprey, title: "Wow Ze Dong" },
    { img: liteweight, title: "Album Cover for Liteweight (PGH)" },
    { img: longFingers, title: "Delicate Touch" },
    { img: lunarcy, title: "Sheer Lunarcy" },
    { img: mantises, title: "Man Eaters" },
    { img: manyLeggedDog, title: "In Case One Falls Off" },
    { img: mcEscher, title: "Circular Progress" },
    { img: meltingEyeballs, title: "It's a Bit Warm" },
    { img: mermaid, title: "Mermaids were Always Manatees" },
    { img: mlady, title: "M'Lady" },
    { img: mole, title: "Kim Jong Fun" },
    { img: morelMan, title: "Morel and Upstanding Member of Society" },
    { img: nishikie, title: "O(ak)verly Complex" },
    { img: openVeins, title: "Bloodletting" },
    { img: pezMan, title: "Eating Chalk" },
    { img: pickingUp, title: "70s Carpeting" },
    { img: pillarsOfCreation, title: "The Pillars" },
    { img: poundingHeart, title: "Palps" },
    { img: protoren, title: "All the King's Men" },
    { img: sasquatch, title: "Lost in the Sauce" },
    { img: separateHands, title: "Some Assembly Required" },
    { img: skeletonCuddle, title: "Comfort from Within" },
    { img: softBaby, title: "Soft in the Head" },
    { img: spaceJeff, title: "No Sound in Space, Jeff" },
    { img: teethFalling, title: "No Dental Coverage" },
    { img: tiedUp, title: "I'm so Knotty" },
    { img: treeNightmare, title: "Fear of Heights" },
    { img: wall, title: "Tripped and Fell" },
    { img: waterTrash, title: "Album cover for Watertrash (PGH)" },

]

export default function Illustration () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [itemIndex, setItemIndex] = React.useState(0);

    const openCloseModal = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className={classes.header}>
                Illustrations and Paintings
            </div>
            <GridList spacing={10} cellHeight={300} cols={3} className={classes.artGrid}>
                {illustrationImages.map((image) => (
                    <Fade in={true} timeout={1500 + (illustrationImages.indexOf(image) * 500)}>
                        <GridListTile onClick={() => {
                            openCloseModal();
                            setItemIndex(illustrationImages.indexOf(image))
                            }} className={classes.gridTile} key={image.img} cols={image.cols || 1}>
                            <img src={image.img} alt={image.title} />
                        </GridListTile>
                     </Fade>
                ))}
            </GridList>
                <Modal 
                open={open}
                onClose={openCloseModal}
                outline={0}
                style={{justifyContent: "center", display: "flex", alignItems: "center", outline: "none"}}
                >
                    <div>
                        <Grow in={open} timeout={1000}>
                            <Card className={classes.modalCard}>
                                <IconButton
                                className={classes.iconButtonRight}
                                onClick={() => {
                                openCloseModal();
                                }}
                                >
                                    <CloseIcon />
                                </IconButton>
                                <div style={{ flexDirection: "row", display: "flex" }}>
                                    <img style={{ height: 500 }} src={illustrationImages[itemIndex].img} alt={illustrationImages[itemIndex].title}></img>
                                    <div style={{ flexDirection: "column", display: "flex", paddingRight: 40, paddingTop: 40, paddingLeft: 10 }}>
                                        <p className={classes.imageTitle}>
                                        {illustrationImages[itemIndex].title}
                                        </p>
                                        <p className={classes.imageYear}>
                                            Year Completed: 
                                        </p>
                                        <p className={classes.imageMaterials}>
                                            Materials: 
                                        </p>
                                        <p className={classes.imageDescription}>
                                            Description: 
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </Grow>
                    </div>
                </Modal>
                <Footer/>
        </>
    )
}