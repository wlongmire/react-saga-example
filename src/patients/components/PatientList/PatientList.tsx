import * as _ from 'lodash';
import * as classnames from 'classnames';
import * as React from 'react';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
import { fetchAllPatients, selectPatient, unselectPatient, addVisit, updateVisit } from '../../';
import { socketConnect, messageSend } from '../../../chat';
import { fetchSingleSignOnInfo } from '../../../dosespot';
import { GlobalState } from '../../../common';
import { List, ListItem } from 'material-ui/List';
import { RouteComponentProps } from 'react-router-dom';
import { PatientDetail } from '../PatientDetail';
import { Identity } from '../../../common';
import { ChatChannelInfo, ChatMessage, IdentityUserInfo, Patient, SingleSignOnInfo, Visit } from '../../../common';

import './PatientList.css';

interface PatientListProps extends RouteComponentProps<{}> {
    channels: Object;
    identity: Identity;
    patients : Array<Patient>;
    selectedPatient: Patient;
    singleSignOn: SingleSignOnInfo;
    fetchAllPatients: () => void;
    fetchSingleSignOnInfo: () => void;
    messageSend: (message: ChatMessage) => void;
    selectPatient: (patient: Patient) => void;
    socketConnect: () => void;
    unselectPatient: (patient: Patient) => void;
    addVisit: (visit: Visit, channelId: number) => void;
    updateVisit: (visit: Visit, channelId: number) => void;
}

class _PatientList extends React.Component<PatientListProps, {}> {

    constructor() {
        super();
        this.handlePatientClick = this.handlePatientClick.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
        this.handleSaveVisit = this.handleSaveVisit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllPatients();
        this.props.socketConnect();
        // this.props.fetchSingleSignOnInfo();
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

    handleSaveVisit(visit: Visit, channelId: number) {
        if (visit.isNew) {
            if (this.props.addVisit) {
                this.props.addVisit(visit, channelId);
            }
        } else {
            if (this.props.updateVisit) {
                this.props.updateVisit(visit, channelId);
            }
        }
    }

    onSendMessage(message: ChatMessage) {
        if (this.props.messageSend) {
            this.props.messageSend(message);
        }
    }

    renderPatientList() {
        let userInfo: IdentityUserInfo | undefined;

        if (this.props.identity) {
            userInfo = this.props.identity.userInfo;
        }

        return (
            <div className="patient-list">
                <div className="header">
                    {userInfo &&
                        <span>Hi {this.props.identity.roleId === 1 ? 'Dr.' : ''} {userInfo.last}</span>
                    }
                </div>
                <div className="subheader">
                    
                </div>
                <div className="list">
                    <List>
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
            </div>
        );
    }

    renderPatientDetail(currentUser: Identity, patient: Patient, patientList: Array<Patient>, channel?: ChatChannelInfo) {
        return (
            <PatientDetail 
                user={currentUser} 
                patient={patient} 
                patientList={patientList} 
                channel={channel} 
                onSendMessage={this.onSendMessage} 
                onSaveVisit={this.handleSaveVisit}
            />
        )
    }

    render() {
        if (this.props.match.path === "/app/patients/biodrive") {
            const { identity, selectedPatient, patients } = this.props;
            const channel = this.getChannel(selectedPatient);
            return this.renderPatientDetail(identity, selectedPatient, patients, channel);
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
        channels: state.chat.channels,
        identity: state.auth.identity
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
        messageSend,
        addVisit,
        updateVisit
    })(_PatientList);