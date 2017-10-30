import * as React from 'react';
import * as _ from 'lodash';
import Snackbar from 'material-ui/Snackbar';
import Avatar from 'material-ui/Avatar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { createUser, updateUser, clearSnackbarMessage } from '../../actions';
import { FormGroup, User, PatientUser, DoctorUser, OpsUser, GlobalState, SnackbarMessage } from '../../../common';
import { RouteComponentProps } from 'react-router-dom';

import './UserDetail.css';

export interface UserDetailProps extends RouteComponentProps<{}> {
    snackbarMessage: SnackbarMessage;
    createUser: (user: User) => void;
    updateUser: (user: User) => void;
    clearSnackbarMessage: () => void;
}

export interface UserDetailState {
    id?: number;
    type?: string;
    email?: string;
    password?: string;
    firstName?: string;
    preferredName?: string;
    middleName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    gender?: string;
    sex?: string;
    streetAddress1?: string;
    streetAddress2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    countryCode?: string;
    primaryPhone?: string;
    primaryPhoneType?: string;
    avatarId?: number;
    primaryChannel?: number;

    lifecoStartDate?: Date;
    insuranceId?: string;
    insuranceGroup?: string;
    rxBin?: string;
    rxPcn?: string;
    rxGroup?: string;
    ssn?: string;
    driversLicense?: string;
    pharmacyId?: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactRelationship?: string;
    contactPhone?: string;
    contactEmail?: string;

    npi?: string;
    specialty?: string;
    credential?: string;
    clinicianId?: number;

    dosespotPatientId?: number

    isNew: boolean;
    isDirty: boolean;
    
    snackbarOpen: boolean;
    snackbarMessage?: SnackbarMessage;

    passwordErrorText?: string;
    pwdHasMinimumLength?:boolean;
    pwdHasLowerCaseCharacter?:boolean;
    pwdHasUpperCaseCharacter?:boolean;
    pwdHasSpecialCharacter?:boolean;
}

const snackbarContentStyle = {
    height: 100,
    fontSize: 14,
    textTransform: 'capitalize'
};

export class _UserDetail extends React.Component<UserDetailProps, UserDetailState> {

    constructor() {
        super();
        this.state = {
            isNew: true,
            isDirty: false,
            snackbarMessage: undefined,
            snackbarOpen: false,
            pwdHasMinimumLength: false,
            pwdHasLowerCaseCharacter: false,
            pwdHasUpperCaseCharacter: false,
            pwdHasSpecialCharacter: false,
            passwordErrorText:'Password must be 8 characters long, have at least 1 capital letter and at least 1 number.'
        };

        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handlePhoneTypeChange = this.handlePhoneTypeChange.bind(this);
        this.handleSexChange = this.handleSexChange.bind(this);
        this.handleSpecialtyChange = this.handleSpecialtyChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleDoctorSave = this.handleDoctorSave.bind(this);
        this.handleOpsSave = this.handleOpsSave.bind(this);
        this.handlePatientSave = this.handlePatientSave.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state) {
            const { user } = this.props.location.state;

            if (user) {
                this.loadFromUser(user);
                return;
            }
        }

        const { params } = this.props.match;

        if (params['userId']) {
            const userIdParam = params['userId'];
            
            if (userIdParam != 'add') {
                this.loadFromServer(Number(params['userId']));
                return;
            }
        }
        
