import React from 'react';

const MenuItem = (props) => {
    return (
        <div className={props.className}>
            <a href={props.link}>{props.name}</a>
        </div>
    )
}


export default MenuItem