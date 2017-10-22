import * as React from 'react';
import * as Moment from 'moment';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './FormDateTimeControl.css';

interface FormDateTimeControlProps {
    date: Moment.Moment
    floatingLabelText?: string;
    onChange: (value: Moment.Moment) => void;
}

interface FormDateTimeControlState {
    value: Moment.Moment;
    timeStops: Array<Moment.Moment>;
    selectedTimeStop?: Moment.Moment;
}

let FaCalendar = require('react-icons/lib/fa/calendar');

const selectStyle = {
    width: '100%'
};

const underlineStyle = {
    borderColor: '#ffffff'
};

const labelStyle = {
    paddingLeft: 15,
    paddingRight: 15
};

export class FormDateTimeControl extends React.Component<FormDateTimeControlProps, FormDateTimeControlState> {

    private dateInput: HTMLInputElement | null;

    constructor() {
        super();

        this.state = {
            value: Moment(),
            timeStops: this.calculateTimeStops()
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleOpenDatePicker = this.handleOpenDatePicker.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    calculateTimeStops(): Array<Moment.Moment> {
        let timeStops: Array<Moment.Moment> = [];
        let startTime = Moment().startOf('day');

        while (startTime <= Moment().endOf('day')) {
            timeStops.push(Moment(startTime));
            startTime.add(15, 'm');
        }
        
        return timeStops;
    }

    componentDidMount() {
        let moment = Moment(this.props.date);
        if (this.props.date) {
            let v = moment.add(15 - moment.minute() % 15, 'm');
            this.setState({
                value: v,
                selectedTimeStop: this.findNearest(moment)
            }, () => {
                if (!this.dateInput) return;
                this.dateInput.value = this.state.value.format('M/D/YYYY');
            });
        }
    }

    findNearest(m: Moment.Moment): Moment.Moment {
        const computedNearest = m.add(15 - m.minute() % 15, 'm');
        const found = this.state.timeStops.find((timeStop) => {
            return timeStop.isSame(computedNearest, 'minute');
        });
        return found || m;
    }

    handleDateChange(e: any) {
        let m = Moment(e.target.value);
        if (!m.isValid()) return;

        if (this.state.selectedTimeStop) {
            let next = Moment(m.set({
                'hour': this.state.selectedTimeStop.hour(), 
                'minute': this.state.selectedTimeStop.minute()
            }));
            this.setState({
                value: next
            }, () => {
                if (this.props.onChange) {
                    this.props.onChange(this.state.value);
                }
            });
        }
    }

    handleOpenDatePicker() {
        console.log('here');

    }

    handleTimeChange(event: object, index: number, value: any) {
        let val = value as Moment.Moment;
        let next = Moment(this.state.value.set({'hour': val.hour(), 'minute': val.minute()}));
        this.setState({
            selectedTimeStop: val,
            value: next
        }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.state.value);
            }
        });
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
                        onChange={this.handleDateChange}
                        ref={(el) => this.dateInput = el }
                    />

                    <i>
                        <FaCalendar 
                            className="date-selector-icon"
                        />
                    </i>
                </div>
                <div className="date-control-time-selector-wrapper">
                <SelectField
                    className="select-control-field"
                    floatingLabelText={this.props.floatingLabelText}
                    value={this.state.selectedTimeStop}
                    onChange={this.handleTimeChange}
                    style={selectStyle}
                    labelStyle={labelStyle}
                    underlineFocusStyle={underlineStyle}
                    underlineStyle={underlineStyle}
                >
                    {
                        this.state.timeStops.map((timeStop, index) => {
                            return (<MenuItem key={index} className="select-control-option" value={timeStop} primaryText={timeStop.format('h:mm A')} />)
                        })
                    }
                </SelectField>
                </div>
            </div>
        </div>);
    }
}