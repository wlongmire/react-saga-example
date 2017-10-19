import * as React from 'react';
import * as Moment from 'moment';

import './FormDateTimeControl.css';

interface FormDateTimeControlProps {
    date?: Date
    onChange: (value: Date) => void;
}

interface FormDateTimeControlState {
    value?: Moment.Moment;
}

let FaCalendar = require('react-icons/lib/fa/calendar');

export class FormDateTimeControl extends React.Component<FormDateTimeControlProps, FormDateTimeControlState> {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        if (this.props.date) {
            this.setState({
                value: Moment(this.props.date)
            });
        }
    }

    render() {
        return (
        <div className="form-date-time-control">
            <div className="date-control-label">Created</div>
            <div className="date-control-input-container">
                <div className="date-control-text-input-wrapper">
                    <input 
                        className="date-control-text-input" 
                        type="text" 
                        value={this.state.value ? this.state.value.format("M/D/YYYY") : ''} 
                    />
                    <FaCalendar className="date-selector-icon" />
                </div>
                <div className="date-control-time-selector-wrapper">
                </div>
            </div>
        </div>);
    }
}