import * as React from 'react';
import './Navigation.css';


export const Navigation = () => {
    return (
        <div>
        <ul className="top-navigation">
            <li className="lifeco--home">
                LifeCo
            </li>
            <li className="menu-items">
                Home
            </li>
            <li className="menu-items">
                Monitor
            </li>
            <li className="menu-items">
                Schedule
            </li>
            <li className="menu-items">
                Profile
            </li>
        </ul>
        <hr/>
        </div>
    )
}