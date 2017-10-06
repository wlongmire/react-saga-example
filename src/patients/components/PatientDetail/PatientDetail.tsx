import * as React from 'react';
import Avatar from 'material-ui/Avatar';
import { Patient } from '../../';
import { RouteComponentProps } from 'react-router-dom';
import { ChatChannel } from '../../../chat';

const SafeUrlAssembler = require('safe-url-assembler');

import './PatientDetail.css';

interface PatientDetailProps extends RouteComponentProps<{}> {}

interface PatientDetailState {
    userAccessToken: string;
}

export class PatientDetail extends React.Component<PatientDetailProps, PatientDetailState> {

    constructor() {
        super();
        this.state = {
            userAccessToken: ''
        };
    }

    componentDidMount() {
        const token = localStorage.getItem('access_token') as string;
        console.log('fetched token: ', token);
        this.setState({userAccessToken: token});
    }

    buildPatientUrl() {
        const patient = this.props.location.state as Patient;
        if (!patient.sso) return;
        const { clinicId, userId, ssoPhraseLength, singleSignOnCode, singleSignOnUserIdVerify } = patient.sso;
        return SafeUrlAssembler('http://my.staging.dosespot.com')
            .segment('LoginSingleSignOn.aspx')
            .query({
                SingleSignOnClinicId: clinicId,
                SingleSignOnUserId: userId,
                SingleSignOnPhraseLength: ssoPhraseLength,
                SingleSignOnCode: singleSignOnCode,
                SingleSignOnUserIdVerify: singleSignOnUserIdVerify,
                Prefix: 'Mr',
                FirstName: 'Richard',
                MiddleName: '',
                LastName: 'Cornew',
                Suffix: '',
                DateOfBirth: '1/24/2001',
                Gender: 'Male',
                Address1: '716 Main Street',
                Address2: '@nd Floor',
                City: 'Waltham',
                State: 'Massachusetts',
                ZipCode: '02451',
                PrimaryPhone: '781 444-4444',
                PrimaryPhoneType: 'Home',
                PatientID: '393111'
            })
            .toString();
    }

    render() {
        const patient = this.props.location.state as Patient;
        const patientUrl = this.buildPatientUrl();
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
                        <ChatChannel channel={5961834829465699} userId={patient.id} patient={patient} accessToken={this.state.userAccessToken} />
                    </div>
                    <div className="patient-detail-info">
                        <div className="admin-dosespot-dialog-wrapper">
                            <iframe className="admin-dosespot-iframe" src={ patientUrl } ></iframe>
                        </div>
                    </div>
                </div>
            </div>     
        )
    }
}