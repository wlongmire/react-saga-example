import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
    DropDownTemplate, 
    TextInputTemplate,
    TableTemplate
} from '../../../common/components';
import DatePicker from 'material-ui/DatePicker';
let FileInput = require('react-file-input');
let FaAttachment = require('react-icons/lib/md/attach-file');
let FaCalendar = require('react-icons/lib/fa/calendar');



import './styles.css';

const btnStyle = {
    backgroundColor: '#f84445'
}

const underlineStyle = {
    display : "none"
}

const style = {
    backgroundColor: '#f84445',
    marginBottom: '1em',
}

const stubbedData = {
    'patient': [
        {value:1, primaryText:"Pete Patient"},
        {value:2, primaryText:"Doctor Dre"}
    ],
    'status': [
        {value:1, primaryText:"New"},
        {value:2, primaryText:"Scheduled"},
        {value:3, primaryText:"Process Visit"},
        {value:4, primaryText:"Finalized"},
        {value:5, primaryText:"Cancelled"}
    ],
    'location': [
        {value:1, primaryText:"Nomad LifeCo, 79 Madison Ave, New York, NY10016"},
    ],
    'timeChoice': [
        {value:1, primaryText:"A.M"},
        {value:2, primaryText:"P.M"},
    ],
    'actualTime': [
        {value:1, primaryText:"6:30A.M"},
        {value:2, primaryText:"6:30P.M"},

    ],
    'imagingType': [
        {value:1, primaryText:"CAT Scan"},
        {value:2, primaryText:"MRI"},

    ],
    

}

interface S {
    payload : object
}

interface P {
    closeImagingCard: () => void;
}
const getNamedValue = (name:string, v?:number) => {
    let theArrays = Object.keys(stubbedData);
    let targetArray = theArrays.filter((s:any)=>{
        return s === name
    })
    let arrayVal = stubbedData[targetArray[0]];
    let actualValue = arrayVal.filter((a:any) =>{
        return a.value === v
    })

    return actualValue[0].primaryText;

}

export class AddImageSection extends React.Component<P, S>{
    constructor(){
        super()
        this.state = {
            payload : {}
        }
    }

    _handleSubmit = () => {
        
    }

    onPlainTextDropDownChange = (name:string) => (v:number) =>{
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [name]: getNamedValue(name, v)
            }
        }))
    }

    onTableTemplateChange = (templateName:string) => (items: object[]) => {
        this.setState(prevState => ({
            payload : {
                ...prevState.payload,
                [templateName]: items
            }
        }))
    }

    handleChange = (event:any) => {
        
    }

    onChipDropDownChange = (name:string) => (v:number, s:string) => {
        let st = Object.assign({}, this.state.payload);
        if(!st[name]) st[name] = [];
        st[name].push(s);
        this.setState({
            payload: st
        })
    };

    render(){
        return(
            <form id='image-section' onSubmit={this._handleSubmit}>
            <span className="test-add-new"> Add New Image</span>
            <DropDownTemplate
                title="Status"
                dataArray={
                   stubbedData.status
                }
                onChange={this.onPlainTextDropDownChange('status')}
            />
            <DatePicker 
                name="date" 
                hintText="Date Created"
                style={{
                    textAlign:"left",
                    position:"relative",
                    left:'2em',
                    marginBottom:'.5em'
                    }}
                />
            <TextInputTemplate
                name="patient-name"
                title="Patient Name"
                multiLine={false}
                rows={1}
                defaultValue={"Pete Patient"}
            />

            <DropDownTemplate
                title="Imaging Type"
                dataArray={
                stubbedData.imagingType
                }
                onChange={this.onPlainTextDropDownChange('imagingType')}
            />

            
                <div className="scheduled-time-section">
                    <span className="scheduled-title">Scheduled Date and Time</span>
                    <div className="scheduled-time">
                    <div className="scheduled-date-box">
                    <DatePicker 
                        hintText="Scheduled Date" 
                        name="scheduled-date"
                        underlineStyle={underlineStyle}
                        style={{
                        textAlign:"left",
                        position:"relative",
                        left:'2em',
                        marginBottom:'.5em',
                        }}/>
                    <div className="calendar-icon-schedule">
                        <FaCalendar/>
                    </div>
                    </div>
                    <div>
                    <DropDownTemplate
                        title=""
                        dataArray={
                        stubbedData.actualTime
                        }
                        onChange={(value, text) => this.onChipDropDownChange('actual-time')(value, text) }
                    />
                    </div>
                    <div>
                    <DropDownTemplate
                        title=""
                        dataArray={
                        stubbedData.timeChoice
                        }
                        onChange={(value, text) => this.onChipDropDownChange('time-choice')(value, text) }
                    />
                    </div>
                    </div>
            </div>


             <DropDownTemplate
                title="Imaging Location"
                dataArray={
                stubbedData.location
                }
                onChange={this.onPlainTextDropDownChange('location')}
            />

            <div className="file-input-section">
            <FileInput name="Add attachment"
                   accept=".png,.gif"
                   placeholder="Add attachment"
                   className="inputClass"
                   onChange={this.handleChange} />
            <div className="att-icon">
            <FaAttachment/>
            </div>
            </div>

            <TextInputTemplate
                name="public-note"
                title="Public Note"
                multiLine={true}
                rows={2}
                hintText={"Type Something ..."}
            />

            <TableTemplate
                onChange={this.onTableTemplateChange('internal-notes')}
                headerTitle="Internal Notes"
            />
            <br/>
            
            <RaisedButton 
                onClick={this.props.closeImagingCard}
                label="cancel"
            />
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

