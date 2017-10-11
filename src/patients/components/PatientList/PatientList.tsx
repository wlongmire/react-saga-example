import * as React from 'react';
import { connect } from 'react-redux';
import { Patient, fetchAllPatients, selectPatient, unselectPatient } from '../../';
import { socketConnect, messageSend } from '../../../chat';
import { fetchSingleSignOnInfo } from '../../../dosespot';
import { GlobalState } from '../../../rootReducer';
import { SingleSignOnInfo } from '../../';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { RouteComponentProps } from 'react-router-dom';
import { ChatChannelInfo } from '../../../chat';
import { ChatMessage } from '../../../chat/reducer';
import { PatientDetail } from '../PatientDetail';
import * as _ from 'lodash';
import * as classnames from 'classnames';

import './PatientList.css';

interface PatientListProps extends RouteComponentProps<{}> {
    patients : Array<Patient>;
    singleSignOn: SingleSignOnInfo;
    fetchAllPatients: () => void;
    fetchSingleSignOnInfo: () => void;
    selectPatient: (patient: Patient) => void;
    unselectPatient: (patient: Patient) => void;
    socketConnect: () => void;
    messageSend: (message: ChatMessage) => void;
    channels: Object;
    selectedPatient: Patient;
}

class _PatientList extends React.Component<PatientListProps, {}> {

    constructor() {
        super();
        this.handlePatientClick = this.handlePatientClick.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllPatients();
        this.props.socketConnect();
        this.props.fetchSingleSignOnInfo();
    }

    handlePatientClick(patient: Patient, channel?: ChatChannelInfo) {
        patient.sso = this.props.singleSignOn;
        patient.channel = channel;
        this.props.selectPatient(patient);
    }

    getChannel(patient: Patient): ChatChannelInfo | undefined {
        if (!this.props.channels || !_.hasIn(this.props.channels, patient.primaryChannel)) 
            return undefined;
        return this.props.channels[patient.primaryChannel] as ChatChannelInfo;
    }

    onSendMessage(message: ChatMessage) {
        if (this.props.messageSend) {
            this.props.messageSend(message);
        }
    }

    renderPatientList() {
        return (
            <div className="patient-list">
                <List>
                    <Subheader>Patients</Subheader>
                    { this.props.patients &&
                        this.props.patients.map((patient: Patient, index: number) => {
                            let channel = this.getChannel(patient);
                            let unreadCount = channel ? channel.unreadMessages.length : 0;
                            return (
                                <ListItem
                                    key={index}
                                    primaryText={patient.name}
                                    leftAvatar={<Avatar src={patient.avatar} />}
                                    rightIcon={
                                        <div className={classnames('patient-message-count-wrapper', {'hidden': unreadCount == 0})}>
                                            <div className="patient-message-count">{unreadCount}</div> 
                                        </div>
                                    }
                                    onClick={() => this.handlePatientClick(patient, channel)}
                                />
                            );
                        })
                    }
                </List>
            </div>
        );
    }

    renderPatientDetail(patient: Patient, channel?: ChatChannelInfo) {
        return (
            <PatientDetail patient={patient} channel={channel} onSendMessage={this.onSendMessage} />
        )
    }

    render() {
        if (this.props.selectedPatient) {
            const patient = this.props.selectedPatient
            const channel = this.getChannel(patient);
            return this.renderPatientDetail(patient, channel);
        } else {
            return this.renderPatientList();
        }
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        selectedPatient: state.patients.selectedPatient,
        patients: state.patients.items,
        singleSignOn: state.dosespot.sso,
        channels: state.chat.channels
    }
}

export const PatientList = connect<{}, PatientListProps, {}>(
    mapStateToProps, 
    { 
        fetchAllPatients, 
        fetchSingleSignOnInfo, 
        selectPatient, 
        unselectPatient,
        socketConnect,
        messageSend
    })(_PatientList);