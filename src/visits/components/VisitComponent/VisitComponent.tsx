import * as React from 'react';
// import * as _ from 'lodash';
// import Checkbox from 'material-ui/Checkbox';
// import DatePicker from 'material-ui/DatePicker';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { FormSelectControl, FormTextField } from '../../../common';
import { DoctorType, EnumEx, InternalNote, TimeDuration, Visit, VisitStatus, VisitType } from '../../../common';
import { Patient } from '../../../patients';
import { Attachment } from '../../../common'
import {
    TableInputs, 
    TableTemplate,
    TextInputTemplate,
    AttachmentControl,
} from '../../../common/UIComponents';

// import {
//     TableInputs, 
//     TableTemplate,
//     DropDownTemplate, 
//     TextInputTemplate,
//     ChipCollection
// } from '../../../common/UIComponents';

// import { Visit } from '../../';


import './VisitComponent.css';

// let FaCalendar = require('react-icons/lib/fa/calendar');

// const btnStyle = {
//     backgroundColor: '#f84445'
// }

// const underlineStyle = {
//     display : "none"
// }

interface VisitComponentProps {
    visit: Visit;
    patient?: Patient;
    patientList: Array<Patient>;
    onSave?: (visit: Visit) => void;
    onCancel?: (visit: Visit) => void;
}

interface VisitComponentState {
    id?: string;
    status?: string;
    assigneeId?: string;
    cases?: Array<string>;
    patientId?: number;
    visitType?: string;
    maintenance?: Array<string>;
    doctorId?: string;
    doctorName?: string;
    doctorType?: string;
    clinic?: string;
    scheduledFor?: Date;
    estimatedDuration?: number;
    complaints?: Array<string>;
    vitals?: Array<object>;
    systemsReview?: Array<object>;
    diagnosisId?: string;
    subjective?: string;
    objective?: string;
    assessment?: string;
    nextSteps?: string;
    internalNotes?: Array<InternalNote>;

    isNew: boolean;
    isDirty: boolean;
    isValid: boolean;
}

// const stubbedData = {
//     'patient': [
//         {value:1, primaryText:"Pete Patient"},
//         {value:2, primaryText:"Doctor Dre"}
//     ],
//     'status': [
//         {value:1, primaryText:"New"},
//         {value:2, primaryText:"Scheduled"},
//         {value:3, primaryText:"Process Visit"},
//         {value:4, primaryText:"Finalized"},
//         {value:5, primaryText:"Cancelled"}
//     ],
//     'assignee':[
//         {value:1, primaryText:"Venus"},
//     ],
//     'cases': [
//         {value:1, primaryText:"Cough"},
//         {value:2, primaryText:"Headache"},
//     ],
//     'complaints': [
//         {value:1, primaryText:"Complaint A"},
//         {value:2, primaryText:"Complaint B"},
//         {value:3, primaryText:"Complaint C"},
//         {value:4, primaryText:"Complaint D"},
//     ],
//     'diagnosis': [
//         {value:1, primaryText:"Diagnosis A"},
//         {value:2, primaryText:"Diagnosis  B"},
//         {value:3, primaryText:"Diagnosis  C"},
//         {value:4, primaryText:"Diagnosis  D"},
//     ],

//     'doctors': [
//         {value:1, primaryText:"Dr. Venis Wilder"},
//         {value:2, primaryText:"Dr. Jackton Omamo"},
//     ],

//     'estimatedTime': [
//         {value:1, primaryText:"15 Minutes"},
//         {value:2, primaryText:"30 Minutes"},
//     ],
//     'clinics': [
//         {value:1, primaryText:"Nomad LifeCo, 79 Madison Ave, New York, NY10016"},
//     ],
//     'timeChoice': [
//         {value:1, primaryText:"A.M"},
//         {value:2, primaryText:"P.M"},
//     ],
//     'actualTime': [
//         {value:1, primaryText:"6:30A.M"},
//         {value:2, primaryText:"6:30P.M"},
//     ]
// }

// const getNamedValue = (name:string, v?:number) => {
//     let theArrays = Object.keys(stubbedData);
//     let targetArray = theArrays.filter((s:any)=>{
//         return s === name
//     })
//     let arrayVal = stubbedData[targetArray[0]];
//     let actualValue = arrayVal.filter((a:any) =>{
//         return a.value === v
//     })

