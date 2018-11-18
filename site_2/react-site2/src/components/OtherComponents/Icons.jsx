import React from 'react';

const Icons = (props) => {
    return (
        <div className={`icon icon_` + props.className}>
            <i className={`far fa-` + props.className}></i>
        </div>
    )
}
export default Icons;