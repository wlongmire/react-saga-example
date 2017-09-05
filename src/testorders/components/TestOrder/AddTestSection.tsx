import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {
    DropDownTemplate, 
    TextInputTemplate,
    PanelTemplate
} from '../../../common/UIComponents';
import DatePicker from 'material-ui/DatePicker';
let FileInput = require('react-file-input');

import './AddTestSection.css';

const btnStyle = {
    backgroundColor: '#f84445'
}

const style = {
    backgroundColor: '#f84445',
    marginBottom: '1em',
}

const stubbedData = {
    'patient': [
        {value:1, primaryText:"Pete Patient"},
        {value:2, primaryText:"Doctor Dre"}
    ],
    'status': [
        {value:1, primaryText:"New"},
        {value:2, primaryText:"Scheduled"},
        {value:3, primaryText:"Process Visit"},
        {value:4, primaryText:"Finalized"},
        {value:5, primaryText:"Cancelled"}
    ],
    'clinics': [
        {value:1, primaryText:"Nomad LifeCo, 79 Madison Ave, New York, NY10016"},
    ],

}

interface S {
    payload : object;
}
interface P {
    closeTestsCard: () => void;
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

export class AddTestSection extends React.Component<P, S>{
    constructor(){
        super()
        this.state = {
            payload : {}
        }
    }

    _handleSubmit = () => {
        console.log('Here')
    }

    onPlainTextDropDownChange = (name:string) => (v:number) =>{
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [name]: getNamedValue(name, v)
            }
        }))
    }

    onTableTemplateChange = (templateName:string) => (items: object[]) => {
        this.setState(prevState => ({
            payload : {
                ...prevState.payload,
                [templateName]: items
            }
        }))
    }

    handleChange = (event:any) => {
        console.log('Selected file:', event.target.files[0]);
    }

    render(){
        return(
            <form id='test-section' onSubmit={this._handleSubmit}>
            <span className="test-add-new"> Add New Test</span>
            <DropDownTemplate
                title="Status"
                dataArray={
                   stubbedData.status
                }
                onChange={this.onPlainTextDropDownChange('status')}
            />
            <DatePicker 
                name="date" 
                hintText="Date Created"
                style={{
                    textAlign:"left",
                    position:"relative",
                    left:'2em',
                    marginBottom:'.5em'
                    }}
                />
            <TextInputTemplate
                name="order-name"
                title="Order Name"
                multiLine={false}
                rows={1}
                defaultValue={"Sinus Infection Check"}
            />
            
            <TextInputTemplate
                name="patient-name"
                title="Patient Name"
                multiLine={false}
                rows={1}
                defaultValue={"Pete Patient"}
            />
       
             <PanelTemplate
                onChange={this.onTableTemplateChange('panels')}
                headerTitle="Panels"     
            />

            <TextInputTemplate
                name="order-number"
                title="Order Number"
                multiLine={false}
                rows={1}
                defaultValue={"#120-12"}
            />
            <p className="checkbox-title">Priority</p>
            <div className="priority-type-section">
                <div className="priority_type"> 
                    <span className="label">Routine</span>
                    <Checkbox className="checkbox-value"/>
                </div>
                <div className="priority_type"> 
                    <span className="label">Priority</span>
                    <Checkbox className="checkbox-value"/>
                </div>
            </div>
            <DatePicker 
                name="date" 
                hintText="Collection Date"
                style={{
                    textAlign:"left",
                    position:"relative",
                    left:'2em',
                    marginBottom:'.5em'
                    }}
            />

            <TextInputTemplate
                name="collection-location"
                title="Collection Location"
                multiLine={false}
                rows={1}
                hintText={"Type Something ..."}
            />

            <DropDownTemplate
                title="Location"
                dataArray={
                   stubbedData.clinics
                }
                onChange={this.onPlainTextDropDownChange("location")}
            />

            <TextInputTemplate
                name="testing-supervisor"
                title="Testing Supervisor"
                multiLine={false}
                rows={1}
                defaultValue={"Shirley Swirl"}
            />

            <FileInput name="Add attachment"
                   accept=".png,.gif"
                   placeholder="Add attachment"
                   className="inputClass"
                   onChange={this.handleChange} />

            <TextInputTemplate
                name="diagnosis"
                title="Diagnosis"
                multiLine={false}
                rows={1}
                defaultValue={"ICD_10"}
            />

            <TextInputTemplate
                name="public-note"
                title="Public Note"
                multiLine={true}
                rows={2}
                hintText={"Type Something ..."}
            />
            <br/>
            <RaisedButton 
                onClick={this.props.closeTestsCard}
                label="cancel"
            />
            <RaisedButton 
                secondary={true}
                type="submit" 
                buttonStyle={btnStyle} 
                style={style} 
                label="save"
            />

           
            </form>
        )
    }
}

