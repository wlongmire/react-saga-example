import * as React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from "redux";
import './Patients.css';
// import {getAllPatients} from '../../selectors';
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

export class Patients extends React.Component<PatientProps, {}>{

    constructor(props: PatientProps){
        super(props);
        this.state = {
            
        }


        
    }

    componentDidMount(){
        console.log("Mounted")
        this.props.loadAllPatients();

    }

    render(){
        // const {patients} = this.props;
        console.log(this.props)

        return (
            <h1> Patients Component</h1>
        )
    }
}


const mapStateToProps = (state: any ) => ({
     patients: state.patients
})


const mapDispatchToProps = (dispatch: Dispatch<PatientsState>) => bindActionCreators({
    loadAllPatients : patientActions.Action.loadAllPatients
},dispatch);


export const ConnectedPatients =  connect<{}, PatientProps, {}>(mapStateToProps, mapDispatchToProps)(Patients);
