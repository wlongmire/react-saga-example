import * as React from 'react';

import './BiodriveListGroupHeader.css';

interface BiodriveListGroupHeaderProps {
    name?: string;
}

const BiodriveListGroupHeader: React.SFC<BiodriveListGroupHeaderProps> = (props) => {
    return (
        <li className="list-group-header-item">
            <div className="list-group-header-item-text">{props.name}</div>
        </li>
    );
};

export default BiodriveListGroupHeader;