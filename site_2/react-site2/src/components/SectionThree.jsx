import React from 'react'
import Heading from '../components/OtherComponents/Heading'
import Paragraph from '../components/OtherComponents/Paragraph'
import MyDate from '../PureScripts/date'
import Icons from '../components/OtherComponents/Icons'
import SectThree from '../components/SectionThreeComponents/SectThree'
import Button from '../components/OtherComponents/Button'

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

            <div className="sectionThreeBottom">
                <div className="sectionThree-left">
                    <div className="sectionThreeText">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis mollitia temporibus repellat iste quia itaque sapiente qui minus hic voluptate, harum illo facilis, eligendi eaque deleniti. Iste maxime perspiciatis tenetur!Deleniti laborum repellat.
            </div>
            <Button className='button case_study' textContent="CASE STUDY" />
                </div>
                <div className="small-box-wrapper">
                    <SectThree className={'small-box'} heading={'category'} content={'Design & Branding'} />
                    <SectThree className={'small-box'} heading={'client'} content={'Cusco Barista'} />
                </div>
            </div>
        </div>

    )
}

export default SectionThree
