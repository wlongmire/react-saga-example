import * as React from 'react';

import './Wellness.css';
import {
    // TableInputs, 
    // TableTemplate,
    // DropDownTemplate, 
    // TextInputTemplate,
    // ChipCollection,
    TableGoalTemplate
} from '../../common/UIComponents';


interface S {
    payload: object
}



export class WellnessComponent extends React.Component<{}, S>{
    constructor(){
        super();
        this.state = {
            payload: {}
        }
    }
    
    
    onTableTemplateChange = (templateName:string) => (items: object[]) => {
        this.setState(prevState => ({
            payload : {
                ...prevState.payload,
                [templateName]: items
            }
        }))
    }
    
    render(){
        return(
            <div>
                <TableGoalTemplate
                    headerTitle="Goals"
                    onChange={this.onTableTemplateChange('goals')}
                />
                
            </div>
        )
    }
}