import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from 'redux';
import ApplicationState from '../../../common';
import { getAllPatients } from '../../selectors';
import * as patientActions  from '../../actions';
import {PatientsList} from './PatientsList';
import {Navigation} from '../../../navigation/components/Navigation';

import './Patients.css';

export interface PatientProps {
    patients: ApplicationState.IPatients;
    loadAllPatients: () => void;
}

export class PatientsContainer extends React.Component<PatientProps, {}> {

    constructor(props: PatientProps) {
        super(props);    
    }

    componentDidMount() {
        this.props.loadAllPatients();

    }

    render() {
        console.log('Patients', this.props.patients)
        if(!this.props.patients.patients){
            return(
                <div>Loading ...</div>
            )
        }

        return (
            <div>
            <Navigation/>
            <div className="patients-list-wrapper">
            <div className="patients-list-title">
                <h2>Hi Dr. Lee</h2>
                <h3>You have <span className="chat-count">2 New Chats</span></h3>
                <span className="patients-title"> Patients </span>
            </div>
            <PatientsList
                patients={
                    this.props.patients.patients}
            />
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState.IState ) => ({
     patients: getAllPatients(state)
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => bindActionCreators(
    {
        loadAllPatients: patientActions.loadPatients
    }, 
    dispatch);

export const Patients =  connect<{}, PatientProps, {}>(mapStateToProps, mapDispatchToProps)(PatientsContainer);