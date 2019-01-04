import React from 'react';

import './header.scss';


const Header = () => {
    return(
        <div className="header">
            <ul className="header__list">
                <li className="header__list-item"><a href="#">People</a></li>
                <li className="header__list-item"><a href="#">Planet</a></li>
                <li className="header__list-item"><a href="#">Starship</a></li>
            </ul>
        </div>
    );
}


export default Header; 