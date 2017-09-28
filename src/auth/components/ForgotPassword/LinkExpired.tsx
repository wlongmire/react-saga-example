import * as React from 'react';
import './styles.css';

import * as Common from '../common';



export class LinkExpired extends React.Component<{}, {}>{
    render(){
        return(
            <div>
                <Common.Components.HeaderLabel/>
                <div className="link-expired-body">
                <h2 className="bold">
                    Update password link expired
                </h2>
                <p className="text-content">We do this to protect your account. Thanks for understanding!</p>
                <button className="link-expired-btn"> Resent email and code</button>
                <p className="text-content-small">Other questions? Email at hello@life.co</p>
                </div>
            </div>
        )
    }
}