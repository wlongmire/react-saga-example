// import * as _ from 'lodash';
import * as classnames from 'classnames';
import * as React from 'react';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
import { fetchAllPatients, selectPatient } from '../../';
import { socketConnect, messageSend } from '../../../chat';
import { GlobalState } from '../../../common';
import { List, ListItem } from 'material-ui/List';
import { RouteComponentProps } from 'react-router-dom';
import { Identity } from '../../../common';
import { ChannelEventMessage, ChatMessage, IdentityUserInfo, Patient, Visit } from '../../../common';

import './PatientList.css';

interface PatientListProps extends RouteComponentProps<{}> {
    messages: Array<ChannelEventMessage<{}>>;
    user: Identity;
    patients: Array<Patient>;
    selectedPatientId: number;
    fetchAllPatients: () => void;
    messageSend: (message: ChatMessage) => void;
    selectPatient: (patientId: number) => void;
    socketConnect: () => void;
    addVisit: (visit: Visit, channelId: number) => void;
    updateVisit: (visit: Visit, channelId: number) => void;
}

interface PatientListState {
    patientItems: PatientItem[];
}

interface PatientItem {
    patient: Patient;
    messages: Array<ChannelEventMessage<ChatMessage>>;
    unreadMessageCount: number;
}

class PatientList extends React.Component<PatientListProps, PatientListState> {

    constructor() {
        super();
        this.state = {
            patientItems: []
        };
        this.handlePatientClick = this.handlePatientClick.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
        this.handleSaveVisit = this.handleSaveVisit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllPatients();
        this.props.socketConnect();
        this.setState({
            patientItems: this.createPatientItems()
        });
    }

    handlePatientClick(patient: Patient) {
        this.props.selectPatient(patient.id);
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

    createPatientItem(patient: Patient, messages: Array<ChannelEventMessage<{}>>): PatientItem {
        let channelMessages = messages
            .filter((item) => item.channel_id === patient.primaryChannel)
            .sort((a, b) => {
                if (a.sequence_no < b.sequence_no) {
                    return -1;
                }
                if (a.sequence_no > b.sequence_no) {
                    return 1;
                }
                return 0;
            });
            
        let unreadMessageCount = channelMessages.reduceRight(
            (previous: any, current) => {
                if (previous.continue) {
                    if (
                        current.event_type !== 'chat_message' || 
                        current.user_id !== patient.id
                    ) {
                        return {
                            continue: false,
                            count: previous.count
                        };
                    }
                    return {
                        continue: true,
                        count: previous.count + 1
                    };
                }
                return previous;
            },
            {
                continue: true,
                count: 0
            }
        ).count;
        
        return {
            patient,
            messages: channelMessages,
            unreadMessageCount
        } as PatientItem;
    }

    createPatientItems(): Array<PatientItem> {
        if (!this.props.patients) {
            return [];
        }
        const { messages } = this.props;
        return this.props.patients.map((patient) => {
            return this.createPatientItem(patient, messages);
        });
    }

    render() {
        let userInfo: IdentityUserInfo | undefined;
        
        if (this.props.user) {
            userInfo = this.props.user.userInfo;
        }

        let patientItems = this.createPatientItems();
        let unreads = patientItems.filter((item) => item.unreadMessageCount > 0);
        let reads = patientItems.filter((item) => item.unreadMessageCount === 0);

        return (
            <div className="patient-list">
                <div className="header">
                    {userInfo &&
                        <span>Hi {this.props.user.roleId === 1 ? 'Dr.' : ''} {userInfo.last}</span>
                    }
                </div>
                <div className="subheader" />
                <div className="list">
                    <List>
                        {
                            unreads
                                .sort((a: PatientItem, b: PatientItem) => {
                                    let aSeqNo = a.messages[a.messages.length - 1].sequence_no;
                                    let bSeqNo = b.messages[b.messages.length - 1].sequence_no;
                                    if (aSeqNo < bSeqNo) {
                                        return -1;
                                    }
                                    if (aSeqNo > bSeqNo) {
                                        return 1;
                                    }
                                    return 0;
                                })
                                .reverse()
                                .map((item, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            primaryText={item.patient.name}
                                            leftAvatar={<Avatar src={item.patient.avatar} />}
                                            rightIcon={
                                                <div 
                                                    className={
                                                        classnames(
                                                            'patient-message-count-wrapper', 
                                                            {'hidden': item.unreadMessageCount === 0}
                                                        )
                                                    }
                                                >
                                                    <div className="patient-message-count">
                                                        {item.unreadMessageCount}
                                                    </div> 
                                                </div>}
                                            onClick={() => this.handlePatientClick(item.patient)}
                                        />
                                    );
                                })
                        }
                        {
                            reads
                                .sort((a: PatientItem, b: PatientItem) => {
                                    let aMessageCount = a.messages.length;
                                    let bMessageCount = b.messages.length;
                                    if (aMessageCount) {
                                        if (bMessageCount) {
                                            let aSeqNo = a.messages[a.messages.length - 1].sequence_no;
                                            let bSeqNo = b.messages[b.messages.length - 1].sequence_no;
                                            if (aSeqNo < bSeqNo) {
                                                return -1;
                                            }
                                            if (aSeqNo > bSeqNo) {
                                                return 1;
                                            }
                                            return 0;
                                        }
                                        return 1;
                                    }
                                    if (bMessageCount) {
                                        return -1;
                                    }
                                    return 0;
                                })
                                .reverse()
                                .map((item, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            primaryText={item.patient.name}
                                            leftAvatar={<Avatar src={item.patient.avatar} />}
                                            rightIcon={
                                                <div 
                                                    className={
                                                        classnames(
                                                            'patient-message-count-wrapper', 
                                                            {'hidden': item.unreadMessageCount === 0}
                                                        )
                                                    }
                                                >
                                                    <div className="patient-message-count">
                                                        {item.unreadMessageCount}
                                                    </div> 
                                                </div>}
                                            onClick={() => this.handlePatientClick(item.patient)}
                                        />
                                    );
                                })
                        }
                    </List>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        patients: state.patients.items,
        singleSignOn: state.dosespot.sso,
        messages: state.chat.messages,
        user: state.auth.identity
    };
};

export default connect<{}, PatientListProps, {}>(
    mapStateToProps, 
    { 
        fetchAllPatients, 
        selectPatient, 
        socketConnect,
        messageSend,
    }
)(PatientList);