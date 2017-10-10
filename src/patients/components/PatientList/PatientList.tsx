import * as React from 'react';
import { connect } from 'react-redux';
import { Patient, fetchAllPatients } from '../../';
import { fetchSingleSignOnInfo } from '../../../dosespot';
import { GlobalState } from '../../../rootReducer';
import { SingleSignOnInfo } from '../../';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { RouteComponentProps } from 'react-router-dom';

import './PatientList.css';

interface PatientListProps extends RouteComponentProps<{}> {
    patients : Array<Patient>;
    singleSignOn: SingleSignOnInfo;
    fetchAllPatients: () => void;
    fetchSingleSignOnInfo: () => void;
}

class PatientList extends React.Component<PatientListProps, {}> {

    constructor() {
        super();

        this.handlePatientClick = this.handlePatientClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllPatients();
        this.props.fetchSingleSignOnInfo();
    }

    handlePatientClick(patient: Patient) {
        patient.sso = this.props.singleSignOn;
        this.props.history.push(`/patients/${patient.id}`, patient);
    }

    render() {
        if(this.props.patients.length === 0){
            return (
                <div>Loading ...</div>
            )
        }
        return (
            <div className="patient-list">
                <div className="subheader">
                    <h4>Hi Dr.Lee</h4>
                    <p>You have <span>2 New Messages</span></p>
                    <span className="list-title">Patients</span>
                </div>
                <List>
                    { this.props.patients &&
                        this.props.patients.map((patient: Patient, index: number) => {
                            return (
                                <ListItem
                                    key={index}
                                    primaryText={patient.name}
                                    leftAvatar={<Avatar src={patient.avatar } />}
                                    rightIcon={<CommunicationChatBubble />}
                                    style={{borderTop:"1px solid rgba(0,0,0,.12)"}}
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
        patients: state.patients.items,
        singleSignOn: state.dosespot.sso
    }
}

export const PatientListContainer = connect<{}, PatientListProps, {}>(mapStateToProps, { fetchAllPatients, fetchSingleSignOnInfo })(PatientList);