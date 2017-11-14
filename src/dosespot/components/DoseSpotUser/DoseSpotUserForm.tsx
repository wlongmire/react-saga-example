import * as React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as Moment from 'moment';

import { SingleSignOnInfo } from '../../../common';
import { stateList } from '../../../common/constants';

import './DoseSpotUserForm.css';

const SafeUrlAssembler = require('safe-url-assembler');

interface DoseSpotUserProps {
    singleSignOn: SingleSignOnInfo;
    fetchSingleSignOnInfo: () => void;
}

interface DoseSpotUserState {
    patientId?: number;
    prefix: string;
    first: string;
    middle: string;
    last: string;
    suffix: string;
    dateOfBirth: string;
    gender: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    primaryPhone: string;
    primaryPhoneType: string;
    phoneAdditional1?: string;
    phoneAdditionalType1?: string;
    phoneAdditional2?: string;
    phoneAdditionalType2?: string;
    medicalRecordNumber?: string;
    isDoseSpotOpen: boolean;
    iFrame?: any;

    patientIdError?: string;
    prefixError?: string;
    firstError?: string;
    middleError?: string;
    lastError?: string;
    suffixError?: string;
    dateOfBirthError?: string;
    genderError?: string;
    address1Error?: string;
    address2Error?: string;
    cityError?: string;
    stateError?: string;
    zipCodeError?: string;
    primaryPhoneError?: string;
    primaryPhoneTypeError?: string;
    phoneAdditional1Error?: string;
    phoneAdditionalType1Error?: string;
    phoneAdditional2Error?: string;
    phoneAdditionalType2Error?: string;
    medicalRecordNumberError?: string;

    hasErrors: boolean;
}

class DoseSpotUserForm extends React.Component<DoseSpotUserProps, DoseSpotUserState> {
    // TODO remove hardcode params
    state = {
        isDoseSpotOpen: false,
        patientId: 391653,
        prefix: '',
        first: 'Tad',
        middle: 'A',
        last: 'Dockendorf',
        suffix: '',
        dateOfBirth: '7/5/1975',
        gender: 'Male',
        medicalRecordNumber: '56098',
        address1: '32 Ranch Pass',
        address2: '',
        city: 'Cheyenne',
        state: 'WY',
        zipCode: '82001',
        primaryPhone: '3078553055',
        primaryPhoneType: 'Home',
        phoneAdditional1: '',
        phoneAdditionalType1: '',
        phoneAdditional2: '',
        phoneAdditionalType2: '',

        patientIdError: '',
        prefixError: '',
        firstError: '',
        middleError: '',
        lastError: '',
        suffixError: '',
        dateOfBirthError: '',
        genderError: '',
        address1Error: '',
        address2Error: '',
        cityError: '',
        stateError: '',
        zipCodeError: '',
        primaryPhoneError: '',
        primaryPhoneTypeError: '',
        phoneAdditional1Error: '',
        phoneAdditionalType1Error: '',
        phoneAdditional2Error: '',
        phoneAdditionalType2Error: '',
        medicalRecordNumberError: '',

        hasErrors: false
    };

    componentDidMount() {
        this.props.fetchSingleSignOnInfo();
    }

    handleGenderChange = (event: any, index: number, value: string) => {
        this.setState({ gender: value });
    }

    handlePrimaryPhoneTypeChange = (event: any, index: number, value: string) => {
        this.setState({ primaryPhoneType: value });
    }

    handlePrimaryPhoneTypeChange1 = (event: any, index: number, value: string) => {
        this.setState({ phoneAdditionalType1: value });
    }

    handlePrimaryPhoneTypeChange2 = (event: any, index: number, value: string) => {
        this.setState({ phoneAdditionalType2: value });
    }

    handleFieldChange = (event: any, newValue: string) => {
        this.setState({ [event.target.name]: newValue });
    }

    isPrefixValid(): boolean {
        if (this.state.prefix.length > 10) {
            this.setState({ prefixError: 'Prefix must not exceed 10 characters' });
            return false;
        }

        this.setState({ prefixError: ''});
        return true;
    }

