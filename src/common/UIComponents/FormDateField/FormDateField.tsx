import * as React from 'react';
import * as Moment from 'moment';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

import './FormDateField.css';

interface FormDateFieldProps {
    name: string;
    label: string;
    floatingLabelText?: string;
    value?: any;
    onValueChanged?: (value: any) => void;
}

interface FormDateFieldState {
    dateValue: any;
    timeValue: any;
}

const selectStyle = {
    width: '100%'
};

const inputStyle = {
    paddingLeft: 15,
    paddingRight: 15
};

const underlineStyle = {
    borderColor: '#ffffff'
};

const labelStyle = {
    paddingLeft: 15,
    paddingRight: 15
};

export class FormDateField extends React.Component<FormDateFieldProps, FormDateFieldState> {
    
    constructor() {
        super();

        this.state = {
            dateValue: null,
            timeValue: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.value) {
            let m = Moment(this.props.value);
            this.setState({
                dateValue: m.format('M/D/YYYY'),
                timeValue: m.format('h:mm A')
            });
        }
    }

    componentWillReceiveProps(props: FormDateFieldProps) {
        let m = Moment(this.props.value);
        this.setState({
            dateValue: m.format('M/D/YYYY'),
            timeValue: m.format('h:mm A')
        });
    }

    handleChange(event: object, value: any) {
        // this.setState({value}, () => {
        //     if (this.props.onValueChanged)
        //         this.props.onValueChanged(value);
        // });
    }

    render() {
        return (
            <div className="form-date-field">
                <div className="form-control-label">{this.props.label}</div>
                <TextField
                    className="form-date-text"
                    name={this.props.name}
                    floatingLabelText={this.props.floatingLabelText}
                    value={this.state.dateValue}
                    onChange={this.handleChange}
                    style={selectStyle}
                    inputStyle={inputStyle}
                    underlineShow={false}
                />
                <SelectField
                    className="select-control-field"
                    floatingLabelText={this.props.floatingLabelText}
                    value={this.state.timeValue}
                    onChange={this.handleChange}
                    style={selectStyle}
                    labelStyle={labelStyle}
                    underlineFocusStyle={underlineStyle}
                    underlineStyle={underlineStyle}
                >
                    {
                        {/* this.props.options.map((option) => {
                            return (<MenuItem key={option.value} className="select-control-option" value={option.value} primaryText={option.text} />)
                        }) */}
                    }
                </SelectField>
            </div>
        );
    }
}