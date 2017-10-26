import * as React from 'react';
import * as Moment from 'moment';
// import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { 
    FormSelectControl, 
    FormSelectControlOption, 
    FormDateTimeControl,
    FormTextField
} from '../../../common';
import { connect } from 'react-redux';
import { fetchSingleSignOnInfo } from '../../actions';
import { Patient, SingleSignOnInfo, Treatment, TreatmentStatus } from '../../../common';

import './Treatment.css';

interface TreatmentComponentProps {
    singleSignOnInfo: SingleSignOnInfo;
    treatment: Treatment;
    patients: Array<Patient>;
    onSave?: (treatment: Treatment) => void,
    onCancel?: (treatment: Treatment) => void;
    fetchSingleSignOnInfo: () => void
}

interface TreatmentComponentState {
    id: string;
    status?: string;
    dateWritten?: Moment.Moment;
    medicationName?: string;
    refills?: number;
    sig?: string;
    form?: string;
    dosage?: string;
    quantity?: string;
    pharmacyName?: string;
    daysSupply?: number;
    endOn?: Moment.Moment;
    patientId?: number;
    isNew: boolean;
}

class _TreatmentComponent extends React.Component<TreatmentComponentProps, TreatmentComponentState> {
    
    constructor(props: TreatmentComponentProps) {
        super(props);
        this.state = {
            id: this.props.treatment.id,
            isNew: true
        };

        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleEditDetailsButtonClick = this.handleEditDetailsButtonClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleValueChanged = this.handleValueChanged.bind(this);
    }

    componentDidMount() {
        const { treatment } = this.props;
        this.setState({
            status: treatment.status,
            dateWritten: Moment(treatment.dateWritten),
            medicationName: treatment.medicationName,
            refills: treatment.refills,
            sig: treatment.sig,
            form: treatment.form,
            dosage: treatment.dosage,
            quantity: treatment.quantity,
            pharmacyName: treatment.pharmacyName,
            daysSupply: treatment.daysSupply,
            endOn: Moment(treatment.endOn),
            patientId: treatment.patientId,
            isNew: treatment.isNew
        });
    }

    componentWillReceiveProps(props: TreatmentComponentProps) {
        const { treatment } = this.props;
        this.setState({
            status: treatment.status,
            dateWritten: Moment(treatment.dateWritten),
            medicationName: treatment.medicationName,
            refills: treatment.refills,
            sig: treatment.sig,
            form: treatment.form,
            dosage: treatment.dosage,
            quantity: treatment.quantity,
            pharmacyName: treatment.pharmacyName,
            daysSupply: treatment.daysSupply,
            endOn: Moment(treatment.endOn),
            patientId: treatment.patientId,
            isNew: treatment.isNew
        });
    }

    getPatientName(patientId: number): string {
        if (!this.props.patients) return '';
        let patient = this.props.patients.find((patient) => {
            return patient.id === patientId
        });
        if (!patient) return '';
        return `${patient.firstName} ${patient.lastName}`;
    }

    handleCancelClick() {
        if (!this.props.onCancel) return;
        let treatment = {
            ...this.state, 
            dateWritten: this.state.dateWritten ? this.state.dateWritten.toDate() : undefined, 
            endOn: this.state.endOn ? this.state.endOn.toDate() : undefined
        } as Treatment;
        this.props.onCancel(treatment);
    }

    handleClose() {
        
    }

    handleEditDetailsButtonClick() {
        
    }

    handleEndOnDateChange(value: Moment.Moment) {
        
    }

    handleOpen() {
        
    }

    handleSaveClick() {
        if (!this.props.onSave) return;
        let treatment = {
            ...this.state, 
            dateWritten: this.state.dateWritten ? this.state.dateWritten.toDate() : undefined, 
            endOn: this.state.endOn ? this.state.endOn.toDate() : undefined
        } as Treatment;
        this.props.onSave(treatment);
    }

    handleValueChanged(field: string, value: {}) {
        this.setState({ ...this.state, [field]: value});
    }

    render() {
        // todo 1: fix 401 unauthorized on server (cors?)
        // todo 2: don't load this until after we have sso info
        // if (!this.props.singleSignOnInfo) return(<div></div>);
        // const url = this.buildUrl();

        return (
            <div className="treatment-component">
                <input className="edit-in-dosespot-button" type="button" value="Edit Details in Dosespot" onClick={this.handleEditDetailsButtonClick} />
                <FormSelectControl 
                    label="Status" 
                    options={
                        TreatmentStatus.map((status) => {
                            return { value: status, text: status } as FormSelectControlOption
                        })
                    }
                    value={this.state.status}
                    onValueChanged={(value: {}) => this.handleValueChanged('status', value)}
                />
                <div className="form-group">
                    <label>Date Prescribed</label>
                    <span>{this.state.dateWritten ? this.state.dateWritten.toString() : 'h:mm A, M/DD/YYYY'}</span>
                </div>
                <FormDateTimeControl
                    floatingLabelText="End Date"
                    date={this.state.endOn || Moment()}
                    onChange={this.handleEndOnDateChange}
                />
                <div className="form-group">
                    <label>Patient Name</label>
                    <span>{this.getPatientName(this.state.patientId || -1)}</span>
                </div>
                <div className="form-group">
                    <label>Prescription Name</label>
                    <span>{this.state.medicationName}</span>
                </div>
                <div className="form-group">
                    <label>Directions</label>
                    <span>{this.state.sig}</span>
                </div>
                <div className="form-group">
                    <label>Refills</label>
                    <span>{this.state.refills}</span>
                </div>
                <div className="form-group">
                    <label>Form</label>
                    <span>{this.state.form}</span>
                </div>
                <div className="form-group">
                    <label>Strength</label>
                    <span>{this.state.dosage}</span>
                </div>
                <div className="form-group">
                    <label>Pharmacy Location</label>
                    <span>{this.state.pharmacyName}</span>
                </div>
                <div className="form-group">
                    <label>Pharmacy Notes</label>
                </div>
                <div className="form-group">
                    <label>Schedule</label>
                </div>
                <FormTextField
                    name="patientDirections"
                    label="Patient Directions"
                    onValueChanged={(value: string) => this.handleValueChanged('patientDirections', value)}
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
                {/* <Dialog
                    title="DoseSpot"
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}>
                    <iframe className="dosespot-base" width="80%" height="750px" src={ url }></iframe>
                </Dialog> */}
                
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        patients: state.patients.items,
        singleSignOnInfo: state.treatments.singleSignOnInfo
    };
}

export const TreatmentComponent = connect<{}, TreatmentComponentProps, { treatment: Treatment }>(mapStateToProps, {
    fetchSingleSignOnInfo
}) (_TreatmentComponent);