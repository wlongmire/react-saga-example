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
                        <div>
                        <p className="treatment-type">{v.treatment_type}</p>
                        <div className="treatment-details">
                        <p className="treatment-detail"> {v.detail}</p>
                        <p className="treatment-date">{v.date}</p>
                        </div>

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