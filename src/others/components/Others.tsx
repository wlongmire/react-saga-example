import * as React from 'react';
import {
    TextInputTemplate,
} from '../../common/UIComponents';

import './Others.css'
export class OthersComponent extends React.Component<{}, {}>{
    render(){
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