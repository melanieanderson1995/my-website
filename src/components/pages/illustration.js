import { GridList, GridListTile } from '@material-ui/core';
import React from 'react';

const illustrationImages = [
    { img: "http://placekitten.com/200/200", title: "img1" },
    { img: "http://placekitten.com/200/200", title: "img2" }
]

export default function Illustration () {
    return (
        <>
            Illustrations
            <GridList cellHeight={160} cols={3}>
                {illustrationImages.map((image) => (
                    <GridListTile key={image.img} cols={image.cols || 1}>
                        <img src={image.img} alt={image.title} />
                     </GridListTile>
                ))}
            </GridList>
        </>
    )
}