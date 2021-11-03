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
    { img: abstractExperiment, title: "An Exercise in Chaos", year: "2015", description: "My first and last foray into abstract two-dimensional, it gave me a panic attack.", materials: "Paper, paint, charcoal, oil pastel" },
    { img: screechOwl, title: "Screech Owl", year: "2018", description: "A far more efficient owl than nature could produce; created for The Treachery of Birds, by Josh Brown.", materials: "Pen" },
    { img: kingfisher, title: "Kingfisher", year: "2018", description: "A true descendant of dinosaurs; created for The Treachery of Birds, by Josh Brown.", materials: "Pen" },
    { img: swallow, title: "Swallow", year: "2018", description: "Neck pouches are so sexy; created for The Treachery of Birds, by Josh Brown.", materials: "Pen" },
    { img: antarcticats, title: "Tshirt Design for Antarcticats (ATL)", year: "2017", description: "An album design for Atlanta, GA, band, Water Trash.", materials: "Digital, pen" },
    { img: babyVeins, title: "Don't be Vain", year: "2015", description: "Feel free to fill in the blank.", materials: "Ink, pen" },
    { img: balletLeg, title: "Load-Bearing", year: "2015", description: "The careful balance of bones.", materials: "Charcoal" },
    { img: balloonJeff, title: "Jeff Takes Off", year: "2016", description: "He wishes to leave this plane of existence", materials: "Digital" },
    { img: bandFlyer, title: "Flyer for concert at Black Forge (PGH)", year: "2017", description: "Flyer for a local concert taking place at Black Forge Coffee House, Pittsburgh, PA.", materials: "pen" },
    { img: bicycleFish, title: "A Jaunty Chap", year: "2017", description: "Design for a tattoo client, who requested a fish on a bicycle.", materials: "Pen" },
    { img: birth, title: "Conception Oven", year: "2017", description: "It's like Alien, except for you're biologically geared to love it; created for UAL: CCA Semester Show", materials: "Pen" },
    { img: brokenFingers, title: "Baby Carrots", year: "2017", description: "Ever hit your thumb with a hammer? Ever do it again? Created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: butterflyNebula, title: "Wings of Stars", year: "2015", description: "The Butterfly Nebula.", materials: "Graphite" },
    { img: capsuleCorp, title: "Album Cover for Capsule Corp (PGH)", year: "2017", description: "An album design for Pittsburgh, PA, band, Capsule Corp." },
    { img: cockroach, title: "A Kafka-Esque Nightmare", year: "2017", description: "If you read Metamorphosis backwards, it's a heartwarming story of a family who's love of a cockroach turns him into a man.", materials: "Pen" },
    { img: comicSans, title: "Graphic Design is Important", year: "2016", description: "Don't abuse comic sans, it's a tool not the only tool.", materials: "Pen, digital" },
    { img: cosmicRay, title: "A Cosmic Ray", year: "2017", description: "A comrade of the world turtle.", materials: "Pen" },
    { img: creationOfAdam, title: "Creation of Ad-Helm", year: "2015", description: "A rendition of the Creation of Adam, done in the style of Stewart Helm.", materials: "Pen" },
    { img: dislocated, title: "Out of Place", year: "2016", description: "Hold your breath, you'll feel a pop.", materials: "Graphite" },
    { img: distantFutures, title: "Tshirt Design for Distant Futures (PGH)", year: "2017", description: "An Tshirt design for Pittsburgh, PA, band, Distant Futures.", materials: "Pen" },
    { img: drinkingJeff, title: "Bottoms Up", year: "2016", description: "Jeff unwinds for the evening.", materials: "Digital" },
    { img: eyesOpen, title: "Can't Look Away", year: "2017", description: "It's like watching a trainwreck; Created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: finalsJeff, title: "Jeff does his Taxes", year: "2016", description: "Jeff is just like you and me, he dreads April.", materials: "Digital" },
    { img: flyingJeff, title: "Jeff Takes a Leap of Faith", year: "2016", description: "Without clothes, Jeff flies more freely than you or I.", materials: "Digital" },
    { img: fullOfShit, title: "Full of Shit", year: "2016", description: "You are what you eat.", materials: "Pen" },
    { img: gasMask, title: "Flowery Scent", year: "2016", description: "It's just too darn fresh.", materials: "Pen, collage" },
    { img: goldenCactus, title: "The Golden Root-io", year: "2017", description: "If it fits, it sits.", materials: "Colored pencils" },
    { img: hairyLegs, title: "Sexture", year: "2017", description: "Hey girl, those legs go all the way up?", materials: "Pen" },
    { img: headClouds, title: "Thought Bubbles", year: "2017", description: "So many thoughts for such a little head; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: headShot, title: "Before it Gets Worse", year: "2017", description: "Quick reactions save lives; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: headTubes, title: "Jacked In", year: "2017", description: "Now who's in the Matrix?", materials: "Pen" },
    { img: headTumor, title: "Of a Melon", year: "2017", description: "Some tumors grow teeth, did you know that? Created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: hummingbird, title: "Bird Bones", year: "2015", description: "They may as well be toothpicks.", materials: "Pen" },
    { img: jimmyMayo, title: "Album cover for Jimmy Mayo (PGH)", year: "2018", description: "An album design for Pittsburgh, PA, band, Jimmy Mayo.", materials: "Pen"},
    { img: liteweight, title: "Album Cover for Liteweight (PGH)", year: "2017", description: "An album design for Pittsburgh, PA, band, Liteweight.", materials: "Watercolor, pen, digital" },
    { img: longFingers, title: "Delicate Touch", year: "2017", description: "How it feels to have acrylic nails; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: lunarcy, title: "Sheer Lunarcy", year: "2015", description: "Self portrait in front of the Eridans Super Void.", materials: "Paint, paper" },
    { img: mantises, title: "Man Eaters", year: "2016", description: "A powerful prayer laid low", materials: "Pen" },
    { img: manyLeggedDog, title: "In Case One Falls Off", year: "2016", description: "I had a fear as a child my pets would lose limbs. So I gave him some extra, just in case.", materials: "Digital" },
    { img: mcEscher, title: "Circular Progress", year: "2016", description: "This hand helps this hand, helps this hand, helps this hand....", materials: "Watercolor, pen" },
    { img: meltingEyeballs, title: "It's a Bit Warm", year: "2017", description: "These aren't tears; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: mermaid, title: "Mermaids were Always Manatees", year: "2017", description: "Mermaids don't own razors. Or chapstick; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: mlady, title: "M'Lady", year: "2016", description: "And a tip of the hat to you, sir.", materials: "Pen" },
    { img: lamprey, title: "Wow Ze Dong", year: "2015", description: "Part of the Dick-tators series, inserting unique animals into classic propaganda posters.", materials: "Marker, paint" },
    { img: mole, title: "Kim Jong Fun", year: "2015", description: "Part of the Dick-tators series, inserting unique animals into classic propaganda posters.", materials: "Marker, paint" },
    { img: morelMan, title: "Morel and Upstanding Member of Society", year: "2017", description: "He thrives in the moist corpse of capitalism", materials: "Pen, markers" },
    { img: nishikie, title: "O(ak)verly Complex", year: "2017", description: "More details? Yes, let's.", materials: "Pen" },
    { img: openVeins, title: "Bloodletting", year: "2017", description: "Let the evil drain out; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: pezMan, title: "Eating Chalk", year: "2017", description: "Kch-CHUNK.", materials: "Pen" },
    { img: pickingUp, title: "70s Carpeting", year: "2017", description: "Shag carpet is far too sensory; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: pillarsOfCreation, title: "The Pillars", year: "2016", description: "The Pillars of Creation.", materials: "Colored pencils" },
    { img: poundingHeart, title: "Palps", year: "2017", description: "'We need to talk'; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: protoren, title: "All the King's Men", year: "2016", description: "A protorenaissance take on a classic tale.", materials: "Paper, marker" },
    { img: sasquatch, title: "Lost in the Sauce", year: "2017", description: "Sas ate some bad mushrooms. Design for a tattoo client, who requested a sasquatch.", materials: "Pen" },
    { img: separateHands, title: "Some Assembly Required", year: "2017", description: "I was born with incredibly loose joints, but cracking them does feel amazing; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: skeletonCuddle, title: "Comfort from Within", year: "2017", description: "What's inside you can never leave; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: softBaby, title: "Soft in the Head", year: "2017", description: "Never drop a baby, their skulls aren't real yet; created for UAL: CCA Semester Show." },
    { img: spaceJeff, title: "No Sound in Space, Jeff", year: "2016", description: "Our first encounter with Quiet Man Jeff, an origin story.", materials: "Digital" },
    { img: teethFalling, title: "No Dental Coverage", year: "2017", description: "Don't forget to brush; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: tiedUp, title: "I'm so Knotty", year: "2017", description: "First world choice paralysis. Or sleep paralysis. Some sort of paralysis; created for UAL: CCA Semester Show", materials: "Pen" },
    { img: treeNightmare, title: "Fear of Heights", year: "2017", description: "I could never just let go; created for UAL: CCA Semester Show.", materials: "Pen" },
    { img: wall, title: "Tripped and Fell", year: "2016", description: "View of a wall while on LSD and lying on the sidewalk.", materials: "Marker" },
    { img: waterTrash, title: "Album cover for Watertrash (PGH)", year: "2018", description: "An album design for Pittsburgh, PA, band, Water Trash.", materials: "Pen" },
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