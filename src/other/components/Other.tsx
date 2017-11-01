import * as React from 'react';
import { 
    Other, 
    Attachment 
} from '../../common';
import { 
    FormTextField,
    AttachmentControl
} from '../../common/components';
import './Other.css';

interface OtherProps {
    other: Other
    attachments?: Array<Attachment>;
    channelId: number
}

interface OtherState {
    attachmentList?: Array<Attachment>;
    otherInfo: Other;
}

export class OthersComponent extends React.Component<OtherProps, OtherState> {

    constructor() {
        super();

        this.state = {
            attachmentList: [],
            otherInfo: {}
        };

        this.handleValueChanged = this.handleValueChanged.bind(this);
        this.handleAttachmentUpdated = this.handleAttachmentUpdated.bind(this);
    }

    componentDidMount() {
        if (this.props) {
            this.setState({
                attachmentList: this.props.attachments,
                otherInfo: this.props.other
            });
        }
    }
    
    componentWillReceiveProps(props: OtherProps) {
        if (props) {
            this.setState({
                attachmentList: this.props.attachments,
                otherInfo: this.props.other
            });
        }
    }

    handleValueChanged(field: string, value: {}) {
        console.log( `this field ${field} changed ${value}`);
    }

    handleAttachmentUpdated(attachments: Array<Attachment>) {
        console.log(`Attachments Updated `, attachments); // tslint:disable-line
    }

    render() {
        return(
            <div className="others-component">
                <FormTextField
                    name="allergies"
                    label="Allergies"
                    value={this.state.otherInfo.allergies}
                    onValueChanged={(value: {}) => this.handleValueChanged('allergies', value)}
                    multiLine={true}
                    rows={2}
                />

                <FormTextField
                    name="family"
                    label="Family"
                    value={this.state.otherInfo.family}
                    onValueChanged={(value: {}) => this.handleValueChanged('family', value)}
                    multiLine={true}
                    rows={2}
                />

                <FormTextField
                    name="social"
                    label="Social"
                    value={this.state.otherInfo.social}
                    onValueChanged={(value: {}) => this.handleValueChanged('social', value)}
                    multiLine={true}
                    rows={2}
                />

                <FormTextField
                    name="currentTreatment"
                    label="Current Treatment"
                    onValueChanged={(value: {}) => this.handleValueChanged('currentTreatment', value)}
                    multiLine={true}
                    rows={2}
                />

                <FormTextField
                    name="previousTreatment"
                    label="Previous Treatment"
                    onValueChanged={(value: {}) => this.handleValueChanged('previousTreatment', value)}
                    multiLine={true}
                    rows={2}
                />

                <FormTextField 
                    name="hospitalization"
                    label="Hospitalization"
                    onValueChanged={(value: {}) => this.handleValueChanged('hospitalization', value)}
                    multiLine={true}
                    rows={2}
                />

                <FormTextField 
                    name="urgentCareVisit"
                    label="ED / Urgent Care visits"
                    onValueChanged={(value: {}) => this.handleValueChanged('urgentCareVisit', value)}
                    multiLine={true}
                    rows={2}
                />

                <FormTextField 
                    name="surgicalHistory"
                    label="Surgical history"
                    onValueChanged={(value: {}) => this.handleValueChanged('surgicalHistory', value)}
                    multiLine={true}
                    rows={2}
                />
                <FormTextField 
                    name="activeMedication"
                    label="Active Medication"
                    onValueChanged={(value: {}) => this.handleValueChanged('activeMedication', value)}
                    multiLine={true}
                    rows={2}
                />
                <FormTextField 
                    name="pastMedication"
                    label="Past Medication"
                    onValueChanged={(value: {}) => this.handleValueChanged('pastMedication', value)}
                    multiLine={true}
                    rows={2}
                />

                <AttachmentControl
                    onChange={this.handleAttachmentUpdated}
                    channelId={this.props.channelId}
                    attachmentList={this.state.attachmentList}
                />
            </div>
        )
    }
}