import * as React from 'react';
import './styles.css';
import {Navigation} from '../../../navigation/components/Navigation';
import {
    CustomDropDown,
    CustomTextInput,

} from '../../../common/UIComponents';


import DatePicker from 'material-ui/DatePicker';


const stubbedData = {
    'userType': [
        {value:1, primaryText:"Patient"},
        {value:2, primaryText:"Doctor"},
        {value:3, primaryText:"Ops"}
    ],
    'gender': [
        {value:1, primaryText:"Male"},
        {value:2, primaryText:"Female"},
    ],
    'states': [
        {value:1, primaryText:"Illinois"},
        {value:2, primaryText:"Michigan"},
    ]
}

const underlineStyle = {
    display:"none"
}

const getNamedValue = (name:string, v?:number) => {
    let theArrays = Object.keys(stubbedData);
    let targetArray = theArrays.filter((s:any)=>{
        return s === name
    })
    let arrayVal = stubbedData[targetArray[0]];
    let actualValue = arrayVal.filter((a:any) =>{
        return a.value === v
    })

    return actualValue[0].primaryText;

}

interface S{
    payload : object
}
export class AddUserPage extends React.Component<{}, S>{
    constructor(){
        super()
        this.state = {
            payload: {}
        }
    }

    onPlainTextDropDownChange = (name:string) => (v:number) =>{
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [name]: getNamedValue(name, v)
            }
        }))
    }

    render(){
        return(
            <div>
               <Navigation/> 
               <span className="add-user-title">Create User</span>
               <div className="add-user-section">
                   <div className="avatar-section">
                       <span className="title">User Avatar</span>
                       <img className="user-create-avatar" src="https://lh3.googleusercontent.com/-njqKGqlGM-E/AAAAAAAAAAI/AAAAAAAAAAA/APJypA3rJq9kiuH22Eh7YF1y3667Ji1RXA/s64-c-mo/photo.jpg"/>
                       <button className="replace-avatar-btn">Replace Avatar</button>
                       <span className="delete-title">DELETE</span>
                    </div>

                    <form className="add-user-form">
                    <CustomDropDown
                        title="Type"
                        dataArray={
                        stubbedData.userType
                        }
                        onChange={this.onPlainTextDropDownChange('userType')}
                    />
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

                    <CustomDropDown
                        title=""
                        dataArray={
                        stubbedData.gender
                        }
                        onChange={this.onPlainTextDropDownChange('gender')}
                    />

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

                    <CustomDropDown
                        title=""
                        dataArray={
                        stubbedData.states
                        }
                        onChange={this.onPlainTextDropDownChange('states')}
                    />

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

                    <button
                    type="submit"
                    className="add-user-btn"
                    >
                    Save
                    </button>

                    </form>
                </div>
            </div>
        )
    }
}