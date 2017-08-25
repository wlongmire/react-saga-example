import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { VisitStatus, VisitProviderType, VisitType } from '../../../common/models';
import TableInputs from '../common/TableInputs';
import TableTemplate from '../common/TableTemplates';


import './Visit.css';

const style = {
  backgroundColor: '#f84445',
  width: '70%',
  marginBottom: '1em',
}

const btnStyle = {
    backgroundColor: '#f84445'
}
const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const getOptions = (stringEnumObject: object) => {
    return Object.keys(stringEnumObject);
}

const labelStyles = {
    width: 'auto'
}

interface VisitDrawerProps {
    className?: string;
}


export class VisitDrawer extends React.Component<VisitDrawerProps, {}>{
    constructor(){
        super()
        this.handleSubmitVisit = this.handleSubmitVisit.bind(this);
    }

    handleSubmitVisit(event:any){
        event.preventDefault();
        let fields = ['status', 'visit_type', 'maintenance-physical', 'maintenance-pap-smear','doctor', 'doctor-type','location',
        'time','complaints'];
        fields.forEach((field:string)=>{
            console.log(event.target[field].value)
        })

    }
    render(){
        return(
            <form id="visit-drawer" onSubmit={this.handleSubmitVisit} className={this.props.className}> 
            <AutoComplete
                    id="status"
                    name="status"
                    floatingLabelText="Status"
                    filter={AutoComplete.noFilter}
                    openOnFocus={true}
                    dataSource={getOptions(VisitStatus)}
                    menuProps={menuProps}
            />
            <AutoComplete
                    name="visit_type"
                    floatingLabelText="Visit Type"
                    filter={AutoComplete.noFilter}
                    openOnFocus={true}
                    dataSource={getOptions(VisitType)}
            />
            <div className="maintenance-section">
                <span>Maintenance</span>
                <Checkbox  labelStyle={labelStyles}/>
                <Checkbox  labelStyle={labelStyles}/>
            </div>
            <TextField
                name="doctor"
                floatingLabelText="Doctor"
                defaultValue="Dr. Venis Wilder"
            />
            <AutoComplete
                    name="doctor-type"
                    floatingLabelText="Doctor Type"
                    filter={AutoComplete.noFilter}
                    openOnFocus={true}
                    dataSource={getOptions(VisitProviderType)}
            />
            <TextField
                name="location"
                floatingLabelText="Location"
                hintText="Nairobi Area"
            />
            <DatePicker 
                name="date" 
                hintText="Date"/>
            <TimePicker
                name="time"
                hintText="Intended Time"
            />
            <TextField
                name="complaints"
                hintText="Complaints"
                multiLine={true}
                rows={2}
            />
            <TableInputs/>
            <TableTemplate
                headerTitle="Systems Review"
            />
            <TextField
                name="subjective"
                hintText="Subjective"
                multiLine={true}
                rows={2}
            />
            <TextField
                name="objective"
                hintText="Objective"
                multiLine={true}
                rows={2}
            />
            <TextField
                name="assessments"
                hintText="Assessments"
                multiLine={true}
                rows={2}
            />
             <TextField
                name="next-steps"
                hintText="Next Steps"
                multiLine={true}
                rows={2}
            />
            <TableTemplate
                headerTitle="Follow Ups"
            />
            <TableTemplate
                headerTitle="Internal Notes"
            />
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
