import * as React from 'react';
import './styles.css';
import {
    CustomDropDown,
    CustomTextInput,
    DropDownItem
} from '../../../common/UIComponents';

import { CustomDropDownProps } from '../../../common/UIComponents';
import DatePicker from 'material-ui/DatePicker';

const userTypes = [
    { value:6, primaryText: 'Patient' },
    { value:1, primaryText: 'Doctor' },
    { value:4, primaryText: 'Ops' },
];

interface StringDropDown { new (props: CustomDropDownProps): CustomDropDown};
const StringDropDown = CustomDropDown as StringDropDown;

// const genderOptions = [
//     { value:'male', display: 'Male' },
//     { value:'female', display: 'Female' },
//     { value:'unknown', display: 'Unknown' },
// ];
// const states = [
//     { value:'patient', display: 'Patient' },
// ];
// const doctorTypes = [
//     { value:'primary_care', display: 'Primary Care' },
//     { value:'gynecologist', display: 'Gynecologist' },
// ];

// const stubbedData = {
//     'userType': [
//         {value:1, primaryText:"Patient"},
//         {value:2, primaryText:"Doctor"},
//         {value:3, primaryText:"Ops"}
//     ],
//     'gender': [
//         {value:1, primaryText:"Male"},
//         {value:2, primaryText:"Female"},
//     ],
//     'states': [
//         {value:1, primaryText:"Illinois"},
//         {value:2, primaryText:"Michigan"},
//     ],
//     'doctorType': [
//         {value:1, primaryText:"Primary Care"},
//         {value:2, primaryText:"Gyna"},
//     ]
// }

const underlineStyle = {
    display:"none"
}

// const getNamedValue = (name:string, v?:number) => {
//     let theArrays = Object.keys(stubbedData);

//     let targetArray = theArrays.filter((s:any)=>{
//         return s === name
//     });

//     let arrayVal = stubbedData[targetArray[0]];
    
//     let actualValue = arrayVal.filter((a:any) => {
//         return a.value === v
//     });

//     return actualValue[0].primaryText;
// }

interface AddUserState{
    payload : object;
    showPatientForm?: boolean,
    showOpsForm?: boolean,
    showDoctorForm?: boolean,
    showConfirmationModal?:boolean
}

export class AddUserPage extends React.Component<{}, AddUserState>{
    constructor(){
        super()
        this.state = {
            payload: {},
            showPatientForm: false,
            showDoctorForm: false,
            showOpsForm: false,
            showConfirmationModal : false
        }
        this.onUserTypeChanged = this.onUserTypeChanged.bind(this);
    }

    componentDidMount(){
        this.checkUserType()
    }

