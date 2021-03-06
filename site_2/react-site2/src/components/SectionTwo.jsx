import React from 'react'
import Heading from '../components/OtherComponents/Heading'
import Paragraph from '../components/OtherComponents/Paragraph'
import Button from '../components/OtherComponents/Button';
import ImagesGenerate from './SectionTwo/ImagesGenerate';


const ImagesArr = ['01', '02', '03', '04'];
const newImagesArr = [];

const SectionTwo = () => {
    return (
        <div className='SectionTwo-wrapper'>
            <div className="sectionTwo-heading">
                <div className="sectionTwo-heading-wrapper">
                <Paragraph className={'p small_text'} textContent={'studio'} />
                <Heading className={'h2'} textContent={'Design Solutions for Any Media'} />
                <hr />
                <Heading className={'h3 larger_text'} textContent={'Lorem Ipsum is dummy text of the printing Ipsum is simply'} />
                <Button className='button learn_more' textContent="LEARN MORE" />
                </div>
            </div>
            <div className="sectionTwo-images">
                <ImagesGenerate ImagesArr = {ImagesArr} newImagesArr={newImagesArr}/>
            </div>
        </div>
    )
}

export default SectionTwo;