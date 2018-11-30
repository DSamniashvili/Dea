import React from 'react';

const SocialItem = (props) => {
    return (
        <React.Fragment>
            <i 
            className={`fab fa-` + props.className} 
            style={{color: props.style}}>
            </i>
        </React.Fragment>
    )
}
export default SocialItem;