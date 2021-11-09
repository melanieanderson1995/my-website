import { GridList, GridListTile, Modal, Card, IconButton, Fade, Grow } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

const sortOptions = [
    {option: "title", title: "Title"},
    {option: "yearAsc", title: "Year Ascending"},
    {option: "yearDesc", title: "Year Descending"},
]

export default function Tattoo () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [itemIndex, setItemIndex] = React.useState(0);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = React.useState(null);
    const [sortOption, setSortOption] = React.useState("none");

    const openCloseModal = () => {
        setOpen(!open);
    }

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
            setImages(response.images.filter(image => image.type === 'tattoo'));
            setLoading(false);
          })
        }, [])

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
                Tattoos
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
            { !loading && (
                <>
                <GridList spacing={10} cellHeight={300} cols={3} className={classes.artGrid}>
                    {images.map((image) => (
                        <Fade in={true} timeout={1500 + (images.indexOf(image) * 500)}>
                            <GridListTile onClick={() => {
                                openCloseModal();
                                setItemIndex(images.indexOf(image))
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
                                        <img style={{ height: 500 }} src={images[itemIndex].path} alt={images[itemIndex].title}></img>
                                        <div style={{ flexDirection: "column", display: "flex", paddingRight: 40, paddingTop: 40, paddingLeft: 10 }}>
                                            <p className={classes.imageTitle}>
                                            {images[itemIndex].title}
                                            </p>
                                            <p className={classes.imageYear}>
                                                Year Completed: 
                                                {' '}
                                                {images[itemIndex].year}
                                            </p>
                                            <p className={classes.imageMaterials}>
                                                Materials: 
                                                {' '}
                                                {images[itemIndex].materials}
                                            </p>
                                            <p className={classes.imageDescription}>
                                                Description: 
                                                {' '}
                                                {images[itemIndex].description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </Grow>
                        </div>
                    </Modal>
                </>
                )}
                <Footer/>
        </>
    )
}