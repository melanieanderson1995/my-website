import { GridList, GridListTile, Modal, Card, IconButton, Fade, Grow } from '@material-ui/core';
import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from "@material-ui/icons/Close";
import Footer from '../footer';
import imageJson from '../../assets/images/images.json'

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

const sortOptions = [
    {option: "title", title: "Title"},
    {option: "yearAsc", title: "Year Ascending"},
    {option: "yearDesc", title: "Year Descending"},
]

export default function Illustration () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [itemIndex, setItemIndex] = React.useState(0);
    const [images, setImages] = React.useState(imageJson.images.filter(image => image.type === 'illustration'));
    const [sortOption, setSortOption] = React.useState("none");

console.log("IMAGES", images[0].path)

    const openCloseModal = () => {
        setOpen(!open);
    }

    const handleChange = (event) => {
        setSortOption(event.target.value);
        console.log("SORTING", sortOption);
        switch(event.target.value) {
            case "title":
                setImages(images.sort((a, b) => {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                return 0;
                }))
                break;
            case "yearAsc":
                setImages(images.sort((a, b) => a.year - b.year))
                break;
            case "yearDesc":
                setImages(images.sort((a, b) => b.year - a.year))
                break;
            default:
                setImages(images);
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
                    <Fade in={true} timeout={1500 + (images.indexOf(image) * 500)}>
                        <GridListTile onClick={() => {
                            openCloseModal();
                            setItemIndex(images.indexOf(image))
                            }} className={classes.gridTile} key={image.id} cols={image.cols || 1}>
                            <img src={image.path} alt={image.title} />
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
                                    <img style={{ height: 500 }} src={images[itemIndex].img} alt={images[itemIndex].title}></img>
                                    <div style={{ flexDirection: "column", display: "flex", paddingRight: 40, paddingTop: 40, paddingLeft: 10 }}>
                                        <p className={classes.imageTitle}>
                                            {images[itemIndex].title}
                                        </p>
                                        <p className={classes.imageYear}>
                                            <span style={{ fontWeight: 600 }}>
                                                Year Completed:
                                            </span> 
                                            {' '}
                                            {images[itemIndex].year}
                                        </p>
                                        <p className={classes.imageMaterials}>
                                            <span style={{ fontWeight: 600 }}>
                                                Materials: 
                                            </span>
                                            {' '}
                                            {images[itemIndex].materials}
                                        </p>
                                        <p className={classes.imageDescription}>
                                            <span style={{ fontWeight: 600 }}>
                                                Description: 
                                            </span>
                                            {' '}
                                            {images[itemIndex].description}
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