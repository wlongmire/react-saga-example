import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Wellness.css';
import {
    // TableInputs, 
    // TableTemplate,
    // DropDownTemplate, 
    TextInputTemplate,
    // ChipCollection,
    TableGoalTemplate,
    DateTimeDropDownTemplate
} from '../../common/UIComponents';


interface S {
    payload: object
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
                    hintText={"Type Something ..."}
                />
                <TextInputTemplate
                    name="wellness-sleep"
                    title="Sleep"
                    multiLine={true}
                    rows={2}
                    hintText={"Type Something ..."}
                />
                <TextInputTemplate
                    name="wellness-behavioral"
                    title="Behavioral"
                    multiLine={true}
                    rows={2}
                    hintText={"Type Something ..."}
                />
                <TextInputTemplate
                    name="wellness-community"
                    title="Community"
                    multiLine={true}
                    rows={2}
                    hintText={"Type Something ..."}
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
        )
    }
}