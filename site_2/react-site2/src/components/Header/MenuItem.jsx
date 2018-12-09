import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MenuItem = props => {
  return (
    <div className={props.className}>
      <a href={props.link}>{props.name}</a>
      {/* <Link to={`/${props.link}`}>{props.name}</Link> */}
    </div>
  );
};

export default MenuItem;
