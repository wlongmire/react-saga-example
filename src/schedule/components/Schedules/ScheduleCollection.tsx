import * as React from 'react';
import './styles.css';

interface ISchedule {
    time: string;
    description: string;
    avatar: string;


}
interface P {
    schedules: Array<ISchedule>;
    date: string;
}


const ScheduleCollection = (props: P) => {
    return (
        <ul>
            <span className="schedule-date">{props.date}</span>
            {
                props.schedules.map((schedule: ISchedule, index:number) => {
                    return (
                        <div key={index}>
                        <li className="schedule-item">
                            <div className="schedule-details">
                                <span className="schedule-time">{schedule.time}</span>
                                <span className="schedule-desc">{schedule.description}</span>
                            </div>
                            <div>
                                <img className="patient-avatar" src={schedule.avatar}/>
                            </div>
                        </li>
                        </div>
                        )
                })
            }
        </ul>
    )
}


export default ScheduleCollection;
