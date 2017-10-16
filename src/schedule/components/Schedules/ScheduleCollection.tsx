import * as React from 'react';
import './styles.css';

interface Schedule {
    time: string;
    description: string;
    avatar: string;
}

interface ScheduleCollectionProps {
    schedules: Array<Schedule>;
    date: string;
}

const ScheduleCollection = (props: ScheduleCollectionProps) => {
    return (
        <ul>
            <span className="schedule-date">{props.date}</span>
            {
                props.schedules.map((schedule: Schedule, index: number) => {
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
                    );
                })
            }
        </ul>
    );
};

export default ScheduleCollection;