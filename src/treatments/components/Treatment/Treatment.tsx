import * as React from 'react';
import { connect } from 'react-redux';
import { fetchSingleSignOnInfo } from '../../actions';
import { SingleSignOnInfo } from '../../model';

const SafeUrlAssembler = require('safe-url-assembler');

import './styles.css';

interface TreatmentsComponentState {
    patientId?: number,
    prefix?: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    suffix?: string,
    dateOfBirth: string,
    gender: string,
    medicalRecordNumber?: string,
    address1: string,
    address2?: string,
    city: string,
    state: string,
    zip: string,
    primaryPhone: string,
    primaryPhoneType: string,
    phoneAdditional1?: string,
    phoneAdditionaType1?: string,
    phoneAdditional2?: string,
    phoneAdditionalType2?: string,
    height?: number,
    weight?: number,
    heightMetric?: number,
    weightMetric?: number
}

interface TreatmentsComponentProps {
    singleSignOnInfo: SingleSignOnInfo,
    fetchSingleSignOnInfo: () => void
}

class TreatmentsComponent extends React.Component<TreatmentsComponentProps, TreatmentsComponentState> {
    constructor() {
        super();
        this.state = {
            prefix: undefined,
            firstName: '',
            middleName: undefined,
            lastName: '',
            suffix: undefined,
            dateOfBirth: '',
            gender: '',
            medicalRecordNumber: undefined,
            address1: '',
            address2: undefined,
            city: '',
            state: '',
            zip: '',
            primaryPhone: '',
            primaryPhoneType: '',
            phoneAdditional1: undefined,
            phoneAdditionaType1: undefined,
            phoneAdditional2: undefined,
            phoneAdditionalType2: undefined,
            height: undefined,
            weight: undefined,
            heightMetric: undefined,
            weightMetric: undefined
        };

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchSingleSignOnInfo();
    }

    buildUrl() {
        //http://my.staging.dosespot.com/LoginSingleSignOn.aspx?SingleSignOnClinicId=1141&SingleSignOnUserId=28486&SingleSignOnPhraseLength=32&SingleSignOnCode=HCNhBCIV0aErjCQvLmD0mSZgZTgvhvw0QMTxKhC6%2BEDuRDsKplVS4vl9thnV%2B8FlkjBCUA1%2FK2iAXM5Nf%2FykyPDJFl0ZISToUHq9%2B%2Bs4HuvmS%2BdQK%2FAJJg&SingleSignOnUserIdVerify=10LlyTQo4bZnuNeFfJ5AkbTpaAA6QIMMgg766Zrqa8%2FsjjLYpUIqN8MXGH52SsLEEEvQK9SYmgmT%2BNSk%2FC%2FNVg
        const { clinicId, userId, ssoPhraseLength, singleSignOnCode, singleSignOnUserIdVerify } = this.props.singleSignOnInfo;
        return SafeUrlAssembler('http://my.staging.dosespot.com')
            .segment('LoginSingleSignOn.aspx')
            .query({
                SingleSignOnClinicId: clinicId,
                SingleSignOnUserId: userId,
                SingleSignOnPhraseLength: ssoPhraseLength,
                SingleSignOnCode: singleSignOnCode,
                SingleSignOnUserIdVerify: singleSignOnUserIdVerify,
                FirstName: 'Rick',
                LastName: 'Johnson',
                DateOfBirth: '1/24/2001',
                Gender: 'Male',
                Address1: '716 Main Street',
                Address2: '2nd Floor',
                City: 'Waltham',
                State: 'Massachusetts',
                ZipCode: '02451',
                PrimaryPhone: '781 777-7777',
                PrimaryPhoneType: 'Home',
                PhoneAdditional1: '781 444-4444',
                PhoneAdditionaType1: 'Cell',
            })
            .toString();
    }

    createUserRecord() {
        const url = this.buildUrl();
        fetch(url, {
            method: 'POST',
            cache: 'default'
        }).then((response) => {
            console.log('response:', response);
        })
    }

    onClick() {
        this.createUserRecord();
    }

    render() {
        // todo 1: fix 401 unauthorized on server (cors?)
        // todo 2: don't load this until after we have sso info
        if (!this.props.singleSignOnInfo) return(<div></div>);
        // const url = this.buildUrl();
        // console.log('url', url);

        return(
            <div>
                {/* <iframe className="dosespot-base" width="80%" height="750px" src={ url }></iframe> */}
                <button onClick={this.onClick}>Run!</button>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    console.log('state: ', state);
    return {
        singleSignOnInfo: state.treatments.singleSignOnInfo
    };
}

export const Treatment = connect(mapStateToProps, {
    fetchSingleSignOnInfo
}) (TreatmentsComponent);