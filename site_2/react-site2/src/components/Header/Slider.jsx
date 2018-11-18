import React from 'react';

import Heading from '../OtherComponents/Heading'
import Icons from '../OtherComponents/Icons'
import Button from '../OtherComponents/Button'

const Slider = () => {
    return (
        <div className="slider_wrapper">
            <div className=" head_ head_slider">
                <Heading className={`h1`} textContent={'Creative Design & advertising'} />
                <div className=" head_ head_2">
                    <Icons className={'chart-bar'} />
                    <Heading className={'h3'} textContent={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature'} />
                </div>
                
                <Button className='button learn_more' textContent="LEARN MORE" />
                <ul className="head_ head_dots">
                    <li className="dot"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                </ul>
            </div>
        </div>
    )
}

export default Slider