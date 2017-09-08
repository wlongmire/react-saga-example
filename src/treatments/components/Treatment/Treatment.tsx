import * as React from 'react';
import './styles.css';

export class TreatmentsComponent extends React.Component<{}, {}>{
    render(){
        return(
            <div>
               <iframe className="dosespot-base" width="80%" height="350px" src="http://my.staging.dosespot.com"></iframe>
            </div>
        )
    }
}