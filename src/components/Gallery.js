import React from "react";
import GalleryItem from './GalleryItem';


function Gallery(props) {
 

    const songItems = props.songData.map((item, index) =>{
        return (
            <GalleryItem key={index} item ={item}/>
        )
    })
    
    return (
        <div>
            { songItems }
        </div>
    )
}

export default Gallery;
