import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { FormSelectControl, FormTextField } from '../../../common';
import { 
    Address,
    DoctorType, 
    EnumEx, 
    InternalNote, 
    TimeDuration, 
    Patient,
    Visit, 
    VisitStatus, 
    VisitType
} from '../../../common';
import {
    TableInputs, 
    TableTemplate,
} from '../../../common/components';

import './VisitComponent.css';

interface VisitComponentProps {
    visit?: Visit;
    patientList: Array<Patient>;
    onSave?: (visit: Visit) => void;
    onCancel?: () => void;
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
    clinic?: Address;
    scheduledFor?: Date;
    estimatedDuration?: number;
    complaints: Array<string>;
    vitals: Array<object>;
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
 
export class VisitComponent extends React.Component<VisitComponentProps, VisitComponentState> {
    
    constructor() {
        super();

        this.state = {
            isNew: true,
            isDirty: false,
            isValid: true,
            doctorName: '',
            complaints: [],
            vitals: []
        };
        
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleValueChanged = this.handleValueChanged.bind(this);
        // this.handleAttachmentUpdated = this.handleAttachmentUpdated.bind(this);
    }

    componentDidMount() {
        if (this.props.visit) {
            this.loadFromVisit(this.props.visit);
        }
    }

    handleCancelClick() {
        if (!this.props.onCancel) return;
        this.props.onCancel();
    }

    handleSaveClick() {
        if (!this.props.onSave) return;
        const visit = new Visit();
        this.props.onSave(visit);
    }

    onTableInputChange = (vitalsArray: object[]) => {
        
    }

    onTableTemplateChange = (templateName: string) => (items: object[]) => {
        
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
            complaints: [],
            vitals: [],
            systemsReview: visit.systemsReview,
            diagnosisId: visit.diagnosis,
            subjective: visit.subjective,
            objective: visit.objective,
            assessment: visit.assessment,
            nextSteps: visit.nextSteps,
            internalNotes: visit.internalNotes
        });
    }

    handleValueChanged(field: string, value: {}) {
        this.setState({ ...this.state, [field]: value});
    }

    // handleAttachmentUpdated(attachments: Array<Attachment>) {
    //     console.log(`Attachments Updated `, attachments)
    // }

    render() {
        return (
            <form> 
                <FormSelectControl 
                    label="Status" 
                    options={
                        EnumEx.getNamesAndValues(VisitStatus).map((item) => { 
                            return { value: item.value, text: item.name }; 
                        })
                    }
                    value={this.state.status}
                    onValueChanged={(value: {}) => this.handleValueChanged('status', value)}
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
                            return { value: patient.id, text: `${patient.firstName} ${patient.lastName}`};
                        })                        
                    }
                    value={this.state.patientId}
                    onValueChanged={(value: {}) => this.handleValueChanged('patientId', value)}
                />
                <FormSelectControl 
                    label="Visit Type" 
                    options={
                        EnumEx.getNamesAndValues(VisitType).map((item) => { 
                            return { value: item.value, text: item.name };
                        })
                    }
                    value={this.state.visitType}
                    onValueChanged={(value: {}) => this.handleValueChanged('visitType', value)}
                />
                <div>
                    <div className="form-control-label">Maintenance</div>
                    <div className="md-radio md-radio-inline">
                        <input id="1" type="radio" name="g2" />
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
                    onValueChanged={(value: {}) => this.handleValueChanged('doctorName', value)}
                />
                <FormSelectControl 
                    label="Doctor Type" 
                    options={
                        EnumEx.getNamesAndValues(DoctorType).map((item) => { 
                            return { value: item.value, text: item.name };
                        })
                    }
                    value={this.state.doctorType}
                    onValueChanged={(value: {}) => this.handleValueChanged('doctorType', value)}
                />
                <FormTextField
                    name="clinic"
                    label="Clinic Location"
                    value={this.state.clinic}
                    onValueChanged={(value: {}) => this.handleValueChanged('clinic', value)}
                />
                <FormSelectControl 
                    label="Estimated Length of Visit" 
                    options={
                        EnumEx.getNamesAndValues(TimeDuration).map((item) => { 
                            return { value: item.value, text: `${item.value} Minutes` }; 
                        })
                    }
                    value={this.state.doctorType}
                    onValueChanged={(value: {}) => this.handleValueChanged('estimatedDuration', value)}
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
                {/* <FormTableInputControl 
                    label="Complaints"
                    options={[{value: '1', text: 'Coughing'}, {value: '2', text: 'Runny Nost'}]} 
                    items={this.state.complaints.map((complaint) => {
                        return {
                            details: "Test 1",
                            isNew: false,
                            selectedOption: {
                                value: "1",
                                text: "Coughing"
                            }
                        }
                    })}
                    multilineDetail={false}
                    multilineRows={4}
                    onChange={(items: Array<FormTableInputItem>) => console.log('updated items:', items)}            
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
                <FormTextField
                    name="subjective"
                    label="Subjective"
                    value={this.state.subjective}
                    onValueChanged={(value: {}) => this.handleValueChanged('subjective', value)}
                    multiLine={true}
                    rows={2}
                />
                <FormTextField
                    name="objective"
                    label="Objective"
                    value={this.state.objective}
                    onValueChanged={(value: {}) => this.handleValueChanged('objective', value)}
                    multiLine={true}
                    rows={2}
                />
                <FormTextField
                    name="assessment"
                    label="Assessment"
                    value={this.state.assessment}
                    onValueChanged={(value: {}) => this.handleValueChanged('assessment', value)}
                    multiLine={true}
                    rows={2}
                />
                <FormTextField
                    name="next-steps"
                    label="Next Steps"
                    value={this.state.nextSteps}
                    onValueChanged={(value: {}) => this.handleValueChanged('nextSteps', value)}
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

                {/* <AttachmentControl 
                    attachmentList={stubbedData.attachment}
                    onChange={this.handleAttachmentUpdated}
                /> */}
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
        );
    }
}                