import React, {useState} from 'react';
import logo from './assets/images/logo.jpg';

function Header() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <header className='wrapper header'>
            <div className='logo'>
                <img src={logo} alt='Logo'/>
            </div>
            <nav className={`navbar ${showNav ? 'show': ''}`}>
                <button className='hamburger-menu' onClick={toggleNav}>☰</button>
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