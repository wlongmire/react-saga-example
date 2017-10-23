import * as React from 'react';
import { Other } from '../../common';
import {
    TextInputTemplate,
} from '../../common/components';
import './Other.css';

interface OtherProps {
    other?: Other
}

interface OtherState {

}

export class OthersComponent extends React.Component<OtherProps, OtherState>{
    render() {
        return(
            <div className="others-component">
                <TextInputTemplate
                multiLine={true}
                name="social"
                title="Social"
                rows={2}
                />

                <TextInputTemplate
                multiLine={true}
                name="family"
                title="Family"
                rows={2}
                />

                <TextInputTemplate
                multiLine={true}
                name="allergies"
                title="Allergies"
                rows={2}
                />
                
            </div>
        )
    }
}