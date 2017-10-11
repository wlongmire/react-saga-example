import * as React from 'react';
// import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
// import { GlobalState } from '../../../rootReducer';
import { Patient } from '../../';
// import { RouteComponentProps } from 'react-router-dom';
import { ChatChannel } from '../../../chat';
import { ChatChannelInfo } from '../../../chat';
import { ChatMessage } from '../../../chat/reducer';

// const SafeUrlAssembler = require('safe-url-assembler');

import './PatientDetail.css';

interface PatientDetailProps {
    patient: Patient;
    channel?: ChatChannelInfo;
    onSendMessage: (message: ChatMessage) => void;
}

interface PatientDetailState {}

export class PatientDetail extends React.Component<PatientDetailProps, PatientDetailState> {

    constructor() {
        super();
        this.state = {
            userAccessToken: ''
        };
    }

    componentDidMount() {
        const token = localStorage.getItem('access_token') as string;
        this.setState({userAccessToken: token});
    }

    buildPatientUrl() {
        return '';
        // const patient = this.props.patients.find((p: Patient) => p.id == this.props.l;
        // if (!patient.sso) return;
        // const { clinicId, userId, ssoPhraseLength, singleSignOnCode, singleSignOnUserIdVerify } = patient.sso;
        // return SafeUrlAssembler('http://my.staging.dosespot.com')
        //     .segment('LoginSingleSignOn.aspx')
        //     .query({
        //         SingleSignOnClinicId: clinicId,
        //         SingleSignOnUserId: userId,
        //         SingleSignOnPhraseLength: ssoPhraseLength,
        //         SingleSignOnCode: singleSignOnCode,
        //         SingleSignOnUserIdVerify: singleSignOnUserIdVerify,
        //         Prefix: 'Mr',
        //         FirstName: 'Richard',
        //         MiddleName: '',
        //         LastName: 'Cornew',
        //         Suffix: '',
        //         DateOfBirth: '1/24/2001',
        //         Gender: 'Male',
        //         Address1: '716 Main Street',
        //         Address2: '@nd Floor',
        //         City: 'Waltham',
        //         State: 'Massachusetts',
        //         ZipCode: '02451',
        //         PrimaryPhone: '781 444-4444',
        //         PrimaryPhoneType: 'Home',
        //         PatientID: '393111'
        //     })
        //     .toString();
    }

    render() {
        const { patient } = this.props;
        const { channel } = this.props;

        return (
            <div className="patient-detail">
                <div className="patient-detail-header">
                    <Avatar 
                        size={70}
                        backgroundColor="#f84445"
                        color="#ffffff">
                        {patient &&
                            patient.name ? patient.name.substr(0,1) : ''
                        }
                    </Avatar>
                    <div className="patient-detail-header-wrapper">
                        <div className="patient-detail-header-title">
                            {patient &&
                                patient.name 
                            }
                        </div>
                        <div className="patient-detail-header-subtitle">
                            Gender, Age
                        </div>
                    </div>
                </div>
                <div className="patient-detail-body">
                    <div className="patient-detail-chat">
                        {patient &&
                            <ChatChannel channel={channel} userId={patient.id} patient={patient} onSendMessage={this.props.onSendMessage} />
                        }
                        
                    </div>
                    {/* <div className="patient-detail-info">
                        <div className="admin-dosespot-dialog-wrapper">
                            <iframe className="admin-dosespot-iframe" src={ patientUrl } ></iframe>
                        </div>
                    </div> */}
                </div>
            </div>     
        )
    }
}