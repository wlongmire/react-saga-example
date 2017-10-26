import * as React from 'react';
import * as _ from 'lodash';
import FlatButton from 'material-ui/FlatButton';
import { Attachment } from '../../../common'
import { AttachmentListItem } from '../../'
import * as api from '../../api';

import './AttachmentControl.css';

interface AttachmentControlProps {
    attachmentList?: Array<Attachment>;
    channelId?: number;
    onChange: (value: Array<Attachment>) => void; 
}

interface AttachmentControlState {
    attachmentList: Array<Attachment>;
    channelId?: number;
}

export class AttachmentControl extends React.Component< AttachmentControlProps, AttachmentControlState> {

    constructor(props: AttachmentControlProps) {
        super(props);

        this.state = {
            attachmentList: [],
            channelId: undefined
        };

        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    componentDidMount() {
        if (this.props.attachmentList) {
            this.setState({
                attachmentList: this.props.attachmentList,
                channelId: this.props.channelId
            })
        }
    }

    componentWillReceiveProps(props: AttachmentControlProps) {
        if (props.attachmentList) {
            this.setState({
                attachmentList: props.attachmentList,
                channelId: props.channelId
            })

        }
    }

    handleFileSelected = (e: any) => {
        if (e.target.files.length == 0) {
            return;
        }

        const filetype = e.target.files[0].type;
        const file = e.target.files[0];

        api.attachments.getS3UploadURL(filetype, `${this.state.channelId}`)
            .then(({objectKey, url}) => {
                api.attachments.uploadFile(filetype, objectKey, file, url)
                    .then((result: Attachment) => {
                        let newAttachment = result as Attachment
                        if (!newAttachment) {
                            return;
                        }
                        let items = _.cloneDeep(this.state.attachmentList);
                        items.push(newAttachment);
                        this.setState({
                            attachmentList: items
                        }),() => {
                            this.props.onChange(this.state.attachmentList);
                        }
                    });
            });

    }

    handleItemDelete(item: Attachment) {
        const index = this.state.attachmentList.indexOf(item);
        if (index > -1) {
            this.state.attachmentList.splice(index, 1);
        }

        this.setState({
            attachmentList: this.state.attachmentList
        }),() => {
            this.props.onChange(this.state.attachmentList);
        }
    }

    render() {
        const buttonStyle = {
            marginTop: 30,
            marginBottom: 10
        };

        const labelStyle = {
            textTransform: 'none'
        };

        return (
            <div className="attachment-container">
                <div>
                    { this.state.attachmentList &&
                        this.state.attachmentList.map((value: Attachment) => {
                            return (
                                <AttachmentListItem
                                    attachment={value}
                                    onDelete={this.handleItemDelete}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    <FlatButton
                        className="add-attachment-button"
                        containerElement="label"
                        label="Add Attachment"
                        backgroundColor="#C6D3D1"
                        hoverColor="#C6D3D1"
                        style={buttonStyle}
                        labelStyle={labelStyle}
                    >
                    <input type="file" 
                        onChange={(e) => this.handleFileSelected(e)} 
                        style={{ display: 'none' }} 
                    />
                    </FlatButton>
                </div>
            </div>
        )
    }
}