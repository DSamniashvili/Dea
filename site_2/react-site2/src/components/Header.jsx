import React from 'react';


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="logo"><h1>Dopos</h1></div>
                <div className="menus">
                    <div className="menu-item"><a href={'#Header'}>HOME</a> </div>
                    <div className="menu-item"><a href={'#Header'}>PRODUCTS</a> </div>
                    <div className="menu-item"><a href={'#Header'}>AWARDS</a> </div>
                    <div className="menu-item"><a href={'#Header'}>CONTACT US</a> </div>
                </div>
                <div className="login">
                    <h3>log in</h3>
                    <div className="person-wrapper">
                        <div className="person"><i className="far fa-user"></i></div>
                    </div>
                </div>
            </div>
            <div className="slider_wrapper">
                <div className=" head_ head_slider">
                    <div className=" head_ head_h1"><h1>Creative Design & advertising</h1></div>
                    <div className=" head_ head_2">
                        <div className="chart_icon">
                            <i className="fas fa-chart-bar"></i>
                        </div>
                        <h3>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature </h3>
                    </div>
                    <div className=" head_ head_learn_more"><span>Learn More</span></div>
                    <ul className="head_ head_dots">
                        <li className="dot"></li>
                        <li className="dot"></li>
                        <li className="dot"></li>
                        <li className="dot"></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;