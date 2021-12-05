import React from 'react';
import logo from '../logo.jpg';

const Header = () => {
    return <header className="header">
        <nav>
            <div className="logo">
                <img src={logo} alt="Todolist"/>
            </div>
        </nav>
    </header>
}

export default Header
