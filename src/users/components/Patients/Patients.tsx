import * as React from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {  Dispatch } from 'redux';
import ApplicationState from '../../../common';
// import { getAllPatients } from '../../selectors';
import { loadAllPatients } from '../../actions';
import {PatientsList} from './PatientsList';
import {Navigation} from '../../../navigation/components/Navigation';
import * as Model from '../../models';
import { history } from '../../../common';

import './Patients.css';

interface PatientProps {
    patients: Array<Model.Patient>;
    loadAllPatients: () => void;
}

interface IPatient {}


interface S {
    patients : Array<IPatient>
}

export class PatientsContainer extends React.Component<PatientProps, S> {

    constructor(props: PatientProps) {
        super(props);  
        this.state = {
            patients: []
        }  
    }

<<<<<<< HEAD
    componentDidMount() {
        this.props.loadAllPatients();
=======
    componentWillMount() {
        let patients = patientActions.loadPatients();
        this.setState({patients})
>>>>>>> develop
    }

    handleNavigateToSinglePatient = (patient: Model.Patient) => {
        history.push(`/patient/${patient.id}`, patient);
    }

    render() {
        if(this.state.patients.length ===  0 ){
            return(
                <div>Loading ...</div>
            )
        }
        return (
            <div>
<<<<<<< HEAD
                <Navigation/>
                <div className="patients-list-wrapper">
                    <div className="patients-list-title">
                        <h2>Hi Dr. Lee</h2>
                        <h3>You have <span className="chat-count">2 New Chats</span></h3>
                        <span className="patients-title"> Patients </span>
                    </div>
                    <PatientsList
                        patients={this.props.patients['patients']}
                        onClickSinglePatient={this.handleNavigateToSinglePatient}
                    />
                </div>
=======
            <Navigation/>
            <div className="patients-list-wrapper">
            <div className="patients-list-title">
                <h2>Hi Dr. Lee</h2>
                <h3>You have <span className="chat-count">2 New Chats</span></h3>
                <span className="patients-title"> Patients </span>
            </div>
            <PatientsList
                patients={this.state.patients}
                onClickSinglePatient={this.handleNavigateToSinglePatient}
            />
            </div>
>>>>>>> develop
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState.IState ) => {
     return {
         patients: state.patients
     }
};

<<<<<<< HEAD
// const mapDispatchToProps = (dispatch: Dispatch<{}>) => bindActionCreators(
//     {
//         loadAllPatients: patientActions.loadPatients
//     }, 
//     dispatch);
=======
const mapDispatchToProps = (dispatch: Dispatch<{}>) => bindActionCreators(
    {
    }, 
    dispatch);
>>>>>>> develop

export const Patients =  connect<{}, PatientProps, {}>(mapStateToProps, {
    loadAllPatients
})(PatientsContainer);