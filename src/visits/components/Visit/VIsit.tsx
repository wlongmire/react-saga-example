import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {
    TableInputs, 
    TableTemplate,
    DropDownTemplate, 
    TextInputTemplate,
    ChipCollection
} from '../../../common/UIComponents';

// Take care of this to use the right IVisit interface defined in the
// models.
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
    ],

    'doctors': [
        {value:1, primaryText:"Dr. Venis Wilder"},
        {value:2, primaryText:"Dr. Jackton Omamo"},
    ],

    'estimatedTime': [
        {value:1, primaryText:"15 Minutes"},
        {value:2, primaryText:"30 Minutes"},
    ],
    'clinics': [
        {value:1, primaryText:"Nomad LifeCo, 79 Madison Ave, New York, NY10016"},
    ],
    'timeChoice': [
        {value:1, primaryText:"A.M"},
        {value:2, primaryText:"P.M"},
    ],
    'actualTime': [
        {value:1, primaryText:"6:30A.M"},
        {value:2, primaryText:"6:30P.M"},

    ]

}
interface IVisit {
    id: number;
    description?: string;
    doctor_type: string;
    location: string;
    visit_type: string;
}

let FaCalendar = require('react-icons/lib/fa/calendar');

const style = {
  backgroundColor: '#f84445',
  width: '10%',
  marginBottom: '1em',
}

const btnStyle = {
    backgroundColor: '#f84445'
}

const underlineStyle = {
    display : "none"
}
interface VisitContainerProps {
    visit: IVisit;
    editVisit?: (visit:any) => void;
    closeVisitCard?: () => void;
    enclosingIdName?: string
}

