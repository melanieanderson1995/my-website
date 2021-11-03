import { GridList, GridListTile, Modal, Card, IconButton, Fade, Grow } from '@material-ui/core';
import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import balloonWall from '../../assets/sculpture/balloonWall.jpg'
import balloonWallAnim from '../../assets/sculpture/balloonWallAnim.gif'
import fourthDim1 from '../../assets/sculpture/fourthDim1.JPG'
import fourthDim2 from '../../assets/sculpture/fourthDim2.JPG'
import fourthDim3 from '../../assets/sculpture/fourthDim3.JPG'
import hoods1 from '../../assets/sculpture/hoods1.JPG'
import hoods2 from '../../assets/sculpture/hoods2.JPG'
import mathJoke1 from '../../assets/sculpture/mathJoke1.JPG'
import mathJoke2 from '../../assets/sculpture/mathJoke2.JPG'
import mathJoke3 from '../../assets/sculpture/mathJoke3.JPG'
import mathJoke4 from '../../assets/sculpture/mathJoke4.JPG'
import measurements from '../../assets/sculpture/measurements.JPG'
import quantumRelations from '../../assets/sculpture/quantumRelations.JPG'
import spine1 from '../../assets/sculpture/spine1.JPG'
import spine2 from '../../assets/sculpture/spine2.JPG'
import CloseIcon from "@material-ui/icons/Close";
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
        '&:hover': {opacity: .7},
    },
    modalCard: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#f5f5f5"
    },
    iconButtonRight: {
        float: "right",
        color: "black",
      },
    imageTitle: {
        fontSize: 24,
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
        fontsize: 20,
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

const sculptureImages = [
    { img: fourthDim1, title: "Fourth Dimension 1" },
    { img: fourthDim2, title: "Fourth Dimension 2" },
    { img: fourthDim3, title: "Fourth Dimension 3" },
    { img: quantumRelations, title: "Quantum Relations" },
    { img: measurements, title: "3 Yards" },
    { img: spine1, title: "I've Got Your Back 1" },
    { img: spine2, title: "I've Got Your Back 2" },
    { img: balloonWall, title: "Dreams and Nightmares" },
    { img: balloonWallAnim, title: "Dreams and Nightmares Animations" },
    { img: hoods1, title: "When's the Last Time You Brushed? 1" },
    { img: hoods2, title: "When's the Last Time You Brushed? 2" },
    { img: mathJoke1, title: "The Engineer, the Physicist, and the Mathematician 1" },
    { img: mathJoke2, title: "The Engineer, the Physicist, and the Mathematician 2" },
    { img: mathJoke3, title: "The Engineer, the Physicist, and the Mathematician 3" },
    { img: mathJoke4, title: "The Engineer, the Physicist, and the Mathematician 4" },
]

const sortOptions = [
    {option: "title", title: "Title"},
    {option: "yearAsc", title: "Year Ascending"},
    {option: "yearDesc", title: "Year Descending"},
]

export default function Sculpture () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [itemIndex, setItemIndex] = React.useState(0);
    const [images, setImages] = React.useState(sculptureImages);
    const [sortOption, setSortOption] = React.useState("none");

    const openCloseModal = () => {
        setOpen(!open);
    }

    const handleChange = (event) => {
        setSortOption(event.target.value);
        console.log("SORTING", sortOption);
        switch(event.target.value) {
            case "title":
                setImages(sculptureImages.sort((a, b) => {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                return 0;
                }))
                break;
            case "yearAsc":
                setImages(sculptureImages.sort((a, b) => a.year - b.year))
                break;
            case "yearDesc":
                setImages(sculptureImages.sort((a, b) => b.year - a.year))
                break;
            default:
                setImages(sculptureImages);
        }
      };

    return (
        <>
            <div className={classes.header}>
                Sculptures
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
                    <Fade in={true} timeout={1500 + (sculptureImages.indexOf(image) * 500)}>
                        <GridListTile onClick={() => {
                            openCloseModal();
                            setItemIndex(sculptureImages.indexOf(image))
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
                                    <img style={{ height: 500 }} src={sculptureImages[itemIndex].img} alt={sculptureImages[itemIndex].title}></img>
                                    <div style={{ flexDirection: "column", display: "flex", paddingRight: 40, paddingTop: 40, paddingLeft: 10 }}>
                                        <p className={classes.imageTitle}>
                                        {sculptureImages[itemIndex].title}
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