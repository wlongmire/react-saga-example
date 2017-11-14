import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {
    TextInputTemplate,
    TableGoalTemplate,
    DateTimeDropDownTemplate
} from '../../common/components';

import './Wellness.css';

interface S {
    payload: object;
}

interface WellnessProps {
    wellness: any;
    loadAllWellness: () => void;
}

const style = {
    backgroundColor: '#f84445',
    width: '30%',
    marginBottom: '1em',
    marginLeft: '3rem'
}

const btnStyle = {
    backgroundColor: '#f84445',
}

class Wellness extends React.Component<WellnessProps, S> {
    state = {
        payload: {}
    };
    
    componentDidMount() {
        this.props.loadAllWellness();
    }
    
    onTableTemplateChange = (templateName: string) => (items: object[]) => {
        this.setState(prevState => ({
            payload : {
                ...prevState.payload,
                [templateName]: items
            }
        }));
    }
    
    render() {
        return(
            <form>
                <TableGoalTemplate
                    headerTitle="Goals"
                    onChange={this.onTableTemplateChange('goals')}
                />
                <DateTimeDropDownTemplate
                    headerTitle="Maintenance"
                    domain="maintenance"
                    onChange={this.onTableTemplateChange('maintenance')}
                />
                <DateTimeDropDownTemplate
                    headerTitle="Immunzation"
                    domain="immunization"
                    onChange={this.onTableTemplateChange('immunization')}
                />
                <div className="bottom-section-wellness">
                <TextInputTemplate
                    name="wellness-activity"
                    title="Activity"
                    multiLine={true}
                    rows={2}
                    hintText={'Type Something ...'}
                />
                <TextInputTemplate
                    name="wellness-sleep"
                    title="Sleep"
                    multiLine={true}
                    rows={2}
                    hintText={'Type Something ...'}
                />
                <TextInputTemplate
                    name="wellness-behavioral"
                    title="Behavioral"
                    multiLine={true}
                    rows={2}
                    hintText={'Type Something ...'}
                />
                <TextInputTemplate
                    name="wellness-community"
                    title="Community"
                    multiLine={true}
                    rows={2}
                    hintText={'Type Something ...'}
                />
                </div>
                <br/>
                <RaisedButton 
                    secondary={true}
                    type="submit" 
                    buttonStyle={btnStyle} 
                    style={style} 
                    label="save"
                />
            </form>
        );
    }
}

export default Wellness;