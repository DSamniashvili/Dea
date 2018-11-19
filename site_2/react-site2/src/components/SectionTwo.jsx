import React from 'react'
import Heading from '../components/OtherComponents/Heading'
import Paragraph from '../components/OtherComponents/Paragraph'
import Button from '../components/OtherComponents/Button'
import ImageWithText from '../components/OtherComponents/ImageWithText'

const SectionTwo = () => {
    return (
        <div className='SectionTwo-wrapper'>
            <div className="sectionTwo-heading">
                <div className="sectionTwo-heading-wrapper">
                <Paragraph className={'p small_text'} textContent={'featured'} />
                <Heading className={'h2'} textContent={'Design Solutions for Any Media'} />
                <hr />
                <Heading className={'h3 larger_text'} textContent={'Lorem Ipsum is dummy text of the printing Ipsum is simply'} />
                <Button className='button learn_more' textContent="LEARN MORE" />
                </div>
            </div>
            <div className="sectionTwo-images">
                <ImageWithText className={'image_text'}/>
            </div>
        </div>
    )
}

export default SectionTwo;