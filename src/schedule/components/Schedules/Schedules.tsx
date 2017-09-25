import * as React from 'react';
import {CollatedSchedules} from './CollatedSchedules';
// import {Navigation} from '../../../navigation/components/Navigation';
import  {ScheduleDropDown} from '../../../common/UIComponents';
import * as FloatingBtn from '../../../common/UIComponents';
import * as Visits from '../../../visits';



import './styles.css';

const scheduleData = {
        "Doctor 1": {
            "Monday Jan 17":[
                {
                "time": "10pm -10:30pm",
                "description": "Visit with Logan Smith",
                "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                },
                {
                "time": "11pm -11:30pm",
                "description": "Visit with Nia Lee",
                "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
            }
            ],
            "Tuesday Jan 18":[
                {
                    "time": "8pm - 8:30pm",
                    "description": "Visit with Muhammad Arfat",
                    "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                    },
                    {
                    "time": "9pm -10:30pm",
                    "description": "Visit with Toby Jackson",
                    "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                }
            ]

        },
        "Doctor 2": {
            "Tuesday Jan 27":[
                {
                "time": "10pm -10:30pm",
                "description": "Visit with Logan Smith",
                "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                },
                {
                "time": "11pm -11:30pm",
                "description": "Visit with Nia Lee",
                "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
            }
            ],
            "Wednesday Jan 28":[
                {
                    "time": "8pm - 8:30pm",
                    "description": "Visit with Emmanuel Attoh",
                    "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                    },
                    {
                    "time": "9pm -10:30pm",
                    "description": "Visit with Toby Jackson",
                    "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                }
            ]

        },

        "Doctor 3": {
            "Tuesday Feb 4":[
                {
                "time": "1pm -1:30pm",
                "description": "Visit with Faiz Rashid",
                "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                },
                {
                "time": "2pm - 2:30pm",
                "description": "Visit with Nia Lee",
                "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
            }
            ],
            "Thursday Feb 6":[
                {
                    "time": "8pm - 8:30pm",
                    "description": "Visit with Kimani Ndegwa",
                    "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                    },
                    {
                    "time": "9pm -10:30pm",
                    "description": "Visit with RK Sharma",
                    "avatar":"https://lh3.googleusercontent.com/-BG6ovFezOrI/AAAAAAAAAAI/AAAAAAAAAAA/APJypA22mcSVvpIe38npGJvOFfpV5gUHng/s64-c-mo/photo.jpg",
                }
            ]
        }
}

const getCurrentDoctorSchedule = (scheduledData:object, currentDoctorClicked:string) => {
    let payloadKeys = Object.keys(scheduledData);
    let currentDoctorSchedule = payloadKeys.filter((k:string)=>{
        return k === currentDoctorClicked;
    })
    return scheduleData[currentDoctorSchedule[0]];

}

const stubbedData = {
    'doctor': [
        {value:1, primaryText:"Doctor 1"},
        {value:2, primaryText:"Doctor 2"},
        {value:3, primaryText:"Doctor 3"}
    ]
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
interface S {
    value : number;
    payload: object;
    doctorSchedule ?: object;
    open: boolean

}

export class Schedules extends React.Component<{}, S>{

    constructor(){
        super();
        this.state = {
            value: 1,
            payload: {},
            doctorSchedule : scheduleData['Doctor 1'],
            open:false
        }
    }

    handleChange = (event:any, index:number, value:number) => {
    this.setState({value});
    }

        
    _handleClickAddButton = () => {
        this.setState({
            open: !this.state.open
        })
    }
    onPlainTextDropDownChange = (name:string) => (v:number) =>{
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [name]: getNamedValue(name, v)
            }
        }))

        let doctorData = getCurrentDoctorSchedule(scheduleData, getNamedValue(name,v));
        this.setState({
            doctorSchedule: doctorData
        })

    }
    _closeVisitsModal = (e: any) => {
        if(e.target.id == 'add-visit-modal'){
            this.setState({
                open: false
            })
        }
    }

    _closeModal = () => {
        this.setState({
            open:false
        })
    }

    render(){
            return(
            <div>
            {/* <Navigation/> */}

            <div className="dropDown">
                <span className="dd-title">Schedule</span>
             
            <ScheduleDropDown
                title=""
                dataArray={
                stubbedData.doctor
                }
                onChange={this.onPlainTextDropDownChange('doctor')}
            />

            </div>
                <CollatedSchedules
                    schedule={this.state.doctorSchedule}
                />
                {this.state.open && <div id="add-visit-modal" onClick={this._closeVisitsModal}>
                    <div className="visit-content">
                        <div className="visit-modal-header">
                            <span>Add Visit</span>
                            <span className="close" onClick={this._closeModal}>X</span>
                        </div>
                        <div className="visits-body">
                        <Visits.Components.VisitDrawer
                            enclosingIdName="schedule-drawer"
                        />
                        </div>
                    </div>
                </div>
                }
                <div id="add-event-btn" >
                        <div>
                        <FloatingBtn.FloatingBtn
                        onClick={this._handleClickAddButton}
                        />
                        </div>
                        
                </div>
            
            </div>
        )
    }
}