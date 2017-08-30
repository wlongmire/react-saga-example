import * as React from 'react';
import './PopOver.css';

let FaFlask = require('react-icons/lib/fa/flask');

interface P {
    open?: boolean;
    _handleClickCase ?: () => void;
    _handleClickVisits ?: () => void;
    _handleClickTreatments ?: () => void;
    _handleClickOTC ?: () => void;
    _handleClickTest ?: () => void;
    _handleClickImaging ?: () => void;
    _handleClickFollowUp ?: () => void;
}

export const PopOver = (props: P) => {
    return(
        <ul id="popover">
            <li onClick={props._handleClickCase}>
                <span>Case </span>
                <i className="flask-icon"><FaFlask/></i>
            </li>

            <li onClick={props._handleClickVisits}>
                <span>Visits </span>
                <div className="flask-icon"><FaFlask/></div>
            </li>

            <li onClick={props._handleClickTreatments}>
                <span>RX </span>
                <div className="flask-icon"><FaFlask/></div>
            </li>

            <li onClick={props._handleClickOTC}>
                <span>OTC </span>
                <i className="flask-icon"><FaFlask/></i>
            </li>

            <li onClick={props._handleClickTest}>
                <span>Test </span>
                <i className="flask-icon"><FaFlask/></i>
            </li>

            <li onClick={props._handleClickImaging}>
                <span>Imaging </span>
                <i className="flask-icon"><FaFlask/></i>
            </li>

            <li onClick={props._handleClickFollowUp}>
                <span className="extra-width">Follow Up</span>
                <i className="flask-icon"><FaFlask/></i>
            </li>
    
        </ul>
    )
}