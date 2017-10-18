import * as React from 'react';

import './Treatment.css';

interface Treatment {

}
interface RXCollectionProps {
    treatments : Array<Treatment>
}

const TreatmentsCollection = (props: RXCollectionProps) => {
        return(
            <ul>
                {props.treatments.map((v:any, index: number) => {
                    return (
                        <li className="treatment-item" key={index}>
                        
                                <div className="treatment-date"> 
                                    <p><span>{v.date}</span></p>
                                </div>
                                <div className="treatment-details">
                                    <p className="treatment-type">{v.treatment_type}</p>
                                    <p className="treatment-detail"> {v.detail}</p>
                                    
                                </div>
                                <div>
                                    <p className="treatment-description">{v.description}</p>
                                </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

export default TreatmentsCollection;