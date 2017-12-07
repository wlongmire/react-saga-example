import * as React from 'react';
import { BiodriveListItemInfo } from '../../reducer';
import * as Moment from 'moment';

import './BiodriveListItem.css';

interface BiodriveListItemProps {
    item: BiodriveListItemInfo;
    groupHeaderText?: string;
    onClick: (item: BiodriveListItemInfo) => void;
}

interface BiodriveListItemState {

}

class BiodriveListItem extends React.Component<BiodriveListItemProps, BiodriveListItemState> {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.item);
        }
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

export default BiodriveListItem;