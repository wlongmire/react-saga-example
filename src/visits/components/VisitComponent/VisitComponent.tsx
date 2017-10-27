import * as React from 'react';
import * as _ from 'lodash';
import * as Moment from 'moment';
import FlatButton from 'material-ui/FlatButton';
import { 
    FormDateTimeControl,
    FormSelectControl, 
    FormSelectControlOption, 
    FormTextField } from '../../../common';
import { 
    Attachment,
    AttachmentControl,
    Address,
    Complaints,
    DoctorTypes, 
    EnumEx, 
    FormTableInputControl,
    FormTableInputItem,
    Identity,
    InternalNote, 
    Patient,
    SystemsReview,
    TimeDuration, 
    Vitals,
    Visit, 
    VisitStatus, 
    VisitType,
    
} from '../../../common';

import './VisitComponent.css';

interface VisitComponentProps {
    user: Identity;
    visit?: Visit;
    patientList: Array<Patient>;
    onSave?: (visit: Visit) => void;
    onCancel?: (visit: Visit) => void;
}

interface VisitComponentState {
    id?: string;
    status?: string;
    assigneeId?: number;
    cases?: Array<string>;
    patientId?: number;
    visitType?: string;
    maintenance?: Array<string>;
    doctorId?: string;
    doctorName?: string;
    doctorType?: string;
    clinic?: Address;
    scheduledFor?: Moment.Moment;
    estimatedDuration?: number;
    complaints: Array<object>;
    vitals: Array<object>;
    systemsReview: Array<object>;
    diagnosis?: string;
    subjective?: string;
    objective?: string;
    assessment?: string;
    nextSteps?: string;
    internalNotes?: Array<InternalNote>;
    attachments?: Array<Attachment>;

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
            vitals: [],
            systemsReview: []
        };
        
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleDateChanged = this.handleDateChanged.bind(this);
        this.handleMaintenanceClick = this.handleMaintenanceClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleValueChanged = this.handleValueChanged.bind(this);
        this.handleAttachmentUpdated = this.handleAttachmentUpdated.bind(this);
        this.handleTableInputChange = this.handleTableInputChange.bind(this);
    }

    componentDidMount() {
        if (this.props.visit) {
            this.loadFromVisit(this.props.visit);
        }
    }

    handleCancelClick() {
        if (!this.props.onCancel) return;
        let visit = _.cloneDeep(this.state) as Visit;
        this.props.onCancel(visit);
    }

    handleDateChanged(field: string, val: Moment.Moment) {
        this.setState({
            ...this.state,
            [field]: val,
            assigneeId: this.props.user.userId
        });
    }

    handleMaintenanceClick(val: string) {
        this.setState({
            maintenance: [val]
        });
    }

    handleSaveClick() {
        if (!this.props.onSave) return;
        let visit = {
            ...this.state, 
            scheduledFor: this.state.scheduledFor ? this.state.scheduledFor.utc().unix() : undefined
        } as Visit;
        this.props.onSave(visit);
    }

    loadFromVisit(visit: Visit) {
        let isNew = true;

        if (visit.id) {
            isNew = false;
        }

        this.setState({
            id: visit.id,
            isNew,
            status: visit.status,
            assigneeId: visit.assigneeId,
            patientId: visit.patientId,
            visitType: visit.visitType,
            maintenance: visit.maintenance,
            doctorName: visit.doctorName,
            doctorType: visit.doctorType,
            clinic: visit.clinic,
            scheduledFor: visit.scheduledFor ? Moment.unix(visit.scheduledFor) : undefined,
            estimatedDuration: visit.estimatedDuration,
            complaints: visit.complaints ? visit.complaints : [],
            vitals: visit.vitals ? visit.vitals : [],
            systemsReview: visit.systemsReview ? visit.systemsReview : [],
            diagnosis: visit.diagnosis,
            subjective: visit.subjective,
            objective: visit.objective,
            assessment: visit.assessment,
            nextSteps: visit.nextSteps,
            internalNotes: visit.internalNotes,
            attachments: visit.attachments
        });
    }

    handleTableInputChange(field: string, items: Array<FormTableInputItem>) {
        let val = items.map((item) => {
            let updatedItem = {};
            updatedItem[item.selectedOption ? item.selectedOption.text : ''] = item.details;
            return updatedItem;
        });

        this.setState({
            ...this.state, 
            [field]: val,
            assigneeId: this.props.user.userId
        });
    }

    handleValueChanged(field: string, value: {}) {
        this.setState({ ...this.state, [field]: value});
    }

    handleAttachmentUpdated(attachments: Array<Attachment>) {
        console.log(`Attachments Updated `, attachments); // tslint:disable-line
    }

    render() {
        return (
            <form> 
                <FormSelectControl 
                    label="Status" 
                    options={
                        VisitStatus.map((status) => {
                            return { value: status, text: status } as FormSelectControlOption
                        })
                    }
                    value={this.state.status}
                    onValueChanged={(value: {}) => this.handleValueChanged('status', value)}
                />
                <FormSelectControl 
                    label="Patient Name" 
                    options={
                        this.props.patientList.map((patient) => {
                            return { 
                                value: patient.id, 
                                text: `${patient.firstName} ${patient.lastName}`
                            } as FormSelectControlOption
                        })                        
                    }
                    value={this.state.patientId ? Number(this.state.patientId) : -1}
                    onValueChanged={(value: {}) => this.handleValueChanged('patientId', value)}
                />
                <FormSelectControl 
                    label="Visit Type" 
                    options={
                        EnumEx.getNamesAndValues(VisitType).map((item) => { 
                            return { 
                                value: item.name, 
                                text: item.name 
                            } as FormSelectControlOption
                        })
                    }
                    value={this.state.visitType}
                    onValueChanged={(value: {}) => this.handleValueChanged('visitType', value)}
                />
                <div>
                    <div className="form-control-label">Maintenance</div>
                    <div className="md-radio md-radio-inline">
                        <input 
                            id="1" 
                            type="radio" 
                            name="maintenance" 
                            checked={this.state.maintenance ? this.state.maintenance.indexOf('Physical') > -1 : false}
                            onClick={() => this.handleMaintenanceClick('Physical')}
                        />
                        <label htmlFor="1">Physical</label>
                    </div>
                    <div className="md-radio md-radio-inline">
                        <input 
                            id="2" 
                            type="radio" 
                            name="maintenance"
                            checked={this.state.maintenance ? this.state.maintenance.indexOf('Pap Smear') > -1 : false}
                            onClick={() => this.handleMaintenanceClick('Pap Smear')}
                        />
                        <label htmlFor="2">Pap Smear</label>
                    </div>
                </div>
                <FormTextField
                    name="doctorName"
                    label="Doctor"
                    value={this.state.doctorName}
                    onValueChanged={(value: {}) => this.handleValueChanged('doctorName', value)}
                />
                <FormSelectControl 
                    label="Doctor Type" 
                    options={
                        DoctorTypes.map((doctorType) => {
                            return { 
                                value: doctorType, 
                                text: doctorType 
                            } as FormSelectControlOption
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
                            return { 
                                value: item.value, 
                                text: `${item.value} Minutes` 
                            } as FormSelectControlOption
                        })
                    }
                    value={this.state.estimatedDuration}
                    onValueChanged={(value: {}) => this.handleValueChanged('estimatedDuration', value)}
                />
                <FormDateTimeControl
                    label="Scheduled Date and Time"
                    date={this.state.scheduledFor}
                    onChange={(value: Moment.Moment) => this.handleDateChanged('scheduledFor', value)}
                />
                <FormTableInputControl 
                    label="Complaints"
                    options={
                        Complaints.map((complaint) => {
                            return { 
                                value: complaint, 
                                text: complaint 
                            } as FormSelectControlOption
                        })
                    } 
                    items={this.state.complaints.map((complaint) => {
                        let key = _.keys(complaint)[0];
                        let val = _.values(complaint)[0];
                        return {
                            details: val.toString(),
                            isNew: false,
                            selectedOption: {
                                value: key,
                                text: key       
                            } as FormSelectControlOption
                        } as FormTableInputItem
                    })}
                    multilineDetail={true}
                    multilineRows={4}
                    onChange={(items: Array<FormTableInputItem>) => this.handleTableInputChange('complaints', items) }
                />
                <FormTableInputControl 
                    label="Vitals"
                    options={
                        Vitals.map((vital) => {
                            return { 
                                value: vital, 
                                text: vital 
                            } as FormSelectControlOption
                        })
                    } 
                    items={this.state.vitals.map((vital) => {
                        let key = _.keys(vital)[0];
                        let val = _.values(vital)[0];
                        return {
                            details: val.toString(),
                            isNew: false,
                            selectedOption: {
                                value: key,
                                text: key       
                            } as FormSelectControlOption
                        } as FormTableInputItem
                    })}
                    multilineDetail={false}
                    multilineRows={1}
                    onChange={(items: Array<FormTableInputItem>) => this.handleTableInputChange('vitals', items) }
                />
                <FormTableInputControl 
                    label="Systems Review"
                    options={
                        SystemsReview.map((item) => {
                            return { 
                                value: item, 
                                text: item
                            } as FormSelectControlOption
                        })
                    } 
                    items={this.state.systemsReview.map((item) => {
                        let key = _.keys(item)[0];
                        let val = _.values(item)[0];
                        return {
                            details: val.toString(),
                            isNew: false,
                            selectedOption: {
                                value: key,
                                text: key       
                            } as FormSelectControlOption
                        } as FormTableInputItem
                    })}
                    multilineDetail={true}
                    multilineRows={4}
                    onChange={(items: Array<FormTableInputItem>) => this.handleTableInputChange('systemsReview', items) }
                />
                <FormTextField
                    name="diagnosis"
                    label="Diagnosis"
                    value={this.state.diagnosis}
                    onValueChanged={(value: string) => this.handleValueChanged('diagnosis', value)}
                />
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
                <AttachmentControl 
                    attachmentList={this.state.attachments}
                    onChange={this.handleAttachmentUpdated}
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