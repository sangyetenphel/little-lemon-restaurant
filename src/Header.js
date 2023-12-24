import React, {useState} from 'react';
import logo from './assets/images/logo.jpg';
import { Link } from 'react-router-dom';

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
                    <Link to='/' className='nav-items'>Home</Link>
                    <Link to='/' className='nav-items'>About</Link>
                    <Link to='/' className='nav-items'>Menu</Link>
                    <Link to='/reservations' className='nav-items'>Reservations</Link>
                    <Link to='/' className='nav-items'>Order Online</Link>
                    <Link to='/' className='nav-items'>Login</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;