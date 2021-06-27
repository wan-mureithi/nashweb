import React from 'react';
import {Link} from 'react-scroll';
import mainlogo from '../../Styles/images/mainlogo.png';

function Navbar() {
    return (
        <div>
            <nav>
                <Link>
                <img src={mainlogo} className='logo' alt="logo" /></Link>
                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label for="menu-btn" className="menu-icon">
                    <span className="nav-icon">
                        
                    </span>
                </label>
            </nav>
        </div>
    )
}

export default Navbar
