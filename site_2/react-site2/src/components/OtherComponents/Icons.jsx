import React from 'react';

const Icons = (props) => {
    return (
             <React.Fragment>
            <i className= {`far fa-` + props.className}></i>
            </React.Fragment>
    )
}
export default Icons;