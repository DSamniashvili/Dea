import React from 'react';

const ImageWithText = (props) => {
    return (
        <div className={props.className + `wrapper`}>
        <div className={props.className}>
            <img src="/imgs/SectionTwo_images/01.jpg" alt="Image" key={'image'} />
        </div>
        </div >
    )
}

export default ImageWithText