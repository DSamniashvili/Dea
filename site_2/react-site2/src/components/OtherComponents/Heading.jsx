import React from 'react';

const Heading = (props) => {
    const Heading = props.className.replace(/ .*/,'');

    return (
        <div className={`head_ head_` + props.className} ><Heading className={props.className}>{props.textContent}</Heading></div>
    )
}
export default Heading;