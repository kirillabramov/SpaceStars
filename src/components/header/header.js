import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';


const Header = () => {
    return(
        <div className="header">
            <ul className="header__list">
                <li className="header__list-item">
                    <Link to="/people">People</Link>
                </li>
                <li className="header__list-item">
                    <Link to="/planets">Planets</Link>
                </li>
                <li className="header__list-item">
                    <Link to="/starships">Starships</Link>
                </li>
            </ul>
        </div>
    );
}


export default Header; 