import React from 'react'
import Heading from '../components/OtherComponents/Heading'
import Paragraph from '../components/OtherComponents/Paragraph'
import MyDate from '../PureScripts/date'
import Icons from '../components/OtherComponents/Icons'

const SectionThree = () => {
    return (
        <div className='SectionThree-wrapper'>
            <div className="SectionThree-heading">
                <Paragraph className={'p small_text'} textContent={'featured'} />

                <div className="wrapHeading">
                    <div className="SectionThree-heading-wrapper">
                        <Heading className={'h2'} textContent={'Making Ideas Come to Life'} />
                    </div>
                    <MyDate />
                </div>
            </div>
            <div className="section_three_banner">
                <Icons className={'angle-left'} />
                <img src="imgs/section_three_banner.png" alt="section three banner" />
                <Icons className={'angle-right'} />
            </div>
        </div>

    )
}

export default SectionThree
