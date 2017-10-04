import * as React from 'react';
import { Link } from 'react-router-dom';

import './HeaderLabel.css';

const HeaderLabel = () => {
    return (
        <Link to="/" className="lifeco-label">LifeCo</Link>
        // <span className="lifeco-label">LifeCo</span>
    )
}

export default HeaderLabel;