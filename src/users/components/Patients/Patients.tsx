import * as React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
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

export class Patients extends React.Component<PatientProps, any>{

    constructor(props: PatientProps){
        super(props);
        this.state = {
            
        }


        
    }

    public componentDidMount(){
        console.log("Mounted")

    }

    render(){
        // const {patients} = this.props;
        console.log(this.props)

        return (
            <h1> Patients Component</h1>
        )
    }
}


const mapStateToProps = (state: PatientsState ) => ({
     patients: getAllPatients(state)
})


const mapDispatchToProps = (dispatch: Dispatch<PatientsState>) => bindActionCreators({
        loadAllPatients : patientActions.Action.loadAllPatients
},dispatch);


export default connect<{}, PatientProps, {}>(mapStateToProps, mapDispatchToProps)(Patients);