//     return actualValue[0].primaryText;

// }

const stubbedData = {
    'attachment': [
        {key:"sdfsdf", fileName:"file.jpg", fileType:"jpg"},
        {key:"adsdf", fileName:"name.pdf", fileType:"pdf"}]
}
 
export class VisitComponent extends React.Component<VisitComponentProps, VisitComponentState> {
    
    constructor() {
        super();

        this.state = {
            isNew: true,
            isDirty: false,
            isValid: true,
            doctorName: ''
        };
        
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleValueChanged = this.handleValueChanged.bind(this);
        this.handleAttachmentUpdated = this.handleAttachmentUpdated.bind(this);
    }

    componentDidMount() {
        if (this.props.visit) {
            this.loadFromVisit(this.props.visit);
        }
    }

    handleCancelClick() {
        console.log('cancel', this.props.visit);
    }

    handleSaveClick() {
        console.log('save', this.state);
        // let _payload = {};
        // let fields = ['doctor','labName', 'street-address', 'unit',
        // 'ak', 'zip-code', 'date', 'time', 'subjective', 'objective',
        // 'assessments', 'next-steps'];
        // fields.forEach((field:string)=>{
        //     _payload[field] = event.target[field].value
        // })

        // let currentPayload = Object.assign({}, this.state.payload);
        // let newPayload = Object.assign({}, currentPayload, _payload)
        
        // if (this.state && this.props.onSave) {
        //     this.props.onSave(this.state.visit);
        // }
    }

    // handleChange = (event: any, index: number, value: number) => this.setState({value});

    // onChipDropDownChange = (name:string) => (v:number, s:string) => {
    //     let st = Object.assign({}, this.state.payload);
    //     if(!st[name]) st[name] = [];
    //     st[name].push(s);
    //     this.setState({
    //         payload: st
    //     })
    // };

    // onPlainTextDropDownChange = (name:string) => (v:number) =>{
    //     this.setState(prevState => ({
    //         payload: {
    //             ...prevState.payload,
    //             [name]: getNamedValue(name, v)
    //         }
    //     }))
    // }

    onTableInputChange = (vitalsArray:object[]) => {
        // this.setState(prevState =>({
        //     payload : {
        //         ...prevState.payload,
        //         vitals : vitalsArray
        //     }
        // }))
    }

    onTableTemplateChange = (templateName:string) => (items: object[]) => {
        // this.setState(prevState => ({
        //     payload : {
        //         ...prevState.payload,
        //         [templateName]: items
        //     }
        // }))
    }

    loadFromVisit(visit: Visit) {
        let isNew = true;

        if (visit.id) {
            isNew = false;
        }

        this.setState({
            isNew,
            status: visit.status,
            assigneeId: visit.assigneeId,
            patientId: visit.patientId,
            visitType: visit.visitType,
            maintenance: visit.maintenance,
            doctorName: visit.doctorName,
            doctorType: visit.doctorType,
            clinic: visit.clinic,
            scheduledFor: visit.scheduledFor,
            estimatedDuration: visit.estimatedDuration,
            complaints: visit.complaints,
            vitals: visit.vitals,
            systemsReview: visit.systemsReview,
            diagnosisId: visit.diagnosis,
            subjective: visit.subjective,
            objective: visit.objective,
            assessment: visit.assessment,
            nextSteps: visit.nextSteps,
            internalNotes: visit.internalNotes
        });
    }

    handleValueChanged(field: string, value: any) {
        this.setState({ ...this.state, [field]: value});
    }

    handleAttachmentUpdated(attachments: Array<Attachment>) {
        console.log(`Attachments Updated `, attachments)
    }

