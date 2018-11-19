import React from 'react';

const Paragraph = (props) => {
    const ElementType = props.className.replace(/ .*/,'');
    return (
        <div className={`small_text ` + props.className} ><ElementType className={props.className}>{props.textContent}</ElementType></div>
    )
}
export default Paragraph;