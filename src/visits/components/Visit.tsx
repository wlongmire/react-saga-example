import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';

import TableInputs from './common/TableInputs';
import TableTemplate from './common/TableTemplates';


import './Visit.css';

const style = {
  backgroundColor: '#f84445',
  width: '70%',
  marginBottom: '1em',
}

const btnStyle = {
    backgroundColor: '#f84445'
}

const dataSource = ['New', 'Scheduled', 'Process Visit', 'Finalized'];
const dataSource2 = ['LifeCo', 'External', 'Procedure'];
const dataSource3 = ['Primary', 'Gynecologist', 'Dermatologist'];
const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const labelStyles = {
    width: 'auto'
}

export class VisitDrawerProps {
    className ?: string;

}
export class VisitDrawer extends React.Component<VisitDrawerProps, {}>{
    constructor(){
        super()

        this.handleSubmitVisit = this.handleSubmitVisit.bind(this);
    }

    handleSubmitVisit(event:any){
        event.preventDefault();
        // let fields = ['status', 'visit_type', 'maintenance-physical', 'maintenance-pap-smear', 
        //     'doctor', 'doctor-type', 'location', 'time','complaints', 'subjective', 'objective', 'assessment',
        // 'next-steps' ];
        let fields = ['status', 'visit_type', 'maintenance-physical', 'maintenance-pap-smear','doctor', 'doctor-type','location',
    'time','complaints'];
        fields.forEach((field:string)=>{
            console.log(event.target[field].value)
        })

    }
    render(){
        return(
            <form id="visit-drawer" onSubmit={this.handleSubmitVisit} className={this.props.className}> 
            <div className="header"> <p>New Visit</p></div>
            <AutoComplete
                    name="status"
                    floatingLabelText="Status"
                    filter={AutoComplete.noFilter}
                    openOnFocus={true}
                    dataSource={dataSource}
                    menuProps={menuProps}
            />
            <AutoComplete
                    name="visit_type"
                    floatingLabelText="Visit Type"
                    filter={AutoComplete.noFilter}
                    openOnFocus={true}
                    dataSource={dataSource2}
            />
            <div className="maintenance-section">
                <span>Maintenance</span>
                <Checkbox name="maintenance-physical" label="Physical" labelStyle={labelStyles}/>
                <Checkbox name="maintenance-pap-smear" label="Pap Smear" labelStyle={labelStyles}/>
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
                    dataSource={dataSource3}
            />
            <TextField
                name="location"
                floatingLabelText="Location"
                hintText="Nairobi Area"
            />
            <DatePicker name="date" hintText="Date"/>
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
            <RaisedButton secondary={true} type="submit" buttonStyle={btnStyle} style={style} label="save"/>
            </form>
        )
    }
}