    render() {
        return (
            <form> 
                <FormSelectControl 
                    label="Status" 
                    options={
                        EnumEx.getNamesAndValues(VisitStatus).map((item) => { 
                            return { value: item.value, text: item.name } 
                        })
                    }
                    value={this.state.status}
                    onValueChanged={(value: any) => this.handleValueChanged('status', value)}
                />
                {/* <FormTextField
                    name="created"
                    label="Created"
                    value={this.state.created}
                    onValueChanged={(value: any) => this.handleValueChanged('created', created)}
                /> */}
                <FormSelectControl 
                    label="Patient Name" 
                    options={
                        this.props.patientList.map((patient) => {
                            return { value: patient.id, text: `${patient.firstName} ${patient.lastName}`}
                        })                        
                    }
                    value={this.state.patientId}
                    onValueChanged={(value: any) => this.handleValueChanged('patientId', value)}
                />
                <FormSelectControl 
                    label="Visit Type" 
                    options={
                        EnumEx.getNamesAndValues(VisitType).map((item) => { 
                            return { value: item.value, text: item.name } 
                        })
                    }
                    value={this.state.visitType}
                    onValueChanged={(value: any) => this.handleValueChanged('visitType', value)}
                />
                <div>
                    <div className="form-control-label">Maintenance</div>
                    <div className="md-radio md-radio-inline">
                        <input id="1" type="radio" name="" />
                        <label htmlFor="1">Physical</label>
                    </div>
                    <div className="md-radio md-radio-inline">
                        <input id="2" type="radio" name="g2" />
                        <label htmlFor="2">Pap Smear</label>
                    </div>
                </div>
                {/* <FormSelectControl 
                    label="Maintenance" 
                    options={
                        EnumEx.getNamesAndValues(VisitType).map((item) => { 
                            return { value: item.value, text: item.name } 
                        })
                    }
                    value={this.state.visitType}
                    onValueChanged={(value: any) => this.handleValueChanged('visitType', value)}
                /> */}
                <FormTextField
                    name="doctorName"
                    label="Doctor"
                    value={this.state.doctorName}
                    onValueChanged={(value: any) => this.handleValueChanged('doctorName', value)}
                />
                <FormSelectControl 
                    label="Doctor Type" 
                    options={
                        EnumEx.getNamesAndValues(DoctorType).map((item) => { 
                            return { value: item.value, text: item.name } 
                        })
                    }
                    value={this.state.doctorType}
                    onValueChanged={(value: any) => this.handleValueChanged('doctorType', value)}
                />
                <FormTextField
                    name="clinic"
                    label="Clinic Location"
                    value={this.state.doctorName}
                    onValueChanged={(value: any) => this.handleValueChanged('clinic', value)}
                />
                <FormSelectControl 
                    label="Estimated Length of Visit" 
                    options={
                        EnumEx.getNamesAndValues(TimeDuration).map((item) => { 
                            return { value: item.value, text: `${item.value} Minutes` } 
                        })
                    }
                    value={this.state.doctorType}
                    onValueChanged={(value: any) => this.handleValueChanged('doctorType', value)}
                />
                {/* 
                <DropDownTemplate
                    title="Status"
                    dataArray={
                    stubbedData.status
                    }
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
                                }}
                            />
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
                /> */}
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
                <TableTemplate
                    onChange={this.onTableTemplateChange('diagnosis')}
                    headerTitle="Diagnosis"
                />
                {/* <div>
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
                </div>*/}
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
                {/* <TableTemplate
                    onChange={this.onTableTemplateChange('follow-ups')}
                    headerTitle="Follow Ups"
                /> */}
                {/* <FlatButton 
                    className="add-attachment-button"
                    backgroundColor="#C6D3D1"
                    hoverColor="#C6D3D1"
                    label="Add Attachment"
                    style={{
                        marginTop: 30,
                        marginBottom: 10
                    }}
                    labelStyle={{
                        textTransform: 'none'
                    }}
                /> */}

                <AttachmentControl 
                    attachmentList={stubbedData.attachment}
                    onChange={this.handleAttachmentUpdated}
                />
                <TableTemplate
                    onChange={this.onTableTemplateChange('internal-notes')}
                    headerTitle="Internal Notes"
                />
                <br/>
                <div className="form-button-container">
                    <FlatButton  
                        className="form-cancel-button"
                        label="CANCEL"
                        style={{
                            color: '#979797',
                            textTransform: 'uppercase'
                        }}
                        onClick={this.handleCancelClick}
                    />
                    <FlatButton 
                        className="form-save-button"
                        label="SAVE CHANGES"
                        style={{
                            color: '#67b2a6',
                            textTransform: 'uppercase'
                        }}
                        onClick={this.handleSaveClick}
                    />
                </div>
            </form>
        )
    }
}

 
                