    onUserTypeChanged = (item: DropDownItem) => {
        console.log('item', item);
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                userType: item.value,
            }
        }));

        this.setState({
            showDoctorForm: item.value === 1,
            showOpsForm: item.value === 4,
            showPatientForm: item.value === 6
        });
    }

    onPlainTextDropDownChange = (item: DropDownItem) => {
        console.log('item', item);

        // this.setState(prevState => ({
        //     payload: {
        //         ...prevState.payload,
        //         [name]: getNamedValue(name, v)
        //     }
        // }));

        // if (getNamedValue(name,v) === 'Patient'){
        //     this.setState({
        //         showPatientForm: true,
        //         showDoctorForm: false,
        //         showOpsForm: false
        //     });
        // } else if(getNamedValue(name,v) === "Doctor"){
        //     this.setState({
        //         showDoctorForm: true,
        //         showPatientForm: false,
        //         showOpsForm: false
        //     });
        //  } else if (getNamedValue(name,v) === "Ops"){
        //     this.setState({
        //         showOpsForm: true,
        //         showDoctorForm: false,
        //         showPatientForm: false
        //     });
        //  }
    }

    checkUserType = () => {
        if(this.state.payload['userType'] === undefined){
           this.setState({
               showPatientForm: true
           })
        } else{
            console.log('Not Undefined')
        }
    }

    toggleDeleteModal = () => {
        this.setState({
            showConfirmationModal: !this.state.showConfirmationModal
        })
    }

    render(){
        return(
            <div>
               <span className="add-user-title">Create User</span>

               <div className="add-user-section">
                   <div className="avatar-section">
                       <span className="title">User Avatar</span>
                       <img className="user-create-avatar" src="https://lh3.googleusercontent.com/-njqKGqlGM-E/AAAAAAAAAAI/AAAAAAAAAAA/APJypA3rJq9kiuH22Eh7YF1y3667Ji1RXA/s64-c-mo/photo.jpg"/>
                       <button className="replace-avatar-btn">Replace Avatar</button>
                       <div className="delete-title" onClick={this.toggleDeleteModal}>DELETE
                            {this.state.showConfirmationModal &&
                            <section id="confirm-modal"> 
                                <div className="modal-header">Confirm Delete</div>
                                <div className="modal-body">

                                <div>Are you sure you want to delete? This is an irreversible action.</div>
                                <div>
                                    <span className="confirm">Delete</span>
                                    <span className="cancel" onClick={this.toggleDeleteModal}>Cancel </span>
                                </div>
                                </div>
                            </section>
                            }
                       </div>
                    </div>
                    <form className="add-user-form">
                    <CustomDropDown
                        title="Type"
                        itemSource={userTypes}
                        onChange={this.onUserTypeChanged}
                    />
                    {this.state.showPatientForm && !this.state.showDoctorForm && !this.state.showOpsForm &&
                    <div>
                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="email"
                        hintText="barack@life.co"
                        floatingText="Email"
                        title=""
                    />
                    <br/>
                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="password"
                        hintText="Password"
                        floatingText="Password"
                        title=""
                    />
                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="firstName"
                        hintText="First Name"
                        floatingText="First Name"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="middleName"
                        hintText="Last Name"
                        floatingText="Middle Name"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="lastName"
                        hintText="Last Name"
                        floatingText="Last Name"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="email"
                        hintText="barack@life.co"
                        floatingText="Email"
                        title=""
                    />

                    <DatePicker hintText="DOB" underlineStyle={underlineStyle} style={{
                        width:"100%",
                        position:"relative",
                        borderBottom:"1px solid black",
                        marginTop: "1em"
                    }}/>


                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="insuranceId"
                        hintText="Insurance ID"
                        floatingText="Insurance ID"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="InsuranceGroupNo"
                        hintText="Insurance Group #"
                        floatingText="Insurance Group #"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="driversLicense"
                        hintText="Drivers License"
                        floatingText="Drivers License"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="socialSecurity"
                        hintText="Social Security #"
                        floatingText="Social Security"
                        title=""
                    />

                    {/* <CustomDropDown
                        title=""
                        dataArray={
                        stubbedData.gender
                        }
                        onChange={this.onPlainTextDropDownChange('gender')}
                    /> */}

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="credentials"
                        hintText="Credentials"
                        floatingText="Credentials"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="streetAddress"
                        hintText="Street Address"
                        floatingText="Street Address"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="addressLine"
                        hintText="Address Line 2"
                        floatingText="Address Line 2"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="city"
                        hintText="City"
                        floatingText="City"
                        title=""
                    />

                    {/* <CustomDropDown
                        title=""
                        dataArray={
                        stubbedData.states
                        }
                        onChange={this.onPlainTextDropDownChange('states')}
                    /> */}

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="zip"
                        hintText="ZIP Code"
                        floatingText="ZIP Code"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="countryCode"
                        hintText="Country Code"
                        floatingText="Country Code"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="contactFirstName"
                        hintText="Contact First Name"
                        floatingText="Contact First Name"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="contactRelationship"
                        hintText="Contact Relationship"
                        floatingText="Contact Relationship"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="contactPhone"
                        hintText="Contact Phone Number"
                        floatingText="Contact Phone Number"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="contactEmail"
                        hintText="Contact Email"
                        floatingText="Contact Email"
                        title=""
                    />
                    </div>
                    }
                    {
                        this.state.showDoctorForm && !this.state.showPatientForm && !this.state.showOpsForm &&
                        <div>
                        <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="email"
                        hintText="barack@life.co"
                        floatingText="Email"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="password"
                        hintText="Password"
                        floatingText="Password"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="firstName"
                        hintText="First Name"
                        floatingText="First Name"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="middleName"
                        hintText="Last Name"
                        floatingText="Middle Name"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="lastName"
                        hintText="Last Name"
                        floatingText="Last Name"
                        title=""
                    />


                    <DatePicker hintText="DOB" underlineStyle={underlineStyle} style={{
                        width:"100%",
                        position:"relative",
                        borderBottom:"1px solid black",
                        marginTop: "1em"
                    }}/>

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="socialSecurity"
                        hintText="Social Security #"
                        floatingText="Social Security"
                        title=""
                    />

                    {/* <CustomDropDown
                        title=""
                        dataArray={
                        stubbedData.gender
                        }
                        onChange={this.onPlainTextDropDownChange('gender')}
                    /> */}

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="npi"
                        hintText="NPI"
                        floatingText="NPI"
                        title=""
                    />

                    {/* <CustomDropDown
                        title=""
                        dataArray={
                        stubbedData.doctorType
                        }
                        onChange={this.onPlainTextDropDownChange('doctorType')}
                    /> */}

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="credentials"
                        hintText="Credentials"
                        floatingText="Credentials"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="streetAddress"
                        hintText="Street Address"
                        floatingText="Street Address"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="addressLine"
                        hintText="Address Line 2"
                        floatingText="Address Line 2"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="city"
                        hintText="City"
                        floatingText="City"
                        title=""
                    />

                    {/* <CustomDropDown
                        title=""
                        dataArray={
                        stubbedData.states
                        }
                        onChange={this.onPlainTextDropDownChange('states')}
                    /> */}

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="zip"
                        hintText="ZIP Code"
                        floatingText="ZIP Code"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="countryCode"
                        hintText="Country Code"
                        floatingText="Country Code"
                        title=""
                    />

                        </div>

                    }
                    {
                        this.state.showOpsForm && !this.state.showDoctorForm && !this.state.showPatientForm &&
                        <div>
                        <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="email"
                        hintText="barack@life.co"
                        floatingText="Email"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="password"
                        hintText="Password"
                        floatingText="Password"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="firstName"
                        hintText="First Name"
                        floatingText="First Name"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="middleName"
                        hintText="Last Name"
                        floatingText="Middle Name"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="lastName"
                        hintText="Last Name"
                        floatingText="Last Name"
                        title=""
                    />

                    <DatePicker hintText="DOB" underlineStyle={underlineStyle} style={{
                        width:"100%",
                        position:"relative",
                        borderBottom:"1px solid black",
                        marginTop: "1em"
                    }}/>

                    {/* <CustomDropDown
                        title=""
                        dataArray={
                        stubbedData.gender
                        }
                        onChange={this.onPlainTextDropDownChange('gender')}
                    />
                     */}
                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="streetAddress"
                        hintText="Street Address"
                        floatingText="Street Address"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="addressLine"
                        hintText="Address Line 2"
                        floatingText="Address Line 2"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="city"
                        hintText="City"
                        floatingText="City"
                        title=""
                    />

                    {/* <CustomDropDown
                        title=""
                        dataArray={
                        stubbedData.states
                        }
                        onChange={this.onPlainTextDropDownChange('states')}
                    /> */}

                        </div>
                    }

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="zip"
                        hintText="ZIP Code"
                        floatingText="ZIP Code"
                        title=""
                    />

                    <CustomTextInput
                        multiLine={false}
                        rows={1}
                        name="countryCode"
                        hintText="Country Code"
                        floatingText="Country Code"
                        title=""
                    />
                    <button className="add-user-btn">
                        Save
                    </button>
                </form>
            </div>
        </div>
    )}
}