import * as React from 'react';
import { connect } from 'react-redux';
import { Patient, fetchAllPatients } from '../../';
import { GlobalState } from '../../../rootReducer';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { RouteComponentProps } from 'react-router-dom';

import './PatientList.css';

interface PatientListProps extends RouteComponentProps<{}> {
    patients : Array<Patient>;
    fetchAllPatients: () => void;
}

class PatientList extends React.Component<PatientListProps, {}> {

    constructor() {
        super();

        this.handlePatientClick = this.handlePatientClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllPatients();
    }

    handlePatientClick(patient: Patient) {
        this.props.history.push(`/patients/${patient.id}`, patient);
    }

    render() {
        return (
            <div className="patient-list">
                <List>
                    <Subheader>Patients</Subheader>
                    { this.props.patients &&
                        this.props.patients.map((patient: Patient, index: number) => {
                            return (
                                <ListItem
                                    key={index}
                                    primaryText={patient.name}
                                    leftAvatar={<Avatar src={patient.avatar } />}
                                    rightIcon={<CommunicationChatBubble />}
                                    onClick={() => this.handlePatientClick(patient)}
                                />
                            );
                        })
                    }
                </List>
            </div>
        );
    }
}

const mapStateToProps= (state: GlobalState) => {
    return {
        patients: state.patients.items
    }
}

export const PatientListContainer = connect<{}, PatientListProps, {}>(mapStateToProps, { fetchAllPatients })(PatientList);