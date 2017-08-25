import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import TableInputs from '../common/TableInputs';
import TableTemplate from '../common/TableTemplate';
import DropDownTemplate from '../common/DropDownTemplate';
import ChipCollection from '../common/Chips';
import * as visitActions from '../../actions';
import {  Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';




import './Visit.css';

const style = {
  backgroundColor: '#f84445',
  width: '70%',
  marginBottom: '1em',
}

const btnStyle = {
    backgroundColor: '#f84445'
}

interface VisitDrawerProps {
    className?: string;
    createVisit?: (visit:any) => void;
}

interface VisitDrawerState{
    value: number;
    payload : any;
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
    'assignee':[
        {value:1, primaryText:"Venus"},
    ],
    'cases': [
        {value:1, primaryText:"Cough"},
        {value:2, primaryText:"Headache"},
    ],
    'complaints': [
        {value:1, primaryText:"Complaint A"},
        {value:2, primaryText:"Complaint B"},
        {value:3, primaryText:"Complaint C"},
        {value:4, primaryText:"Complaint D"},
    ],
    'diagnosis': [
        {value:1, primaryText:"Diagnosis A"},
        {value:2, primaryText:"Diagnosis  B"},
        {value:3, primaryText:"Diagnosis  C"},
        {value:4, primaryText:"Diagnosis  D"},
    ]


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
 

class VisitDrawerComponent extends React.Component<VisitDrawerProps, VisitDrawerState>{
    constructor(){
        super()
        this.handleSubmitVisit = this.handleSubmitVisit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 1,
            payload: {}
        }
    }

    handleSubmitVisit(event:any){
        event.preventDefault();
        let _payload = {};
        let fields = ['doctor','labName', 'street-address', 'unit',
        'ak', 'zip-code', 'date', 'time', 'subjective', 'objective',
        'assessments', 'next-steps'];
        fields.forEach((field:string)=>{
            _payload[field] = event.target[field].value
        })

        let currentPayload = Object.assign({}, this.state.payload);
        let newPayload = Object.assign({}, currentPayload, _payload)
        // newPayload has all the necessary info for the dispatch.
        if(this.props.createVisit) {this.props.createVisit(newPayload)};
        console.log(newPayload)

    }

    handleChange = (event:any, index:number, value:number) => this.setState({value});
    onChipDropDownChange = (name:string) => (v:number, s:string) => {
        let st = Object.assign({}, this.state.payload);
        if(!st[name]) st[name] = [];
        st[name].push(s);
        this.setState({
            payload: st
        })
    };


    onPlainTextDropDownChange = (name:string) => (v:number) =>{
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [name]: getNamedValue(name, v)
            }
        }))
    }

    onTableInputChange = (vitalsArray:object[]) => {
        this.setState(prevState =>({
            payload : {
                ...prevState.payload,
                vitals : vitalsArray
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

    render(){
        console.log(this.state, 'State hapa')
        return(
            <form id="visit-drawer" onSubmit={this.handleSubmitVisit} className={this.props.className}> 
            <DropDownTemplate
                title="Status"
                dataArray={
                   stubbedData.status
                }
                onChange={this.onPlainTextDropDownChange('status')}
            />
            <DropDownTemplate
                title="Assignee"
                dataArray={
                   stubbedData.assignee
                }
                onChange={this.onPlainTextDropDownChange('assignee')}
            />
            <DropDownTemplate
                title="Patient"
                dataArray={
                   stubbedData.patient
                }
                onChange={this.onPlainTextDropDownChange('patient')}
            />
            <div>
            <ChipCollection
                items={this.state.payload.cases || [] } // event render from this.state.payload.tests
            />
            <DropDownTemplate
                title="Add Case"
                dataArray={
                   stubbedData.cases
                }
                onChange={(value, text) => this.onChipDropDownChange('cases')(value, text) }
            />
            </div>
            <br/>
            <p className="checkbox-title">Visit Type</p>
            <div className="visit-type-section">
                <div className="visit_type"> 
                    <span className="label">LifeCo</span>
                    <Checkbox className="checkbox-value"/>
                </div>
                <div className="visit_type"> 
                    <span className="label">External</span>
                    <Checkbox className="checkbox-value"/>
                </div>
            </div>
            <p className="checkbox-title">Maintenance</p>
            <div className="maintenance-type-section">
                <div className="maintenance_type"> 
                    <span className="label">Physical</span>
                    <Checkbox className="checkbox-value"/>
                </div>
                <div className="maintenance_type"> 
                    <span className="label">Pap Smear</span>
                    <Checkbox className="checkbox-value"/>
                </div>
            </div>
            <TextField
                name="doctor"
                floatingLabelText="Doctor"
                defaultValue="Dr. Venis Wilder"
            />
            <p className="checkbox-title">Doctor Type</p>
            <div className="doctor-type-section">
                <div className="doctor_type"> 
                    <span className="label">Primary</span>
                    <Checkbox className="checkbox-value"/>
                </div>
                <div className="doctor_type"> 
                    <span className="label">Gynaceologist</span>
                    <Checkbox className="checkbox-value"/>
                </div>
                <div className="doctor_type"> 
                    <span className="label">Dermatologist</span>
                    <Checkbox className="checkbox-value"/>
                </div>
            </div>
            <div>
            <p className="location-title">Clinic Location</p>
            <TextField
                name="labName"
                floatingLabelText="Name of Lab"
            />
            <TextField
                name="street-address"
                floatingLabelText="Street Address"
            />
            <div className="location-options">
            <TextField
                underlineShow={false}
                name="unit"
                floatingLabelText="Unit"
            />
            <TextField
                underlineShow={false}
                name="ak"
                floatingLabelText="AK"
            />
            <TextField
                underlineShow={false}
                name="zip-code"
                type="number"
                floatingLabelText="ZIP Code"
            />
            </div>
            </div>
            <div className="date-options">
            <p className="location-title">Scheduled Date and Time</p>
            <DatePicker 
                name="date" 
                hintText="Date"/>
            <TimePicker
                name="time"
                hintText="Intended Time"
            />
            </div>
            <div>
            <ChipCollection
                items={this.state.payload.complaints || [] } // event render from this.state.payload.tests
            />
            <DropDownTemplate
                title="Add Complaints"
                dataArray={
                   stubbedData.complaints
                }
                onChange={(value, text) => this.onChipDropDownChange('complaints')(value, text) }
            />
            </div>
            <TableInputs
                onChange={this.onTableInputChange}
            />
            <TableTemplate
                onChange={this.onTableTemplateChange('systems-review')}
                headerTitle="Systems Review"
            />
            <div>
            <ChipCollection
                items={this.state.payload.diagnosis || [] } // event render from this.state.payload.tests
            />
            <DropDownTemplate
                title="Add Diagnosis"
                dataArray={
                   stubbedData.diagnosis
                }
                onChange={(value, text) => this.onChipDropDownChange('diagnosis')(value, text) }
            />
            </div>
            <TextField
                name="subjective"
                hintText="Subjective"
                multiLine={true}
                rows={2}
            />
            <TextField
                name="objective"
                hintText="Objective"
                multiLine={true}
                rows={2}
            />
            <TextField
                name="assessments"
                hintText="Assessments"
                multiLine={true}
                rows={2}
            />
             <TextField
                name="next-steps"
                hintText="Next Steps"
                multiLine={true}
                rows={2}
            />
            <TableTemplate
                onChange={this.onTableTemplateChange('follow-ups')}
                headerTitle="Follow Ups"
            />
            <TableTemplate
                onChange={this.onTableTemplateChange('internal-notes')}
                headerTitle="Internal Notes"
            />
            <br/>
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


const mapDispatchToProps = (dispatch : Dispatch<{}>) => bindActionCreators(
    {
        createVisit: visitActions.add
    },
    dispatch
)

export const VisitDrawer = connect<VisitDrawerState, {}, VisitDrawerProps>(null, mapDispatchToProps)(VisitDrawerComponent)