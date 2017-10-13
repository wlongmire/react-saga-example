import * as React from 'react';
import { BioDriveListItemInfo } from '../../reducer';
import * as Moment from 'moment';

import './BioDriveListItem.css';

interface BioDriveListItemProps {
    item: BioDriveListItemInfo;
    groupHeaderText?: string;
    onItemSelected: (item: BioDriveListItemInfo) => void;
}

interface BioDriveListItemState {

}

export class BioDriveListItem extends React.Component<BioDriveListItemProps, BioDriveListItemState> {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('click');
    }

    render() {
        return (
            <li className="bio-drive-list-item" onClick={this.handleClick}>
                <div className="item-date">
                    <div className="item-date-day">
                        <p>{Moment(this.props.item.date).format('DD MMM')}</p>
                    </div>
                </div>
                <div className="item-details">
                    <div className="item-header">{this.props.item.header}</div>
                    <div className="item-subheader">{this.props.item.subheader}</div>
                </div>
                <div className="item-description">{this.props.item.description}</div>
            </li>
        );
    }
}