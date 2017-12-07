import * as React from 'react';

import './FloatingBtn.css';
interface P {
    onMouseEnter?: (e: any) => void;
    onClick?: (e: any) => void;
    className?: string;
}
export const FloatingBtn = (props: P) => {
    return (
        <div 
            onMouseEnter={props.onMouseEnter}
            className={props.className}
            onClick={props.onClick}
        >
            <span className="plus-icon"> + </span>
        </div>
    );
};