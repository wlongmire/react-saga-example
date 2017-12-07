import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import chat from '../../chat';
import { GlobalState, Identity, Visit, Patient, ChannelEventMessage,
    ChatMessage, Treatment, Other, ChannelEventMessageRequest } from '../../common';
import PatientDetailForm from '../components/PatientDetail/PatientDetailForm';
import visits from '../../visits';
// import treatments from '../../treatments';
import other from '../../other';

interface PatientsProps extends RouteComponentProps<{patientId: number}> {
    user: Identity;
    messages: Array<ChannelEventMessage<ChatMessage>>;
    patients: Array<Patient>;
    treatments: Array<Treatment>;
    visits: Array<Visit>;
    other: Other;
    fetchVisits: (channelId: number) => void;
    fetchTreatments: (channelId: number) => void;
    loadOther: (channelId: number) => void;
    sendMessage: (message: ChannelEventMessageRequest<ChatMessage>) => void;
    onSaveVisit: (visit: Visit, channelId: number) => void;
}

class PatientDetail extends React.Component<PatientsProps, {}> {
    render() {
        return(
            <PatientDetailForm {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        patients: state.patients.items,
        visits: state.visits.items,
        treatments: state.treatments.items,
        user: state.auth.identity,
        messages: state.chat.messages,
        other: state.other.item
    };
};

const mapDispatchToProps = {
    sendMessage: chat.actions.messageSend,
    fetchVisits: visits.actions.fetchVisits,
    // fetchTreatments: treatments.actions.fetchTreatments,
    loadOther: other.actions.loadOther
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetail);