import * as React from 'react';
import ScheduleCollection from './ScheduleCollection';
import './styles.css';

interface P {
    schedule: any;
}

export const CollatedSchedules = (props: P) => {
    let scheduleDataKeys = Object.keys(props.schedule);
    return (
        <div>
            {scheduleDataKeys.map((k: string, index: number) => {
                return(
                    <ScheduleCollection
                        key={index}
                        date={k}
                        schedules={props.schedule[k]}
                    />
                );
            })}
        </div>
    );
};
