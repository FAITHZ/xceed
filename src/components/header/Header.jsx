import React from 'react';
import Logo from '../../assets/images/xceed-logo-black.png';
import './Header.scss';


const Header = () =>
    <header>
        <div className='logo'>
            <img src={Logo} alt="Xcreed Logo" />
        </div>
        <div className='title'>
            Xceed Liga Challenge 2021
        </div>
    </header>;


export default Header;