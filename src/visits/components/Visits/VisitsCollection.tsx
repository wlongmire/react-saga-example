import * as React from 'react';

import './VisitsCollection.css';

interface IVisit {

}
interface VisitsCollectionProps {
    visits : Array<IVisit>
}

const VisitsCollection = (props: VisitsCollectionProps) => {
        return(
            <ul>
                {props.visits.map((v:any, index: number) => {
                    return (
                        <li className="visit-item" key={index}>
                        <div>
                        <p className="visit-type">{v.visit_type}</p>
                        <div className="visit-date-location">
                        <p className="visit-location"> {v.location}</p>
                        <p className="visit-date">{v.date}</p>
                        </div>

                        </div>
                        <div>
                        <p className="visit-description">{v.description}</p>
                        </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

export default VisitsCollection;