    isFirstValid(): boolean {
        if (this.state.first.length === 0) {
            this.setState({ firstError: 'First name is required' });
            return false;
        }

        if (this.state.first.length > 35) {
            this.setState({ firstError: 'First name must not exceed 35 characters' });
            return false;
        }

        this.setState({ firstError: ''});
        return true;
    }

    isMiddleValid() {
        if (this.state.middle.length > 35) {
            this.setState({ middleError: 'Middle name must not exceed 35 characters' });
            return;
        }

        this.setState({ middleError: ''});
        return true;
    }

    isLastValid(): boolean {
        if (this.state.last.length === 0) {
            this.setState({ lastError: 'Last name is required' });
            return false;
        }

        if (this.state.last.length > 35) {
            this.setState({ lastError: 'Last name must not exceed 35 characters' });
            return false;
        }

        this.setState({ lastError: ''});
        return true;
    }

    isSuffixValid(): boolean {
        if (this.state.suffix.length > 10) {
            this.setState({ suffixError: 'Suffix must not exceed 10 characters' });
            return false;
        }

        this.setState({ suffixError: ''});
        return true;
    }

    isDobValid(): boolean {
        if (this.state.dateOfBirth.length === 0) {
            this.setState({ dateOfBirthError: 'Date of Birth is required'});
            return false;
        }

        let dob = Moment(this.state.dateOfBirth);

        if (!dob.isValid()) {
            this.setState({ dateOfBirthError: 'Invalid Date'});
            return false;
        }

        if (!dob.isBefore(Moment.now())) {
            this.setState({ dateOfBirthError: 'Invalid Date'});
            return false;
        }

        this.setState( { dateOfBirthError: ''});
        return true;
    }

    isGenderValid(): boolean {
        if (this.state.gender.length === 0) {
            this.setState({ genderError: 'Gender is required'});
            return false;
        }

        if (['Male', 'Female', 'Unknown'].indexOf(this.state.gender) === -1) {
            this.setState({ genderError: 'Gender must be Male, Female, or Unknown'});
            return false;
        }

        this.setState({ genderError: ''});
        return true;
    }

    isAddress1Valid(): boolean {
        if (this.state.address1.length === 0) {
            this.setState({ address1Error: 'Address Line 1 is required'});
            return false;
        }

        if (this.state.address1.length > 35) {
            this.setState({ address1Error: 'Address Line 1 must not exceed 35 characters'});
            return false;
        }

        this.setState({ address1Error: ''});
        return true;
    }

    isAddress2Valid(): boolean {
        if (this.state.address2.length > 35) {
            this.setState({ address2Error: 'Address Line 2 must not exceed 35 characters'});
            return false;
        }

        this.setState({ address2Error: ''});
        return true;
    }

    isCityValid(): boolean {
        if (this.state.city.length === 0) {
            this.setState({ cityError: 'City is required'});
            return false;
        }

        if (this.state.city.length > 35) {
            this.setState({ cityError: 'City must not exceed 35 characters'});
            return false;
        }

        this.setState({ cityError: ''});
        return true;
    }

    isStateValid(): boolean {
        if (this.state.state.length === 0) {
            this.setState({ stateError: 'State is required'});
            return false;
        }

        if (!stateList.indexOf(this.state.state)) {
            this.setState({ stateError: 'State must be a valid US State two letter abbreviation or Full Name.'});
            return false;
        }

        this.setState({ stateError: ''});
        return true;
    }

    isZipValid(): boolean {
        if (this.state.zipCode.length === 0) {
            this.setState({ zipCodeError: 'Zip code is required'});
            return false;
        }

        if (this.state.zipCode.length !== 5 && this.state.zipCode.length !== 10) {
            this.setState({ zipCodeError: 'Zip code must be 5 digits or 5 digits + 4'});
            return false;
        }

        this.setState({ zipCodeError: ''});
        return true;
    }

    isPhoneTypeValid(): boolean {
        if (this.state.primaryPhoneType.length === 0) {
            this.setState({ primaryPhoneTypeError: 'Phone type is required'});
            return false;
        }

        if (['Home', 'Work', 'Cell', 'Night', 'Primary'].indexOf(this.state.primaryPhoneType) === -1) {
            this.setState({ primaryPhoneTypeError: 'Phone type must be one of: Home, Work, Cell, Night, or Primary'});
            return false;
        }

        this.setState({ primaryPhoneTypeError: ''});
        return true;
    }

