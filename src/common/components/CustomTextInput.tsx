import * as React from 'react';
import TextField from 'material-ui/TextField';
import './Common.css';

const underlineStyle = {
    display: 'none'
};

interface P {
    title ?: string;
    multiLine: boolean;
    rows: number;
    defaultValue ?: string;
    name: string;
    hintText?: string;
    inputHeight?: string;
    floatingText?: string;
}

export class CustomTextInput extends React.Component<P, {}> {
    render() {
        return(
            <TextField
                style={{width: '100%', borderBottom: '1px solid black'}}
                floatingLabelText={this.props.floatingText}
                underlineStyle={underlineStyle}
                name={this.props.name}
                multiLine={this.props.multiLine}
                rows={this.props.rows}
                defaultValue={this.props.defaultValue || ''}
                hintText={this.props.hintText || ''}
            />
        );
    }
}