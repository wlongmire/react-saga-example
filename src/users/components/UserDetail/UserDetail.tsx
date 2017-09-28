import * as React from 'react';
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
    dateOfBirth?: string;
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

    handleTextChange(e: any) {
        if (e.target) {
            console.log(e.target);
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
                                <SelectField floatingLabelText="Type">
                                    <MenuItem value={1} primaryText="Doctor" />
                                    <MenuItem value={4} primaryText="Ops" />
                                    <MenuItem value={6} primaryText="Patient" />
                                </SelectField>
                            </FormGroup>
                            <FormGroup>
                                <TextField 
                                    floatingLabelText="Email"
                                    value={this.state.email}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Password"
                                    type="password"
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
                                    value={this.state.middleName}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <DatePicker floatingLabelText="DOB" />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Social Security"
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
                                    value={this.state.credential}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Insurance ID"
                                    value={this.state.insuranceId}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Insurance Group #"
                                    value={this.state.insuranceGroup}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Drivers License"
                                    value={this.state.driversLicense}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Address Line 1"
                                    value={this.state.streetAddress1}
                                    onChange={this.handleTextChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Address Line 2"
                                    value={this.state.streetAddress2}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="City"
                                    value={this.state.city}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="State"
                                    value={this.state.state}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Zip Code"
                                    value={this.state.postalCode}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Country Code"
                                    value={this.state.countryCode}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Contact First Name"
                                    value={this.state.contactFirstName}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Contact Relationship"
                                    value={this.state.contactRelationship}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Contact Phone Number"
                                    value={this.state.contactPhone}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    floatingLabelText="Contact Email"
                                    value={this.state.contactEmail}
                                />
                            </FormGroup>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}