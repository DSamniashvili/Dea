import React from 'react';

const Button = (props) => {
    const Type = props.className.replace(/ .*/,'');

    return (
        <div className={props.className} ><Type className={props.className}>{props.textContent}</Type></div>
    )
}
export default Button;