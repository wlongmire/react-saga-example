import * as React from 'react';

import './BioDriveListGroupHeader.css';

interface BioDriveListGroupHeaderProps {
    name?: string;
}

export const BioDriveListGroupHeader: React.SFC<BioDriveListGroupHeaderProps> = (props) => {
    return (<li className="list-group-header-item"><div className="list-group-header-item-text">{props.name}</div></li>)
}