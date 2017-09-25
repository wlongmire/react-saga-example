import * as React from 'react';
import './Patients.css';
import {Link} from 'react-router-dom';
import * as Model from '../../models';

type PatientsListProps = {
<<<<<<< HEAD
    patients : Array<Model.Patient>;
    onClickSinglePatient?: (patient: Model.Patient) => void
=======
    patients : Array<any>;
    onClickSinglePatient?: () => void
>>>>>>> develop
}

export const PatientsList = (props:PatientsListProps) => {
    return(
        <table>
            <tbody>
            {
                props.patients &&
                    props.patients.map((patient: Model.Patient, index: number) => {
                            return (
                                <tr key={index} className="patients-row" onClick={ () => {
                                        if (props.onClickSinglePatient) {
                                            props.onClickSinglePatient(patient);
                                        }
                                    }
                                }>
                                    <td className="avatar">
                                        <img className="avatar-img" src={ patient.avatar } />
                                    </td>
                                    <td>
                                        <Link to={{pathname: `/patient/${ patient.id }`, state: patient}} />
                                        <span className="patient-name">{ patient.name }</span>
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