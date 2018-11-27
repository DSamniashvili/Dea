import React from 'react'
import Heading from '../components/OtherComponents/Heading'
import Paragraph from '../components/OtherComponents/Paragraph'

const SectionThree = () => {
    return (
        <div className='SectionThree-wrapper'>
            <div className="SectionThree-heading">
                <div className="SectionThree-heading-wrapper">
                    <Paragraph className={'p small_text'} textContent={'featured'} />
                    <Heading className={'h2'} textContent={'Making Ideas Come to Life'} />
                    <div className="date">
                        <div className="date_big"></div>
                        <div className="date_small"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree
