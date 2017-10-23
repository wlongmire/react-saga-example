import * as React from 'react';

import './FormGroup.css';

interface FormGroupProps {

}

export const FormGroup: React.SFC<FormGroupProps> = (props) => {
    return (
        <div className="lc-form-group">
            {props.children}
        </div>
    );
}