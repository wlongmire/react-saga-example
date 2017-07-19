import * as React from 'react';
import {connect} from 'react-redux';
import {  Dispatch } from "redux";
import './Patients.css';
import {getAllPatients} from '../../selectors';
import * as patientActions  from '../../actions';
// import * as Model from '../../models';


export interface IPatient {
    id: number;
    first_name: string;
    last_name: string;
}

export interface PatientProps {
    patients: IPatient[];
    loadAllPatients: () => void
}

export interface PatientsState {

}

export class Patients extends React.Component<PatientProps, PatientsState>{

    constructor(props: PatientProps){
        super(props);
        this.state = {
            
        }


        
    }

    render(){
        // const {patients} = this.props;
        console.log(this.props)

        return (
            <h1> Patients Component</h1>
        )
    }
}


function mapStateToProps(state: PatientsState , ownProps: PatientProps){
    return {
        patients: getAllPatients(state)
    }
}


function mapDispatchToProps(dispatch: Dispatch<PatientsState>){
    return {
        loadAllPatients: () => dispatch(patientActions.Action.loadAllPatients())
    }

}


export default connect<{}, PatientProps, PatientsState>(mapStateToProps, mapDispatchToProps)(Patients);