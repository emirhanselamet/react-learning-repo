import React from "react";
import './images.css'
const PhotoList = (props) => {
    const images = props.images.map((image) =>{
        return <img key={image.id} src={image.webformatURL} alt="image" />
    })
    return(
    <div className='list'>
        {images}
    </div>
    )
}
export default PhotoList;