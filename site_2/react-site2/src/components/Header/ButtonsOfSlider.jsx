import React from 'react';
import SliderButton from './SliderButton'

let itemArr = [];

const ButtonsOfSlider = (props) => {
    for (let i = 0; i < 4; i++) {
        itemArr.push(
            <SliderButton
                className={'dot-circle'}
                key={i} />
        )
    }
    return (
        <ul className="head_ head_dots">
            {itemArr}
        </ul>
    )
}

export default ButtonsOfSlider