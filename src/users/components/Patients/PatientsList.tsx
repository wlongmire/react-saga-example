import * as React from 'react';
import './Patients.css';
import {Link} from 'react-router-dom';
import * as Model from '../../models';

type PatientsListProps = {
    patients : Array<Model.Patient>;
    onClickSinglePatient?: () => void
}
export const PatientsList = (props:PatientsListProps) => {
    return(
        <table>
            <tbody>
            {
               props.patients.map((patient:Model.Patient, index:number)=> {
                    return(
                        <tr key={index} className="patients-row" onClick={props.onClickSinglePatient}>
                        <td className="avatar">
                           <img className="avatar-img" src={patient.avatar}/>

                        </td>
                        <td>
                        <Link to={'patient/' + patient.id}><span className="patient-name">{patient.name}</span></Link>
                        </td>
                        <td className="message-indicator">
                            <span className="new-message-alert">2</span><span className="message-text">New Message</span>
                        </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}