import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar/>
            {/* <div className="main-content"> */}
                <div className="main-text">
                   
                </div>
                <div className="bg-img">
                <span>The Corporate Card for in Africa </span>
                </div>
                <div className="cards">
                    <img src="/assets/img/rot8.png" alt="cards" />
                </div>
           
        </div>
    )
}

export default Header