    isAreaCodeValid(): boolean {
        if (this.state.primaryPhone.length === 0) {
            this.setState({ primaryPhoneError: 'Phone number is required'});
            return false;
        }

        if (
            this.state.primaryPhone.length !== 10
            && this.state.primaryPhone.length !== 11
            && this.state.primaryPhone.length !== 12
        ) {
            this.setState({ primaryPhoneError: 'Invalid phone number'});
            return false;
        }

        this.setState({ primaryPhoneError: ''});
        return true;
    }

    validateForm(): boolean {
        if (!this.isPrefixValid()
            || !this.isFirstValid()
            || !this.isMiddleValid()
            || !this.isLastValid()
            || !this.isSuffixValid()
            || !this.isDobValid()
            || !this.isGenderValid()
            || !this.isAddress1Valid()
            || !this.isAddress2Valid()
            || !this.isCityValid()
            || !this.isStateValid()
            || !this.isZipValid()
            || !this.isPhoneTypeValid()
            || !this.isAreaCodeValid()
        ) {
            this.setState({ hasErrors: true });
            return false;
        } else {
            this.setState({ hasErrors: false });
            return true;
        }
    }

    handleSubmit = () => {
        if (!this.validateForm()) {
            return;
        }
        this.createUserRecord();
    }

    handleOpen() {
        if (!this.validateForm()) {
            return;
        }
        this.setState({ isDoseSpotOpen: true });

        // other
        // get sso 
        // use it to build patient url
        // chain it
    }

    handleClose() {
        this.setState({ isDoseSpotOpen: false });
    }

    handleLoad(e: any) {
        // TODO implement
    }

    savePatient() {
        if (localStorage.getItem('clinicId') === null) {
            localStorage.setItem('clinicId', '1141');
        }

        if (localStorage.getItem('clinicianId') === null) {
            localStorage.setItem('clinicianId', '44747');
        }

        const clinicId = Number(localStorage.getItem('clinicId'));
        const clinicianId = Number(localStorage.getItem('clinicianId'));
        const body = {
            prefix: this.state.prefix,
            first: this.state.first,
            middle: this.state.middle,
            last: this.state.last,
            suffix: this.state.suffix,
            dateOfBirth: this.state.dateOfBirth,
            gender: this.state.gender,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            primaryPhone: this.state.primaryPhone,
            primaryPhoneType: this.state.primaryPhoneType,
            phoneAdditional1: this.state.phoneAdditional1,
            phoneAdditionalType1: this.state.phoneAdditionalType1,
            phoneAdditional2: this.state.phoneAdditional2,
            phoneAdditionalType2: this.state.phoneAdditionalType2,
            patientID: this.state.patientId
        };

        // TODO replace with api call
        return fetch(`http://localhost:3001/clinics/${clinicId}/clinicians/${clinicianId}/patient`, {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: body
        }).then((response: any) => {
            if (response.ok) {
                return response.json();
            } else {
                // TODO remove
            }
        }).then((patient: any) => {
            this.setState({ patientId: patient.patientId});
        });
    }

    buildPatientUrl() {
        if (!this.props.singleSignOn) {
            return;
        }

        const { clinicId, userId, ssoPhraseLength,
            singleSignOnCode, singleSignOnUserIdVerify } = this.props.singleSignOn;
        return SafeUrlAssembler('http://my.staging.dosespot.com')
            .segment('LoginSingleSignOn.aspx')
            .query({
                SingleSignOnClinicId: clinicId,
                SingleSignOnUserId: userId,
                SingleSignOnPhraseLength: ssoPhraseLength,
                SingleSignOnCode: singleSignOnCode,
                SingleSignOnUserIdVerify: singleSignOnUserIdVerify,
                Prefix: this.state.prefix,
                FirstName: this.state.first,
                MiddleName: this.state.middle,
                LastName: this.state.last,
                Suffix: this.state.suffix,
                DateOfBirth: this.state.dateOfBirth,
                Gender: this.state.gender,
                Address1: this.state.address1,
                Address2: this.state.address2,
                City: this.state.city,
                State: this.state.state,
                ZipCode: this.state.zipCode,
                PrimaryPhone: this.state.primaryPhone,
                PrimaryPhoneType: this.state.primaryPhoneType,
                PhoneAdditional1: this.state.phoneAdditional1,
                PhoneAdditionaType1: this.state.phoneAdditionalType1,
                PhoneAdditional2: this.state.phoneAdditional2,
                PhoneAdditionalType2: this.state.phoneAdditionalType2,
                PatientID: this.state.patientId
            })
            .toString();
    }