        this.setState({ isNew: true, type: 'patient' });
    }

    componentWillReceiveProps(props: UserDetailProps) {
        if (props.snackbarMessage) {
            this.setState({
                snackbarMessage: props.snackbarMessage,
                snackbarOpen: true
            });
        }
    }

    createDoctorUserFromState(): DoctorUser {
        const user = new DoctorUser();
        user.id = this.state.id ? this.state.id : undefined;
        user.avatarId = this.state.avatarId ? this.state.avatarId : undefined;
        user.email = this.state.email ? this.state.email : '';
        user.password = this.state.password ? this.state.password : undefined;
        user.primaryPhone = this.state.primaryPhone ? this.state.primaryPhone : undefined;
        user.primaryPhoneType = this.state.primaryPhoneType ? this.state.primaryPhoneType : undefined;
        user.firstName = this.state.firstName ? this.state.firstName : '';
        user.middleName = this.state.middleName ? this.state.middleName : undefined;
        user.lastName = this.state.lastName ? this.state.lastName : '';
        user.dateOfBirth = this.state.dateOfBirth ? this.state.dateOfBirth : undefined;
        user.ssn = this.state.ssn ? this.state.ssn : undefined;
        user.sex = this.state.sex ? this.state.sex : undefined;
        user.npi = this.state.npi ? this.state.npi : '';
        user.specialty = this.state.specialty ? this.state.specialty : undefined;
        user.credential = this.state.credential ? this.state.credential : undefined;
        user.clinicianId = this.state.clinicianId ? this.state.clinicianId : undefined;
        user.streetAddress1 = this.state.streetAddress1 ? this.state.streetAddress1 : '';
        user.streetAddress2 = this.state.streetAddress2 ? this.state.streetAddress2 : undefined;
        user.city = this.state.city ? this.state.city : '';
        user.state = this.state.state ? this.state.state : '';
        user.postalCode = this.state.postalCode ? this.state.postalCode : '';
        user.countryCode = this.state.countryCode ? this.state.countryCode : undefined;
        return user;
    }

    createOpsUserFromState(): OpsUser {
        const user = new OpsUser()
        user.id = this.state.id ? this.state.id : undefined;
        user.avatarId = this.state.avatarId ? this.state.avatarId : undefined;
        user.email = this.state.email ? this.state.email : '';
        user.password = this.state.password ? this.state.password : undefined;
        user.primaryPhone = this.state.primaryPhone ? this.state.primaryPhone : undefined;
        user.primaryPhoneType = this.state.primaryPhoneType ? this.state.primaryPhoneType : undefined;
        user.firstName = this.state.firstName ? this.state.firstName : '';
        user.middleName = this.state.middleName ? this.state.middleName : undefined;
        user.lastName = this.state.lastName ? this.state.lastName : '';
        user.dateOfBirth = this.state.dateOfBirth ? this.state.dateOfBirth : undefined;
        user.sex = this.state.sex ? this.state.sex : undefined;
        user.streetAddress1 = this.state.streetAddress1 ? this.state.streetAddress1 : '';
        user.streetAddress2 = this.state.streetAddress2 ? this.state.streetAddress2 : undefined;
        user.city = this.state.city ? this.state.city : '';
        user.state = this.state.state ? this.state.state : '';
        user.postalCode = this.state.postalCode ? this.state.postalCode : '';
        user.countryCode = this.state.countryCode ? this.state.countryCode : undefined;
        return user;
    }

    createPatientUserFromState(): PatientUser {
        const user = new PatientUser();

        user.id = this.state.id ? this.state.id : undefined;
        user.type = this.state.type ? this.state.type : '';
        user.email = this.state.email ? this.state.email : '';
        user.password = this.state.password ? this.state.password : '';
        user.firstName = this.state.firstName ? this.state.firstName : '';
        user.preferredName = this.state.preferredName ? this.state.preferredName : '';
        user.middleName = this.state.middleName ? this.state.middleName : undefined;
        user.lastName = this.state.lastName ? this.state.lastName : '';
        user.dateOfBirth = this.state.dateOfBirth ? this.state.dateOfBirth : undefined;
        user.gender = this.state.gender ? this.state.gender : '';
        user.sex = this.state.sex ? this.state.sex : undefined;
        user.streetAddress1 = this.state.streetAddress1 ? this.state.streetAddress1 : '';
        user.streetAddress2 = this.state.streetAddress2 ? this.state.streetAddress2 : undefined;
        user.city = this.state.city ? this.state.city : '';
        user.state = this.state.state ? this.state.state : '';
        user.postalCode = this.state.postalCode ? this.state.postalCode : '';
        user.countryCode = this.state.countryCode ? this.state.countryCode: undefined;
        user.primaryPhone = this.state.primaryPhone ? this.state.primaryPhone : '';
        user.primaryPhoneType = this.state.primaryPhoneType ? this.state.primaryPhoneType : '';
        user.avatarId = this.state.avatarId ? this.state.avatarId : -1;

        user.insuranceId = this.state.insuranceId ? this.state.insuranceId : undefined;
        user.insuranceGroup = this.state.insuranceGroup ? this.state.insuranceGroup : undefined;
        user.rxBin = this.state.rxBin ? this.state.rxBin : undefined;
        user.rxPcn = this.state.rxPcn ? this.state.rxPcn : undefined;
        user.rxGroup = this.state.rxGroup ? this.state.rxGroup : undefined;
        user.ssn = this.state.ssn ? this.state.ssn : undefined;
        user.driversLicense = this.state.driversLicense ? this.state.driversLicense : undefined;
        user.pharmacyId = this.state.pharmacyId ? this.state.pharmacyId : undefined;
        user.contactFirstName = this.state.contactFirstName ? this.state.contactFirstName : undefined;
        user.contactLastName = this.state.contactLastName ? this.state.contactLastName : undefined;
        user.contactRelationship = this.state.contactRelationship ? this.state.contactRelationship : undefined;
        user.contactPhone = this.state.contactPhone ? this.state.contactPhone : undefined;
        user.contactEmail = this.state.contactEmail ? this.state.contactEmail : undefined;
    
        user.npi = this.state.npi ? this.state.npi : undefined;
        user.specialty = this.state.specialty ? this.state.specialty : undefined;
        user.credential = this.state.credential ? this.state.credential : undefined;
        user.clinicianId = this.state.clinicianId ? this.state.clinicianId : undefined;
    
        user.dosespotPatientId = this.state.dosespotPatientId ? this.state.dosespotPatientId : undefined;

        return user;
    }

    loadFromUser(user: User) {
        const zippedUser = _.zipObject(_.keysIn(user), _.valuesIn(user));
        this.setState(zippedUser);
        this.setState({ isNew: false });
    }

    loadFromServer(id: number) {
        // todo: fetch from server
        this.setState({ isNew: false });
    }

    handleDobChange(e: any, date: Date) {
        this.setState({
            dateOfBirth: date
        })
    }

    handleTextChange(e: any) {
        if (e.target) {
            this.setState({ [e.target.name] : e.target.value });
        }
    }

    _checkPasswordHasMinimumLength = (value:string) => {
        this.setState({
            pwdHasMinimumLength: (value.length >= 8)
        });
    }

    _checkPasswordHasUpperCaseCharacter = (value:string) => {
        let upperCaseRegex =  /^(?=.*[A-Z]).+$/;
        this.setState({
            pwdHasUpperCaseCharacter: upperCaseRegex.test(value)
        });
    }

    _checkPasswordHasLowerCaseCharacter = (value:string) => {
        let lowerCaseRegex = /^(?=.*[a-z]).+$/;
        this.setState({
            pwdHasLowerCaseCharacter: lowerCaseRegex.test(value)
        });
    }

    _checkPasswordHasSpecialCharacters = (value:string) =>{
        let specialCharacterRegex = /^(?=.*[0-9_\W]).+$/;
        this.setState({
            pwdHasSpecialCharacter: specialCharacterRegex.test(value)
        });
    }

    handlePasswordChange = (e: any) => {
        this._checkPasswordHasMinimumLength(e.target.value);
        this._checkPasswordHasLowerCaseCharacter(e.target.value);
        this._checkPasswordHasSpecialCharacters(e.target.value);
        this._checkPasswordHasUpperCaseCharacter(e.target.value);
        
    }

    handleTypeChange(e: any, index: number, value: any) {
        this.setState({type: value});
    }

    handleSexChange(e: any, index: number, value: any) {
        this.setState({sex: value});
    }

    handleGenderChange(e: any, index: number, value: any) {
        this.setState({gender: value});
    }

    handlePhoneTypeChange(e: any, index: number, value: any) {
        this.setState({primaryPhoneType: value});
    }

    handleSnackbarClose(reason: string) {
        this.setState({
            snackbarMessage: undefined,
            snackbarOpen: false
        }, () => {
            this.props.clearSnackbarMessage();
        });
    }

    handleSpecialtyChange(e: any, index: number, value: any) {
        this.setState({specialty: value});
    }

    handleStateChange(e: any, index: number, value: any) {
        this.setState({state: value});
    }

    handleDoctorSave(e: any) {
        e.preventDefault();
        const doctor = this.createDoctorUserFromState();

        if (!doctor.isValid()) return;
        
        if (doctor.isNew()) {
            this.props.createUser(doctor);
        } else {
            this.props.updateUser(doctor);
        }
    }

    handleOpsSave(e: any) {
        e.preventDefault();
        const ops = this.createOpsUserFromState();

        if (!ops.isValid()) return;
            
        if (ops.isNew()) {
            this.props.createUser(ops);
        } else {
            this.props.updateUser(ops);
        }
    }

    handlePatientSave(e: any) {
        e.preventDefault();
        const patient = this.createPatientUserFromState();
        
        if (!patient.isValid()) return;
            
        if (patient.isNew()) {
            this.props.createUser(patient);
        } else {
            this.props.updateUser(patient);
        }
    }

    setUserFieldsFromState(user: User) {
        user.id = this.state.id ? this.state.id : undefined;
        user.type = this.state.type ? this.state.type : '';
        user.email = this.state.email ? this.state.email : '';
        user.password = this.state.password ? this.state.password : '';
        user.firstName = this.state.firstName ? this.state.firstName : '';
        user.preferredName = this.state.preferredName ? this.state.preferredName : '';
        user.middleName = this.state.middleName ? this.state.middleName : undefined;
        user.lastName = this.state.lastName ? this.state.lastName : '';
        user.dateOfBirth = this.state.dateOfBirth ? this.state.dateOfBirth : undefined;
        user.gender = this.state.gender ? this.state.gender : '';
        user.sex = this.state.sex ? this.state.sex : undefined;
        user.streetAddress1 = this.state.streetAddress1 ? this.state.streetAddress1 : '';
        user.streetAddress2 = this.state.streetAddress2 ? this.state.streetAddress2 : undefined;
        user.city = this.state.city ? this.state.city : '';
        user.state = this.state.state ? this.state.state : '';
        user.postalCode = this.state.postalCode ? this.state.postalCode : '';
        user.countryCode = this.state.countryCode ? this.state.countryCode: undefined;
        user.primaryPhone = this.state.primaryPhone ? this.state.primaryPhone : '';
        user.primaryPhoneType = this.state.primaryPhoneType ? this.state.primaryPhoneType : '';
        user.avatarId = this.state.avatarId ? this.state.avatarId : -1;

        user.lifecoStartDate = this.state.lifecoStartDate ? this.state.lifecoStartDate : undefined;
        user.insuranceId = this.state.insuranceId ? this.state.insuranceId : undefined;
        user.insuranceGroup = this.state.insuranceGroup ? this.state.insuranceGroup : undefined;
        user.rxBin = this.state.rxBin ? this.state.rxBin : undefined;
        user.rxPcn = this.state.rxPcn ? this.state.rxPcn : undefined;
        user.rxGroup = this.state.rxGroup ? this.state.rxGroup : undefined;
        
        user.ssn = this.state.ssn ? this.state.ssn : undefined;
        user.driversLicense = this.state.driversLicense ? this.state.driversLicense : undefined;
        user.pharmacyId = this.state.pharmacyId ? this.state.pharmacyId : undefined;
        user.contactFirstName = this.state.contactFirstName ? this.state.contactFirstName : undefined;
        user.contactLastName = this.state.contactLastName ? this.state.contactLastName : undefined;
        user.contactRelationship = this.state.contactRelationship ? this.state.contactRelationship : undefined;
        user.contactPhone = this.state.contactPhone ? this.state.contactPhone : undefined;
        user.contactEmail = this.state.contactEmail ? this.state.contactEmail : undefined;
    
        user.npi = this.state.npi ? this.state.npi : undefined;
        user.specialty = this.state.specialty ? this.state.specialty : undefined;
        user.credential = this.state.credential ? this.state.credential : undefined;
        user.clinicianId = this.state.clinicianId ? this.state.clinicianId : undefined;
    
        user.dosespotPatientId = this.state.dosespotPatientId ? this.state.dosespotPatientId : undefined;
    }

    renderRequiredLabel() {
        return (
            <div className="help-text">* Required</div>
        )
    }

    renderTypeField(required?: boolean) {
        return (
            <FormGroup>
                <SelectField 
                    floatingLabelText="Type"
                    value={this.state.type}
                    onChange={this.handleTypeChange}
                >
                    <MenuItem value="doctor" primaryText="Doctor" />
                    <MenuItem value="ops" primaryText="Ops" />
                    <MenuItem value="patient" primaryText="Patient" />
                </SelectField>
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderEmailField(required?: boolean) {
        return (
            <FormGroup>
                <TextField 
                    floatingLabelText="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderPrimaryPhoneField(required?: boolean) {
        return (
            <FormGroup>
                <TextField 
                    floatingLabelText="Phone"
                    name="primaryPhone"
                    value={this.state.primaryPhone}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderPrimaryPhoneTypeField(required?: boolean) {
        return (
            <FormGroup>
                <SelectField 
                    floatingLabelText="Phone Type"
                    value={this.state.primaryPhoneType}
                    onChange={this.handlePhoneTypeChange}
                >
                    <MenuItem value="" primaryText="" />
                    <MenuItem value="home" primaryText="Home" />
                    <MenuItem value="cell" primaryText="Cell" />
                    <MenuItem value="work" primaryText="Work" />
                    <MenuItem value="other" primaryText="Other" />
                </SelectField>
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderFirstNameField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderPreferredNameField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Preferred Name"
                    name="preferredName"
                    value={this.state.preferredName}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderMiddleNameField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Middle Name"
                    name="middleName"
                    value={this.state.middleName}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderLastNameField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderDobField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="DOB"
                    name="dateOfBirth"
                    value={this.state.dateOfBirth ? this.state.dateOfBirth.toString() : undefined}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderGenderField(required?: boolean) {
        return (
            <FormGroup>
                <SelectField 
                    floatingLabelText="Gender"
                    value={this.state.gender}
                    onChange={this.handleGenderChange}
                >
                    <MenuItem value="male" primaryText="Male" />
                    <MenuItem value="female" primaryText="Female" />
                    <MenuItem value="unknown" primaryText="Unknown" />
                </SelectField>
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderSexField(required?: boolean) {
        return (
            <FormGroup>
                <SelectField 
                    floatingLabelText="Sex"
                    value={this.state.sex}
                    onChange={this.handleSexChange}
                >
                    <MenuItem value="male" primaryText="Male" />
                    <MenuItem value="female" primaryText="Female" />
                    <MenuItem value="unknown" primaryText="Unknown" />
                </SelectField>
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderAddressLine1Field(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Address Line 1"
                    name="streetAddress1"
                    value={this.state.streetAddress1}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderAddressLine2Field(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Address Line 2"
                    name="streetAddress2"
                    value={this.state.streetAddress2}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderCityField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderStateField(required?: boolean) {
        return (
            <FormGroup>
                <SelectField
                    floatingLabelText="State"
                    value={this.state.state}
                    onChange={this.handleStateChange}
                >
                    <MenuItem value="AL" primaryText="AL" />
                    <MenuItem value="AK" primaryText="AK" />
                    <MenuItem value="AZ" primaryText="AZ" />
                    <MenuItem value="AR" primaryText="AR" />
                    <MenuItem value="CA" primaryText="CA" />
                    <MenuItem value="CO" primaryText="CO" />
                    <MenuItem value="CT" primaryText="CT" />
                    <MenuItem value="DE" primaryText="DE" />
                    <MenuItem value="FL" primaryText="FL" />
                    <MenuItem value="GA" primaryText="GA" />
                    <MenuItem value="HI" primaryText="HI" />
                    <MenuItem value="ID" primaryText="ID" />
                    <MenuItem value="IL" primaryText="IL" />
                    <MenuItem value="IN" primaryText="IN" />
                    <MenuItem value="IA" primaryText="IA" />
                    <MenuItem value="KS" primaryText="KS" />
                    <MenuItem value="KY" primaryText="KY" />
                    <MenuItem value="LA" primaryText="LA" />
                    <MenuItem value="ME" primaryText="ME" />
                    <MenuItem value="MD" primaryText="MD" />
                    <MenuItem value="MA" primaryText="MA" />
                    <MenuItem value="MI" primaryText="MI" />
                    <MenuItem value="MN" primaryText="MN" />
                    <MenuItem value="MS" primaryText="MS" />
                    <MenuItem value="MO" primaryText="MO" />
                    <MenuItem value="MT" primaryText="MT" />
                    <MenuItem value="NE" primaryText="NE" />
                    <MenuItem value="NV" primaryText="NV" />
                    <MenuItem value="NH" primaryText="NH" />
                    <MenuItem value="NJ" primaryText="NJ" />
                    <MenuItem value="NM" primaryText="NM" />
                    <MenuItem value="NY" primaryText="NY" />
                    <MenuItem value="NC" primaryText="NC" />
                    <MenuItem value="ND" primaryText="ND" />
                    <MenuItem value="OH" primaryText="OH" />
                    <MenuItem value="OK" primaryText="OK" />
                    <MenuItem value="OR" primaryText="OR" />
                    <MenuItem value="PA" primaryText="PA" />
                    <MenuItem value="RI" primaryText="RI" />
                    <MenuItem value="SC" primaryText="SC" />
                    <MenuItem value="SD" primaryText="SD" />
                    <MenuItem value="TN" primaryText="TN" />
                    <MenuItem value="TX" primaryText="TX" />
                    <MenuItem value="UT" primaryText="UT" />
                    <MenuItem value="VT" primaryText="VT" />
                    <MenuItem value="VA" primaryText="VA" />
                    <MenuItem value="WA" primaryText="WA" />
                    <MenuItem value="WV" primaryText="WV" />
                    <MenuItem value="WI" primaryText="WI" />
                    <MenuItem value="WY" primaryText="WY" />
                </SelectField>
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderPostalCodeField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Postal Code"
                    name="postalCode"
                    value={this.state.postalCode}
                    onChange={this.handleTextChange}
                />
                {required &&
                        this.renderRequiredLabel()
                    }
            </FormGroup>
        )
    }

    renderCountryCodeField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Country Code"
                    name="countryCode"
                    value={this.state.countryCode}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderDoctorTypeField(required?: boolean) {
        return (
            <FormGroup>
                <SelectField 
                    floatingLabelText="Doctor Type"
                    value={this.state.specialty}
                    onChange={this.handleSpecialtyChange}
                >
                    <MenuItem value="primary_care" primaryText="Primary Care" />
                    <MenuItem value="gynecologist" primaryText="Gynecologist" />
                </SelectField>
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderLifecoStartDateField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="LifeCo Start Date"
                    name="lifecoStartDate"
                    value={this.state.lifecoStartDate ? this.state.lifecoStartDate.toString() : undefined}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderInsuranceIdField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Insurance ID"
                    name="insuranceId"
                    value={this.state.insuranceId}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )    
    }

    renderInsuranceGroupField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Insurance Group #"
                    name="insuranceGroup"
                    value={this.state.insuranceGroup}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderRxBinField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Rx Bin"
                    name="rxBin"
                    value={this.state.rxBin}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderRxPcnField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Rx PCN"
                    name="rxPcn"
                    value={this.state.rxPcn}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderRxGroupField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Rx Group"
                    name="rxGroup"
                    value={this.state.rxGroup}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderSSNField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Social Security"
                    name="ssn"
                    value={this.state.ssn}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderDriverLicenseField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Drivers License"
                    name="driversLicense"
                    value={this.state.driversLicense}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderPharmacyIdField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Pharmacy ID"
                    name="pharmacyId"
                    value={this.state.pharmacyId}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderContactFirstNameField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Contact First Name"
                    name="contactFirstName"
                    value={this.state.contactFirstName}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderContactLastNameField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Contact Last Name"
                    name="contactLastName"
                    value={this.state.contactLastName}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderContactRelationshipField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Contact Relationship"
                    name="contactRelationship"
                    value={this.state.contactRelationship}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderTestField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="myTest Field"
                    name="myTest"
                    value={this.state.contactRelationship}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderContactPhoneField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Contact Phone Number"
                    name="contactPhone"
                    value={this.state.contactPhone}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderContactEmailField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Contact Email"
                    name="contactEmail"
                    value={this.state.contactEmail}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderNPIField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="NPI"
                    name="npi"
                    value={this.state.npi}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderSpecialtyField(required?: boolean) {
        <FormGroup>
            <SelectField 
                floatingLabelText="Doctor Type"
                value={this.state.specialty}
                onChange={this.handleSpecialtyChange}
            >
                <MenuItem value="primary_care" primaryText="Primary Care" />
                <MenuItem value="gynecologist" primaryText="Gynecologist" />
            </SelectField>
            {required &&
                this.renderRequiredLabel()
            }
        </FormGroup>
    }

    renderCredentialField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Credential"
                    name="credential"
                    value={this.state.credential}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderClincianIdField(required?: boolean) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Clinician ID"
                    name="clinicianId"
                    value={this.state.clinicianId}
                    onChange={this.handleTextChange}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderPasswordField(required?: boolean, errorText?: string) {
        return (
            <FormGroup>
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    errorText={errorText}
                />
                {required &&
                    this.renderRequiredLabel()
                }
            </FormGroup>
        )
    }

    renderSaveButton(saveFn: (e: any) => void) {
        return (
            <button className="user-form-save-button" onClick={saveFn}>
                Save
            </button>
        )
    }

    renderDoctorForm() {
        let passwordError = !this.state.pwdHasLowerCaseCharacter || !this.state.pwdHasMinimumLength || !this.state.pwdHasUpperCaseCharacter || !this.state.pwdHasSpecialCharacter;

        return (
            <form>
                { this.renderTypeField(true) }
                { this.renderEmailField(true) }
                { this.state.isNew &&
                    this.renderPasswordField(true, passwordError ? this.state.passwordErrorText : undefined)
                }
                { this.renderFirstNameField(true) }
                { this.renderMiddleNameField() }
                { this.renderLastNameField(true) }
                { this.renderPrimaryPhoneField(true) }
                { this.renderPrimaryPhoneTypeField(true) }
                { this.renderDobField(true) }
                { this.renderSSNField() }
                { this.renderSexField(true) }
                { this.renderNPIField() }
                { this.renderDoctorTypeField(true) }
                { this.renderSpecialtyField() }
                { this.renderCredentialField() }
                { this.renderAddressLine1Field() }
                { this.renderAddressLine2Field() }
                { this.renderCityField() }
                { this.renderStateField() }
                { this.renderPostalCodeField() }
                { this.renderCountryCodeField() }
                { this.renderSaveButton(this.handleDoctorSave) }
            </form>
        )
    }

    renderOpsForm() {
        let passwordError = !this.state.pwdHasLowerCaseCharacter || !this.state.pwdHasMinimumLength || !this.state.pwdHasUpperCaseCharacter || !this.state.pwdHasSpecialCharacter;

        return (
            <form>
                { this.renderTypeField(true) }
                { this.renderEmailField(true) }
                { this.state.isNew &&
                    this.renderPasswordField(true, passwordError ? this.state.passwordErrorText : undefined)
                }
                { this.renderFirstNameField(true) }
                { this.renderMiddleNameField() }
                { this.renderLastNameField(true) }
                { this.renderPrimaryPhoneField(true) }
                { this.renderPrimaryPhoneTypeField(true) }
                { this.renderDobField(true) }
                { this.renderSexField(true) }
                { this.renderAddressLine1Field() }
                { this.renderAddressLine2Field() }
                { this.renderCityField() }
                { this.renderStateField() }
                { this.renderPostalCodeField() }
                { this.renderCountryCodeField() }
                { this.renderSaveButton(this.handleOpsSave) }
            </form>
        )
    }

    renderPatientForm() {
        let passwordError = !this.state.pwdHasLowerCaseCharacter || !this.state.pwdHasMinimumLength || !this.state.pwdHasUpperCaseCharacter || !this.state.pwdHasSpecialCharacter;
        
        return (
            <form>
                { this.renderTypeField(true) }
                { this.renderEmailField(true) }
                { this.state.isNew &&
                    this.renderPasswordField(true, passwordError ? this.state.passwordErrorText : undefined)
                }
                { this.renderFirstNameField(true) }
                { this.renderPreferredNameField() }
                { this.renderMiddleNameField() }
                { this.renderLastNameField(true) }
                { this.renderPrimaryPhoneField(true) }
                { this.renderPrimaryPhoneTypeField(true) }
                { this.renderDobField(true) }
                { this.renderInsuranceIdField() }
                { this.renderInsuranceGroupField() }
                { this.renderRxBinField() }
                { this.renderRxPcnField() }
                { this.renderRxGroupField() }
                { this.renderLifecoStartDateField() }
                { this.renderDriverLicenseField() }
                { this.renderSSNField() }
                { this.renderSexField(true) }
                { this.renderGenderField() }
                { this.renderCredentialField() }
                { this.renderPharmacyIdField() }
                { this.renderAddressLine1Field() }
                { this.renderAddressLine2Field() }
                { this.renderCityField() }
                { this.renderStateField() }
                { this.renderPostalCodeField() }
                { this.renderCountryCodeField() }
                { this.renderContactFirstNameField() }
                { this.renderContactLastNameField() }
                { this.renderContactRelationshipField() }
                { this.renderContactPhoneField() }
                { this.renderContactEmailField() }
                { this.renderSaveButton(this.handlePatientSave) }
            </form>
        )
    }

    render() {       
        return (
            <div className="content-container">
                <div className="content-container-title-bar">
                    <span className="inline-title">{ this.state.id ? 'Edit User' : 'Create User' }</span>
                </div>
                <div className="user-detail-body">
                    <div className="user-avatar-editor">
                        <span className="user-avatar-title">User Avatar</span>
                        <Avatar 
                            size={100}
                            backgroundColor="#f84445"
                            color="#ffffff">
                            {
                                (this.state.firstName
                                ? this.state.firstName.substr(0,1) 
                                : (this.state.lastName ? this.state.lastName.substr(0,1) : ''))
                            }
                        </Avatar>
                        <button className="user-avatar-replace-button">Replace Avatar</button>
                        <a className="user-avatar-delete-link">Delete</a>
                    </div>
                    <div className="user-form-container">
                        { this.state.type == 'ops' &&
                            this.renderOpsForm()
                        }
                        { this.state.type == 'doctor' &&
                            this.renderDoctorForm()
                        }
                        { this.state.type == 'patient' &&
                            this.renderPatientForm()
                        }
                    </div>
                </div>
                {this.state.snackbarMessage &&
                    <Snackbar
                        open={this.state.snackbarOpen}
                        message={this.state.snackbarMessage}
                        onRequestClose={this.handleSnackbarClose}
                        contentStyle={snackbarContentStyle}
                        autoHideDuration={5000}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        snackbarMessage: state.users.snackbarMessage ? state.users.snackbarMessage.message : ''
    };
};

export const UserDetail =  connect<{}, UserDetailProps, {}>(mapStateToProps, { 
    clearSnackbarMessage,
    createUser, 
    updateUser 
})(_UserDetail);