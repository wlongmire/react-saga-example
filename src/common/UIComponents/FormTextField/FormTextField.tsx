import * as React from 'react';
import * as classnames from 'classnames';
import TextField from 'material-ui/TextField';

import './FormTextField.css';

interface FormTextFieldProps {
    className?: string;
    name: string;
    label?: string;
    floatingLabelText?: string;
    value?: any;
    onValueChanged?: (value: any) => void;
    multiLine?: boolean;
    rows?: number;
}

interface FormTextFieldState {
    value: any;
}

const selectStyle = {
    width: '100%'
};

const inputStyle = {
    paddingLeft: 15,
    paddingRight: 15
};

export class FormTextField extends React.Component<FormTextFieldProps, FormTextFieldState> {
    
    constructor() {
        super();

        this.state = {
            value: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.value) {
            this.setState({value: this.props.value});
        }
    }

    componentWillReceiveProps(props: FormTextFieldProps) {
        if (props.value) {
            this.setState({value: props.value});
        }
    }

    handleChange(event: object, value: any) {
        this.setState({value}, () => {
            if (this.props.onValueChanged)
                this.props.onValueChanged(value);
        });
    }

    render() {
        return (
            <div className={classnames('form-text-field', this.props.className ? this.props.className : '')}>
                { this.props.label &&
                    <div className="form-control-label">{this.props.label}</div>
                }
                <TextField
                    className="form-control-field"
                    name={this.props.name}
                    floatingLabelText={this.props.floatingLabelText}
                    value={this.state.value || ''}
                    onChange={this.handleChange}
                    style={selectStyle}
                    inputStyle={inputStyle}
                    underlineShow={false}
                    multiLine={this.props.multiLine}
                    rows={this.props.rows}
                />
            </div>
        );
    }
}