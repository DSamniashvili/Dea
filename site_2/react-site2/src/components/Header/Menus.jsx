import React from "react";
import MenuItem from "./MenuItem";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menus = props => {
  for (let i = 0; i < props.menusArr.length; i++) {
    props.itemArr.push(
      <MenuItem
        className={`${props.menusArr[i]} menu-item`}
        name={props.menusArr[i]}
        link={props.menusArr[i].replace(/ /g, "")}
        key={i}
      />
    );
  }

  return <div className={`menus ${props.className}`}>{props.itemArr}</div>;
};

export default Menus;
