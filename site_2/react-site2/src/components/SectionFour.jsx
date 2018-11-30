import React from 'react'
import Heading from './OtherComponents/Heading';
import Icons from './OtherComponents/Icons'
import Button from './OtherComponents/Button';

const SectionFour = () => {
    return (
        <div className="SectionFour-wrapper">
            <div className="sectionFour-content">
                <Heading className={'h2'} textContent={'Our Clients'} />
                <div className="sectionFour-icons">
                    <Icons className={'rainbow'} />
                    <Icons className={'rainbow'} />
                    <Icons className={'rainbow'} />
                </div>
                <Button className='button view-all' textContent="VIEW ALL" />
            </div>
        </div>
    )
}
export default SectionFour