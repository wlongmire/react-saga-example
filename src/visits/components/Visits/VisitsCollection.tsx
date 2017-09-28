import * as React from 'react';

import './VisitsCollection.css';

interface IVisit {

}
interface VisitsCollectionProps {
    visits : Array<IVisit>;
    getVisitDetail: (id:number) => void;
}

const VisitsCollection = (props: VisitsCollectionProps) => {
        return(
            <ul>
                {props.visits.map((v:any, index: number) => {
                    return (
                        <li className="visit-item" key={index} onClick={() => props.getVisitDetail(v.id)}>

                            <div className="image-date"> 
                                    <p><span>{v.date}</span></p>
                            </div>
                            
                            <div className="visit-details">
                                    <p className="visit-type">{v.visit_type}</p>
                                    <p className="visit-detail"> {v.location}</p>
                                    
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