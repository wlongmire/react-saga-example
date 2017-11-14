import * as React from 'react';
import { Attachment } from '../../../models';

import './AttachmentListItem.css';

const TiDelete = require('react-icons/lib/ti/delete');

interface AttachmentListItemProps {
    attachment: Attachment;
    onDelete: (value: Attachment) => void;
}

export class AttachmentListItem extends React.Component<AttachmentListItemProps, {}> {

    handleDeleteClick = () => {
        if (this.props.onDelete) {
            this.props.onDelete(this.props.attachment);
        }
    }

    render() {
        return (
            <div>
                <li className="attachment-list-item">
                    <span
                        className="attchment-delete-button"
                        onClick={this.handleDeleteClick}
                    >
                        <TiDelete className="attachment-delete-icon"/> 
                    </span>
                    <div className="attachment-name">
                        <p className ="attachment-fileName">{this.props.attachment.fileName}</p>
                    </div>
                </li>
                
            </div>
        );
    }
}