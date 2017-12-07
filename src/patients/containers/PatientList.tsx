import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { fetchAllPatients, selectPatient, addVisit, updateVisit } from '../actions';
import chat from '../../chat';
import { GlobalState, Identity, ChatMessage, ChannelEventMessage, Visit, Patient } from '../../common';
import PatientListForm from '../components/PatientList/PatientListForm';

interface PatientsProps extends RouteComponentProps<{}> {
    messages: Array<ChannelEventMessage<ChatMessage>>;
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

class PatientList extends React.Component<PatientsProps, {}> {
    render() {
        return(
            <PatientListForm {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        patients: state.patients.items,
        messages: state.chat.messages,
        user: state.auth.identity,
        selectedPatientId: state.patients.selectedPatientId
    };
};

const mapDispatchToProps = {
    fetchAllPatients,
    selectPatient,
    socketConnect: chat.actions.socketConnect,
    messageSend: chat.actions.messageSend,
    addVisit,
    updateVisit
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);