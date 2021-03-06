import React from 'react';

const ImageMetadata = ({size, maxWidth, maxHeight, type}) => {
    return (
        <div className="image-metadata">
            <h1 className='image-metadata--title'>Image Metadata</h1>
            <div className='image-metadata--container image-metadata--size'>
                <h3>Size:</h3>
                <div>{((size)/(1024*1024)).toFixed(2)} <span className="accent">Mb</span></div>
            </div>
            <div className='image-metadata--container image-metadata--width'>
                <h3>Max - Width <span className='accent'>X</span> Height:</h3>
                <div>{maxWidth} <span className='accent'>X</span> {maxHeight}</div>
            </div>
            <div className='image-metadata--container image-metadata--type'>
                <h3>Type: </h3>
                <div>{type}</div>
            </div>
        </div>
    )
}

export default ImageMetadata;