interface S {
    payload: object;
    value?: number
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

export class VisitContainer extends React.Component<VisitContainerProps,S>{
    constructor(props:VisitContainerProps){
        super(props)
        this.state = {
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
        if(this.props.editVisit) {this.props.editVisit(newPayload)};
        console.log(newPayload)

    }

    onTableInputChange = (vitalsArray:object[]) => {
        this.setState(prevState =>({
            payload : {
                ...prevState.payload,
                vitals : vitalsArray
            }
        }))
    }

    handleChange = (event:any, index:number, value:number) => this.setState({value});
    onPlainTextDropDownChange = (name:string) => (v:number) =>{
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [name]: getNamedValue(name, v)
            }
        }))
    }
    onChipDropDownChange = (name:string) => (v:number, s:string) => {
        let st = Object.assign({}, this.state.payload);
        if(!st[name]) st[name] = [];
        st[name].push(s);
        this.setState({
            payload: st
        })
    };

    onTableTemplateChange = (templateName:string) => (items: object[]) => {
        this.setState(prevState => ({
            payload : {
                ...prevState.payload,
                [templateName]: items
            }
        }))
    }
    
    render(){
        return(
            <form id={this.props.enclosingIdName || "visit-drawer"} onSubmit={this.handleSubmitVisit}> 
            <span className="visit-title-card"> Edit Visit</span>
            <DropDownTemplate
                title="Status"
                dataArray={
                   stubbedData.status
                }
                value={this.props.visit['id']}
                onChange={this.onPlainTextDropDownChange('status')}
            />
            <div>
            <span className="date-section-title">Date Created</span>
            <div className="date-picker-section">
            <DatePicker 
                name="date" 
                hintText="Date Created"
                style={{
                    textAlign:"left",
                    position:"relative",
                    left:'2em',
                    marginBottom:'.5em'
                    }}
                underlineStyle={underlineStyle}
                />
            <div className="calendar-icon">
            <FaCalendar/>
            </div>
            </div>
            </div>
            <DropDownTemplate
                title="Patient Name"
                dataArray={
                   stubbedData.patient
                }
                onChange={this.onPlainTextDropDownChange('patient')}
            />

            <p className="checkbox-title">Visit Type</p>
            <div className="visit-type-section">
                <div className="visit_type"> 
                    <Checkbox className="checkbox-value"/>
                    <span className="label">LifeCo</span>
                </div>
                <div className="visit_type"> 
                    <Checkbox className="checkbox-value"/>
                    <span className="label">External</span>
                    
                </div>
            </div>
            <br/>
            <p className="checkbox-title">Maintenance</p>
            <div className="maintenance-type-section">
                <div className="maintenance_type"> 
                    <Checkbox className="checkbox-value"/>
                    <span className="label">Physical</span>
                    
                </div>
                <div className="maintenance_type"> 
                    <Checkbox className="checkbox-value"/>
                    <span className="label">Pap Smear</span>
                </div>
            </div>

            <DropDownTemplate
                title="Doctor"
                dataArray={
                stubbedData.doctors
                }
                onChange={(value, text) => this.onChipDropDownChange('doctor')(value, text) }
             />

             <p className="checkbox-title">Doctor Type</p>
            <div className="doctor-type-section">
                <div className="doctor_type"> 
                    <Checkbox className="checkbox-value"/>
                    <span className="label">Primary</span>
                    
                </div>
                <div className="doctor_type"> 
                    <Checkbox className="checkbox-value"/>
                    <span className="label">Gynaceologist</span>
                </div>
                <div className="doctor_type"> 
                    <Checkbox className="checkbox-value"/>
                    <span className="label">Dermatologist</span>
                </div>
            </div>

            <DropDownTemplate
                title="Clinic Location"
                dataArray={
                stubbedData.clinics
                }
                value={this.props.visit.id}
                onChange={(value, text) => this.onChipDropDownChange('estimated-time')(value, text) }
             />

             <div className="scheduled-time-section">
                <span className="scheduled-title">Scheduled Date and Time</span>
                <div className="scheduled-time">
                <div className="scheduled-date-box">
                 <DatePicker 
                    hintText="Scheduled Date" 
                    name="scheduled-date"
                    underlineStyle={underlineStyle}
                    style={{
                    textAlign:"left",
                    position:"relative",
                    left:'2em',
                    marginBottom:'.5em',
                    }}/>
                <div className="calendar-icon-schedule">
                    <FaCalendar/>
                </div>
                </div>
                <div>
                <DropDownTemplate
                    title=""
                    dataArray={
                    stubbedData.actualTime
                    }
                    onChange={(value, text) => this.onChipDropDownChange('actual-time')(value, text) }
                />
                </div>
                <div>
                <DropDownTemplate
                    title=""
                    dataArray={
                    stubbedData.timeChoice
                    }
                    onChange={(value, text) => this.onChipDropDownChange('time-choice')(value, text) }
                />
                </div>
                </div>
             </div>
             <DropDownTemplate
                title="Estimated Length of Visits"
                dataArray={
                stubbedData.estimatedTime
                }
                onChange={(value, text) => this.onChipDropDownChange('estimated-time')(value, text) }
             />

            <TableTemplate
                onChange={this.onTableTemplateChange('complaints')}
                headerTitle="Complaints"
            />
            <TableInputs
                onChange={this.onTableInputChange}
            />    
            <TableTemplate
                onChange={this.onTableTemplateChange('systems-review')}
                headerTitle="Systems Review"
            />
            <div>
            <ChipCollection
                items={this.state.payload['diagnosis'] || [] } // event render from this.state.payload.tests
            />
            <DropDownTemplate
                title="Add Diagnosis"
                dataArray={
                   stubbedData.diagnosis
                }
                onChange={(value, text) => this.onChipDropDownChange('diagnosis')(value, text) }
            />
            </div>
            <TextInputTemplate
                name="subjective"
                title="Subjective"
                multiLine={true}
                rows={2}
            />
            
            <TextInputTemplate

                title="Objective"
                name="objective"
                multiLine={true}
                rows={2}
            
            />
            <TextInputTemplate
                name="assessments"
                title="Assessments"
                multiLine={true}
                rows={2}
            />
             <TextInputTemplate
                name="next-steps"
                title="Next Steps"
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
                    label="Cancel"
                    onClick={this.props.closeVisitCard}
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

