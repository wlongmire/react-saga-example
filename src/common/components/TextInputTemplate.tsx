import * as React from 'react';
import TextField from 'material-ui/TextField';

import './TextInputTemplate.css';

interface TextInputTemplateProps {
    title?: string;
    multiLine: boolean;
    rows: number;
    defaultValue?: string;
    name: string;
    hintText?: string;
    inputHeight?: string;
    floatingText?: string;
    value?: string;
    onChange?: (value: string) => void;
}

interface TextInputTemplateState {
    value: string;
}

const underlineStyle = {
    display : 'none'
};

export class TextInputTemplate extends React.Component<TextInputTemplateProps, TextInputTemplateState> {
    
    constructor(props: TextInputTemplateProps) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.value) {
            this.setState({
                value: this.props.value
            });
        }
    }

    componentWillReceiveProps(props: TextInputTemplateProps) {
        if (props.value) {
            this.setState({
                value: props.value
            });
        }
    }

    handleChange(event: any) {
        this.setState({
            value: event.target.value
        },            () => {
            if (this.props.onChange) {
                this.props.onChange(this.state.value);
            }
        }); 
    }   

    render() {
        let inputHeight = '58px' || this.props.inputHeight;
        return(
            <div>
                <span className="input-title">{this.props.title}</span>
                <TextField
                    style={{
                        border: '1px solid #C6D3D1',
                        position: 'relative',
                        padding: '1em',
                        width: '100%',
                        height: {inputHeight},
                        borderRadius: '3px',
                    }}
                    onChange={this.handleChange}
                    floatingLabelText={this.props.floatingText}
                    underlineStyle={underlineStyle} 
                    name={this.props.title}
                    multiLine={this.props.multiLine}
                    rows={this.props.rows}
                    defaultValue={this.props.defaultValue || ''}
                    hintText={this.props.hintText || ''}
                    value={this.state.value}
                />
            </div>
        );
    }
}