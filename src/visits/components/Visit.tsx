import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TableInputs from './common/TableInputs';


import './Visit.css';

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
    render(){
        return(
            <div  id="visit-drawer" className={this.props.className}> 
            <div className="header"> <p>New Visit</p></div>
            <AutoComplete
                    floatingLabelText="Status"
                    filter={AutoComplete.noFilter}
                    openOnFocus={true}
                    dataSource={dataSource}
                    menuProps={menuProps}
            />
            <AutoComplete
                    floatingLabelText="Visit Type"
                    filter={AutoComplete.noFilter}
                    openOnFocus={true}
                    dataSource={dataSource2}
            />
            <div className="maintenance-section">
                <span>Maintenance</span>
                <Checkbox label="Physical" labelStyle={labelStyles}/>
                <Checkbox label="Pap Smear" labelStyle={labelStyles}/>
            </div>
            <TextField
                floatingLabelText="Doctor"
                defaultValue="Dr. Venis Wilder"
            />
            <AutoComplete
                    floatingLabelText="Doctor Type"
                    filter={AutoComplete.noFilter}
                    openOnFocus={true}
                    dataSource={dataSource3}
            />
            <TextField
                floatingLabelText="Location"
                hintText="Nairobi Area"
            />
            <DatePicker hintText="Date"/>
            <TimePicker
                hintText="Intended Time"
            />
            <TextField
                hintText="Complaints"
                multiLine={true}
                rows={2}
            />
            <TableInputs/>
            </div>
        )
    }
}
