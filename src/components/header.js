import React from 'react';
import Greeting from './greeting';
import './greeting.css'
import Home from './home'


function Header() {
    return (
        <div className="title">
            <h1>My awesome App</h1>
            <hr/>
            <Home/>
        </div>
    )
}

export default Header;