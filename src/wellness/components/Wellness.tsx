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

import ApplicationState from '../../common';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from "redux";

import * as wellnessActions from '../actions';

interface S {
    payload: object
}

interface WellnessProps {
    wellness : any,
    loadAllWellness : () => void
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


class WellnessContainer extends React.Component<WellnessProps, S>{
    constructor(){
        super();
        this.state = {
            payload: {}
        }
    }
    
    componentDidMount(){
        this.props.loadAllWellness()
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

const mapStateToProps = (state: ApplicationState.IState) => {
    return {
        wellness : state.wellness,
    }
}

const mapDispatchToProps = (dispatch:Dispatch<{}>) => bindActionCreators(
    {
        loadAllWellness : wellnessActions.getAllWellness 
    },
    dispatch
)

export const WellnessComponent = connect<{}, WellnessProps, {}>(mapStateToProps, mapDispatchToProps)(WellnessContainer)