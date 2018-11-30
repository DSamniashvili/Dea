import React from 'react';
import Menus from './Header/Menus'
import GenerateSocials from './FooterSection/GenerateSocials'

let menusArr = ['home', 'products', 'awards', 'contact us'];
let itemArr = [];

const FooterPart = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="logo-footer"><h1>Dopos</h1></div>
                <Menus menusArr={menusArr} itemArr={itemArr} className={'menus-footer-part'} />
                <GenerateSocials />
            </div>
        </div>
    )
}

export default FooterPart;