import * as React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <div>
        <ul className="top-navigation">
            <li className="lifeco--home">
                LifeCo
            </li>
            <li className="menu-items">
                <Link style={{color:"black"}} to="/">Home</Link>
            </li>
            <li className="menu-items">
                Monitor
            </li>
            <li className="menu-items">
                <Link to="/schedule" style={{color: "black"}}> Schedule</Link>
            </li>
            <li className="menu-items">
                Profile
            </li>
            <li className="menu-items">
                <Link style={{color:"black"}} to="/users">Admin</Link>
            </li>
        </ul>
        <hr/>
        </div>
    )
}