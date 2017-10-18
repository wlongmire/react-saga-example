import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './FormSelectControl.css';

interface FormSelectControlProps {
    label: string;
    floatingLabelText?: string;
    options: Array<FormSelectControlOption>;
    value?: any;
    onValueChanged?: (value: any) => void;
}

interface FormSelectControlState {
    value: any;
}

export interface FormSelectControlOption {
    value: any;
    text: string;
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

export class FormSelectControl extends React.Component<FormSelectControlProps, FormSelectControlState> {

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

    componentWillReceiveProps(props: FormSelectControlProps) {
        if (props.value) {
            this.setState({value: props.value});
        }
    }

    handleChange(event: object, index: number, value: any) {
        this.setState({value}, () => {
            if (this.props.onValueChanged)
                this.props.onValueChanged(value);
        });
    }

    render() {
        return (
            <div className="form-select-control">
                <div className="form-control-label">{this.props.label}</div>
                <SelectField
                    className="select-control-field"
                    floatingLabelText={this.props.floatingLabelText}
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={selectStyle}
                    labelStyle={labelStyle}
                    underlineFocusStyle={underlineStyle}
                    underlineStyle={underlineStyle}
                >
                    {
                        this.props.options.map((option) => {
                            return (<MenuItem key={option.value} className="select-control-option" value={option.value} primaryText={option.text} />)
                        })
                    }
                </SelectField>
            </div>
        )
    }
}