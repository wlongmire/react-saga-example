import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from 'redux';
import ApplicationState from '../../../common';
import './Patients.css';
import { getAllPatients } from '../../selectors';
import * as patientActions  from '../../actions';

export interface PatientProps {
    patients: ApplicationState.IPatients;
    loadAllPatients: () => void;
}

export class Patients extends React.Component<PatientProps, {}> {

    constructor(props: PatientProps) {
        super(props);    
    }

    componentDidMount() {
        this.props.loadAllPatients();

    }

    render() {
        return (
            <h1> Patients Component</h1>
        );
    }
}

const mapStateToProps = (state: ApplicationState.IState ) => ({
     patients: getAllPatients(state)
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => bindActionCreators(
    {
        loadAllPatients: patientActions.Action.loadAllPatients
    }, 
    dispatch);

export const PatientsContainer =  connect<{}, PatientProps, {}>(mapStateToProps, mapDispatchToProps)(Patients);