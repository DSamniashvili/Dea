import React from 'react';

const ImageWithText = (props) => {
    return (
        <div className={props.className + `wrapper`}>
        <div className={props.className}></div>
        </div >
    )
}

export default ImageWithText