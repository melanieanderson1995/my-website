import { GridList, GridListTile, Modal, Card, IconButton, Fade, Grow } from '@material-ui/core';
import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
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

const tattooImages = [
    { img: null, title: "test"}
]

export default function Tattoo () {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [itemIndex, setItemIndex] = React.useState(0);

    const openCloseModal = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className={classes.header}>
                Tattoos
            </div>
            <GridList spacing={10} cellHeight={300} cols={3} className={classes.artGrid}>
                {tattooImages.map((image) => (
                    <Fade in={true} timeout={1500 + (tattooImages.indexOf(image) * 500)}>
                        <GridListTile onClick={() => {
                            openCloseModal();
                            setItemIndex(tattooImages.indexOf(image))
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
                                    <img style={{ height: 500 }} src={tattooImages[itemIndex].img} alt={tattooImages[itemIndex].title}></img>
                                    <div style={{ flexDirection: "column", display: "flex", paddingRight: 40, paddingTop: 40, paddingLeft: 10 }}>
                                        <p className={classes.imageTitle}>
                                        {tattooImages[itemIndex].title}
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