import React from 'react';
import Menus from './Header/Menus'
import Slider from './Header/Slider'
import Login from './Header/Login'

let menusArr = ['home', 'products', 'awards', 'contact us'];
let itemArr = [];

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="logo"><h1>Dopos</h1></div>
                <Menus menusArr={menusArr} itemArr={itemArr} />
                <Login />
            </div>
            <Slider />
        </div>
    )
}

export default Header;