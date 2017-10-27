import * as React from 'react';
import * as Moment from 'moment';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './FormDateTimeControl.css';

interface FormDateTimeControlProps {
    label?: string;
    date?: Moment.Moment
    floatingLabelText?: string;
    onChange: (value: Moment.Moment) => void;
}

interface FormDateTimeControlState {
    value: Moment.Moment;
    timeStops: Array<Moment.Moment>;
    selectedTimeStop?: Moment.Moment;
}

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
        if (!this.props.date) return;
        if (this.props.date) {
            let moment = this.props.date;
            this.setDate(moment);
        }
    }

    componentWillReceiveProps(props: FormDateTimeControlProps) {
        if (!props.date) return;
        if (props.date) {
            let moment = props.date;
            this.setDate(moment);
        }
    }

    setDate(moment: Moment.Moment) {
        this.setState({
            value: moment,
            selectedTimeStop: this.findMatchingStop(moment)
        }, () => {
            if (!this.dateInput) return;
            this.dateInput.value = this.state.value.format('M/D/YYYY');
        });
    }

    findMatchingStop(m: Moment.Moment): Moment.Moment {
        let baseDate = Moment({ hour: m.hour(), minute: m.minute(), seconds: m.seconds() });
        const found = this.state.timeStops.find((timeStop) => {
            return timeStop.isSame(baseDate, 'minute');
        });
        return found || m;
    }

    findNearest(m: Moment.Moment): Moment.Moment {
        let baseDate = Moment({ hour: m.hour(), minute: m.minute(), seconds: m.seconds() });
        const computedNearest = baseDate.add(15 - baseDate.minute() % 15, 'm');
        const found = this.state.timeStops.find((timeStop) => {
            return timeStop.isSame(computedNearest, 'minute');
        });
        return found || m;
    }

    handleDateChange(e: any) {
        let next = Moment(e.target.value);
        if (!next.isValid()) return;

        if (this.state.selectedTimeStop) {
            next = Moment(next.set({
                'hour': this.state.selectedTimeStop.hour(), 
                'minute': this.state.selectedTimeStop.minute()
            }));  
        } 
        this.setState({
            value: next
        }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.state.value);
            }
        });
    }

    handleOpenDatePicker() {
        
    }

    handleTimeChange(event: object, index: number, value: any) {
        let val = value as Moment.Moment;
        let current = this.state.value;
        let next = Moment(current.set({'hour': val.hour(), 'minute': val.minute()}));
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
            <div className="date-control-label">{this.props.label ? this.props.label : ''}</div>
            <div className="date-control-input-container">
                <div className="date-control-text-input-wrapper">
                    <input 
                        className="date-control-text-input" 
                        type="text" 
                        onChange={this.handleDateChange}
                        ref={(el) => this.dateInput = el }
                    />
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