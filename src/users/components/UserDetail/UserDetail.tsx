import * as React from 'react';
// import { User, PatientUser, DoctorUser, OpsUser } from '../../reducer';
import { User } from '../../reducer';
import { RouteComponentProps } from 'react-router-dom';
import * as _ from 'lodash';
import Avatar from 'material-ui/Avatar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import { FormGroup } from '../../../common/UIComponents';

import './UserDetail.css';

export interface UserDetailProps extends RouteComponentProps<{}> {}

export interface UserDetailState {
    id?: number;
    type?: string;
    email?: string;
    password?: string;
    firstName?: string;
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

    lifecoStartDate?: string;
    insuranceId?: string;
    insuranceGroup?: string;
    rxBin?: string;
    rxPcn?: string;
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
}

export class UserDetail extends React.Component<UserDetailProps, UserDetailState> {

    constructor() {
        super();
        this.state = {
            isNew: true,
            isDirty: false
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);
    }

    componentDidMount() {
        // if location.state.user - (load from user)
        // if not location.stat.user but id in url (fetch from api)
        // if neither then new

        const { user } = this.props.location.state;

        if (user) {
            this.loadFromUser(user);
            return;
        }

        const { params } = this.props.match;

        if (params['userId']) {
            this.loadFromServer(Number(params['userId']));
            return;
        }
        
        this.setState({ isNew: true });
    }

    loadFromUser(user: User) {
        const zipped = _.zipObject(_.keys(user), _.values(user))
        this.setState(zipped);
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

    handleSelectChange(e: any, index: number, value: any) {
        this.setState({type: this.getRoleText(Number(value))});
        console.log(value);
    }

    handleSave(e: any) {
        e.preventDefault();

        // switch (this.state.type) {
        //     case 'patient':
        //         let patient = new PatientUser();
        //         patient.id = this.state.id ? this.state.id : undefined;
        //     case 'doctor':
        //         let doctor = new DoctorUser();
        //         break;
        //     case 'ops':
        //         let ops = new OpsUser();
        //         break;
        // }

        if (this.state.id) {
            // update
            
        } else {
            // create
        }
        // console.log(this.state);
    }

    getRoleText(id: number): string {
        switch (id) {
            case 1:
                return 'doctor';
            case 4:
                return 'ops';
            case 6:
                return 'patient';
            default:
                return '';
        }
    }

    getRoleId(type: string): Number {
        switch(type) {
            case 'doctor':
                return 1;
            case 'patient':
                return 6;
            case 'ops':
                return 4;
            default:
                return -1;
        }
    }

    render() {
        return (
            <div className="content-container">
                <div className="content-container-title-bar">
                    <span className="inline-title">{ this.state.id ? 'Edit User' : 'Create User'}</span>
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
                        <form>
                            <FormGroup>
                                <SelectField 
                                    floatingLabelText="Type"
                                    value={this.getRoleId(this.state.type ? this.state.type : '')}
                                    onChange={this.handleSelectChange}
                                >
                                    <MenuItem value={1} primaryText="Doctor" />
                                    <MenuItem value={4} primaryText="Ops" />
                                    <MenuItem value={6} primaryText="Patient" />
                                </SelectField>
                            </FormGroup>
                            <FormGroup>
                                <TextField 
                                    floatingLabelText="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="First Name"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Middle Name"
                                    name="middleName"
                                    value={this.state.middleName}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Last Name"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <DatePicker 
                                    floatingLabelText="DOB" 
                                    value={this.state.dateOfBirth}
                                    onChange={this.handleDobChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Social Security"
                                    name="ssn"
                                    value={this.state.ssn}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <SelectField floatingLabelText="Sex">
                                    <MenuItem value={1} primaryText="Male" />
                                    <MenuItem value={2} primaryText="Female" />
                                    <MenuItem value={3} primaryText="Unknown" />
                                </SelectField>
                            </FormGroup>
                            <FormGroup>
                                <SelectField floatingLabelText="Gender">
                                    <MenuItem value={1} primaryText="Male" />
                                    <MenuItem value={2} primaryText="Female" />
                                    <MenuItem value={3} primaryText="Unknown" />
                                </SelectField>
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="NPI"
                                    name="npi"
                                    value={this.state.npi}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <SelectField floatingLabelText="Doctor Type">
                                    <MenuItem value={1} primaryText="Male" />
                                    <MenuItem value={2} primaryText="Female" />
                                    <MenuItem value={3} primaryText="Unknown" />
                                </SelectField>
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Credential"
                                    name="credential"
                                    value={this.state.credential}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Insurance ID"
                                    name="insuranceId"
                                    value={this.state.insuranceId}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Insurance Group #"
                                    name="insuranceGroup"
                                    value={this.state.insuranceGroup}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Drivers License"
                                    name="driversLicense"
                                    value={this.state.driversLicense}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Address Line 1"
                                    name="streetAddress1"
                                    value={this.state.streetAddress1}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Address Line 2"
                                    name="streetAddress2"
                                    value={this.state.streetAddress2}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="City"
                                    name="city"
                                    value={this.state.city}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="State"
                                    name="state"
                                    value={this.state.state}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Zip Code"
                                    name="postalCode"
                                    value={this.state.postalCode}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Country Code"
                                    name="countryCod3"
                                    value={this.state.countryCode}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Contact First Name"
                                    name="contactFirstName"
                                    value={this.state.contactFirstName}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Contact Relationship"
                                    name="contactRelationship"
                                    value={this.state.contactRelationship}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Contact Phone Number"
                                    name="contactPhone"
                                    value={this.state.contactPhone}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Contact Email"
                                    name="contactEmail"
                                    value={this.state.contactEmail}
                                />
                            </FormGroup>
                            <button className="user-save-button" onClick={this.handleSave}>
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}