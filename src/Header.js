import React from 'react';
import logo from './assets/images/logo.jpg';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt='Logo'/>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Menu</a></li>
                    <li><a href=''>Reservations</a></li>
                    <li><a href=''>Order Online</a></li>
                    <li><a href=''>Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;