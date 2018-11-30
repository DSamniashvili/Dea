import React from 'react';

const SectionThree = (props) => {
    // /const Type = props.className.replace(/ .*/,'');

    return (
        <div className={props.className} >
           <div className="small-box-heading">{props.heading}</div>
           <span>{props.content}</span>
           <hr/>
        </div>
    )
}
export default SectionThree;