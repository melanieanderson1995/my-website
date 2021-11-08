import { GridList, GridListTile, Modal, Card, IconButton, Fade, Grow } from '@material-ui/core';
import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
import lunarcy from "../../assets/illustration/lunarcy.JPG"
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
import waterTrash from "../../assets/illustration/waterTrash.png"
import jimmyMayo from "../../assets/illustration/jimmyMayo.jpg"
import screechOwl from "../../assets/illustration/screechOwl.png"
import kingfisher from "../../assets/illustration/kingfisher.png"
import swallow from "../../assets/illustration/swallow.png"
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
        color: "#f5f5f5"
    },
    gridTile: {
        borderWidth: 5,
        borderColor: "black",
        '&.hover': {opacity: .7},
    },
    modalCard: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
    },
    iconButtonRight: {
        float: "right",
        color: "black",
      },
    imageTitle: {
        fontSize: 28,
        fontWeight: 600,
        marginTop: 10,
        marginBottom: 10,
        color: "black",
    },
    imageYear: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 0,
        color: "black",
    },
    imageMaterials: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 0,
        color: "black",
    },
    imageDescription: {
        fontSize: 20,
        margin: 0,
        color: "black",
    },
    select: {
        width: 250,
        color: "white",
        backgroundColor: "#3c3c3c",
        marginBottom: 20,
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            outline: 'none'
         },
    },
    menuItem: {
        fontFamily: "Caveat",
        fontSize: 24,
    }
  }));

const illustrationImages = [
    { img: screechOwl, title: "Screech Owl", year: "2018", description: "A far more efficient owl than nature could produce; created for The Treachery of Birds, by Josh Brown.", materials: "Pen" },
    { img: kingfisher, title: "Kingfisher", year: "2018", description: "A true descendant of dinosaurs; created for The Treachery of Birds, by Josh Brown.", materials: "Pen" },
    { img: swallow, title: "Swallow", year: "2018", description: "Neck pouches are so sexy; created for The Treachery of Birds, by Josh Brown.", materials: "Pen" },
]

const sortOptions = [
    {option: "title", title: "Title"},
    {option: "yearAsc", title: "Year Ascending"},
    {option: "yearDesc", title: "Year Descending"},
]

export default function Illustration () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [itemIndex, setItemIndex] = React.useState(0);
    const [images, setImages] = React.useState(illustrationImages);
    const [sortOption, setSortOption] = React.useState("none");

    const openCloseModal = () => {
        setOpen(!open);
    }

    const handleChange = (event) => {
        setSortOption(event.target.value);
        console.log("SORTING", sortOption);
        switch(event.target.value) {
            case "title":
                setImages(illustrationImages.sort((a, b) => {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                return 0;
                }))
                break;
            case "yearAsc":
                setImages(illustrationImages.sort((a, b) => a.year - b.year))
                break;
            case "yearDesc":
                setImages(illustrationImages.sort((a, b) => b.year - a.year))
                break;
            default:
                setImages(illustrationImages);
        }
      };

    return (
        <>
            <div className={classes.header}>
                Illustrations and Paintings
            </div>
            <FormControl style={{ display: "flex", alignItems: "center", justifyContent: "center"}} >
                <div>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortOption}
                        label="Sort by"
                        disableUnderline
                        defaultValue="none"
                        onChange={handleChange}
                        className={classes.select}
                        style={{ color: "white"}}
                    >
                        <MenuItem disabled value="none">
                            <div className={classes.menuItem}>
                                Sort by...
                            </div>
                        </MenuItem>
                        { sortOptions.map((option) => (
                            <MenuItem value={option.option} key={option}>
                                <div className={classes.menuItem}>
                                    {option.title}
                                </div>
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </FormControl>
            <GridList spacing={10} cellHeight={300} cols={3} className={classes.artGrid}>
                {images.map((image) => (
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
                style={{justifyContent: "center", display: "flex", alignItems: "center", outline: "none", 
                marginLeft: 100,
                marginRight: 100, }}
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
                                            <span style={{ fontWeight: 600 }}>
                                                Year Completed:
                                            </span> 
                                            {' '}
                                            {illustrationImages[itemIndex].year}
                                        </p>
                                        <p className={classes.imageMaterials}>
                                            <span style={{ fontWeight: 600 }}>
                                                Materials: 
                                            </span>
                                            {' '}
                                            {illustrationImages[itemIndex].materials}
                                        </p>
                                        <p className={classes.imageDescription}>
                                            <span style={{ fontWeight: 600 }}>
                                                Description: 
                                            </span>
                                            {' '}
                                            {illustrationImages[itemIndex].description}
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