    buildRefillsErrorsUrl() {
        const { clinicId, userId, ssoPhraseLength,
            singleSignOnCode, singleSignOnUserIdVerify } = this.props.singleSignOn;
        return SafeUrlAssembler('http://my.staging.dosespot.com')
            .segment('LoginSingleSignOn.aspx')
            .query({
                SingleSignOnClinicId: clinicId,
                SingleSignOnUserId: userId,
                SingleSignOnPhraseLength: ssoPhraseLength,
                SingleSignOnCode: singleSignOnCode,
                SingleSignOnUserIdVerify: singleSignOnUserIdVerify,
                RefillsErrors: 1
            })
            .toString();
    }

    createUserRecord() {
        // TODO change with saga function
        const url = this.buildPatientUrl();
        fetch(url, {
            method: 'POST',
            cache: 'no-cache',
            mode: 'no-cors'
        }).then((response: any) => {
            // TODO implement
        })
        .catch((err: Error) => {
            // TODO implement
        });
    }
    
    render() {
        const patientUrl = this.buildPatientUrl();
        const actions = [
            <RaisedButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ];
        return (
            <form>
                <div className="test-dosespot-form">
                    <TextField 
                        hintText="Prefix" 
                        name="prefix" 
                        errorText={this.state.prefixError}
                        onChange={this.handleFieldChange} 
                        value={this.state.prefix}
                    />

                    <TextField 
                        hintText="First" 
                        name="first" 
                        errorText={this.state.firstError}
                        onChange={this.handleFieldChange} 
                        value={this.state.first}
                    />

                    <TextField 
                        hintText="Middle" 
                        name="middle" 
                        errorText={this.state.middleError}
                        onChange={this.handleFieldChange} 
                        value={this.state.middle}
                    />

                    <TextField 
                        hintText="Last" 
                        name="last" 
                        errorText={this.state.lastError}
                        onChange={this.handleFieldChange} 
                        value={this.state.last}
                    />

                    <TextField 
                        hintText="Suffix" 
                        name="suffix" 
                        errorText={this.state.suffixError}
                        onChange={this.handleFieldChange} 
                        value={this.state.suffix}
                    />
                </div>
                <div>
                    <TextField 
                        hintText="Date of Birth" 
                        name="dateOfBirth" 
                        errorText={this.state.dateOfBirthError}
                        onChange={this.handleFieldChange} 
                        value={this.state.dateOfBirth}
                    />
                </div>
                <div>
                    <SelectField 
                        floatingLabelText="Gender"
                        value={this.state.gender}
                        errorText={this.state.genderError}
                        onChange={this.handleGenderChange}
                    >
                        <MenuItem value="Male" primaryText="Male" />
                        <MenuItem value="Female" primaryText="Female" />
                        <MenuItem value="Unknown" primaryText="Unknown" />
                    </SelectField>

                    <TextField 
                        hintText="Medical Record Number" 
                        errorText={this.state.medicalRecordNumberError}
                        onChange={this.handleFieldChange} 
                        value={this.state.medicalRecordNumber}
                    />
                </div>
                <div>
                    <TextField 
                        hintText="Address Line 1" 
                        name="address1" 
                        errorText={this.state.address1Error}
                        onChange={this.handleFieldChange} 
                        value={this.state.address1}
                    />
                </div>
                <div>
                    <TextField 
                        hintText="Address Line 2" 
                        name="address2" 
                        errorText={this.state.address2Error}
                        onChange={this.handleFieldChange} 
                        value={this.state.address2}
                    />
                </div>
                <div>
                    <TextField 
                        hintText="City" 
                        name="city" 
                        errorText={this.state.cityError}
                        onChange={this.handleFieldChange} 
                        value={this.state.city}
                    />

                    <TextField 
                        hintText="State" 
                        name="state" 
                        errorText={this.state.stateError}
                        onChange={this.handleFieldChange} 
                        value={this.state.state}
                    />

                    <TextField 
                        hintText="Zip Code" 
                        name="zipCode" 
                        errorText={this.state.zipCodeError}
                        onChange={this.handleFieldChange} 
                        value={this.state.zipCode}
                    />
                </div>
                <div>
                    <SelectField 
                        floatingLabelText="Primary Phone Type"
                        value={this.state.primaryPhoneType}
                        errorText={this.state.primaryPhoneTypeError}
                        onChange={this.handlePrimaryPhoneTypeChange}
                    >
                        <MenuItem value="Home" primaryText="Home" />
                        <MenuItem value="Cell" primaryText="Cell" />
                        <MenuItem value="Work" primaryText="Work" />
                        <MenuItem value="Beeper" primaryText="Beeper"/>
                    </SelectField>

                    <TextField 
                        hintText="Primary Phone" 
                        name="primaryPhone" 
                        errorText={this.state.primaryPhoneError}
                        onChange={this.handleFieldChange} 
                        value={this.state.primaryPhone}
                    />
                </div>
                <div>
                    <SelectField 
                        floatingLabelText="Additional Phone Type 1"
                        errorText={this.state.phoneAdditional1Error}
                        value={this.state.phoneAdditionalType1}
                        onChange={this.handlePrimaryPhoneTypeChange1}
                    >
                        <MenuItem value="" primaryText="" />
                        <MenuItem value="Home" primaryText="Home" />
                        <MenuItem value="Cell" primaryText="Cell" />
                        <MenuItem value="Work" primaryText="Work" />
                        <MenuItem value="Beeper" primaryText="Beeper" />
                    </SelectField>

                    <TextField 
                        hintText="Additional Phone 1" 
                        name="phoneAdditional1" 
                        errorText={this.state.phoneAdditional1Error}
                        onChange={this.handleFieldChange} 
                        value={this.state.phoneAdditional1}
                    />
                </div>
                <div>
                    <SelectField 
                        floatingLabelText="Primary Phone Type 2"
                        value={this.state.phoneAdditionalType2}
                        errorText={this.state.phoneAdditionalType2Error}
                        onChange={this.handlePrimaryPhoneTypeChange2}
                    >
                        <MenuItem value="" primaryText="" />
                        <MenuItem value="Home" primaryText="Home" />
                        <MenuItem value="Cell" primaryText="Cell" />
                        <MenuItem value="Work" primaryText="Work" />
                        <MenuItem value="Beeper" primaryText="Beeper" />
                    </SelectField>
                    
                    <TextField 
                        hintText="Primary Phone 2" 
                        name="phoneAdditional2" 
                        errorText={this.state.phoneAdditional2Error}
                        onChange={this.handleFieldChange} 
                        value={this.state.phoneAdditional2}
                    />
                </div>
                <div>
                    {/* <TextField 
                        hintText="Patient Id" 
                        name="patientId" 
                        errorText={this.state.patientIdError}
                        onChange={this.handleFieldChange} 
                        value={this.state.patientId} /> */}
                </div>
                <div>
                    <RaisedButton label="Save" primary={true} style={{margin: 12}} onClick={this.handleSubmit} />
                    <RaisedButton label="Open" secondary={true} style={{margin: 12}} onClick={this.handleOpen} />
                </div>
                <Dialog
                    title="DoseSpot"
                    modal={true}
                    actions={actions}
                    bodyStyle={{
                        padding: 0
                    }}
                    style={{
                        maxWidth: null
                    }}
                    contentStyle={{
                        maxWidth: 1000
                    }}
                    open={this.state.isDoseSpotOpen}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <div className="admin-dosespot-dialog-wrapper">
                        <iframe className="admin-dosespot-iframe" src={patientUrl}>{/**/}</iframe>
                    </div>
                </Dialog>
            </form>
        );
    }
}

export default DoseSpotUserForm;