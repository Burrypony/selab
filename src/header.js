import React from 'react';
import './index.css';
import Logo from './img/logo-05.png';


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={Logo}/>
                </div>
                <div className="navigation">
                    <span>about us</span>
                    <span>expertise</span>
                    <span>what we offer</span>
                    <span>blog</span>
                </div>
            </header>
        )
    }
}

export default Header;