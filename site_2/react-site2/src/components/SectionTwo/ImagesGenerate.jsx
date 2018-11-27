import React from  'react';
import ImageWithText from '../OtherComponents/ImageWithText'

const imagesGenerate = (props) => {


    for(let i=0; i < props.ImagesArr.length; i++) {
        props.newImagesArr.push(
            <ImageWithText 
            className={'image_text'}
            src={'/imgs/SectionTwo_images/' + `${props.ImagesArr[i]}` + '.jpg'}
            src={`/imgs/SectionTwo_images/${props.ImagesArr[i]}.jpg`}
            key={i}
            />
        )
    }
    return (
            <React.Fragment>
            {props.newImagesArr}
            </React.Fragment>
    )
}

export default imagesGenerate