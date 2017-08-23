import * as React from 'react';
import './Patients.css'

interface Patient {
    name: string
}

interface PatientListProps{
    patients : Array<Patient>
}

export const PatientsList = (props:PatientListProps) => {
    return(
        <table>
            <tbody>
            {
               props.patients.map((patient:Patient, index:number)=> {
                    return(
                        <tr key={index} className="patients-row">
                        <td className="avatar">
                           <img className="avatar-img" src="https://lh3.googleusercontent.com/-pHJxhwGxbOU/AAAAAAAAAAI/AAAAAAAAAAA/APJypA3z7sHfAw5NtWtgUSchZG2aFXEJ-Q/s64-c-mo/photo.jpg"/>

                        </td>
                        <td>
                            {patient.name}
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