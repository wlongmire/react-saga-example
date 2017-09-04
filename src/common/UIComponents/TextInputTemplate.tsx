import * as React from 'react';
import TextField from 'material-ui/TextField';

import './TextInputTemplate.css';

interface P {
    title ?: string;
    multiLine : boolean;
    rows: number;
    defaultValue ?: string;
    name: string;
    hintText?: string;
    inputHeight?: string;
    floatingText?:string
}

const underlineStyle = {
    display : "none"
}



export class TextInputTemplate extends React.Component<P, {}>{
    render(){
        let inputHeight = "58px" || this.props.inputHeight;
        return(
            <div>
                <span className="input-title">{this.props.title}</span>
                <TextField
                style={{
                    border:'2px solid #dedede',
                    position: "relative",
                    right: ".5em",
                    padding: "1em",
                    width:'90%',
                    height:{inputHeight},
                    borderRadius: "3px",
                }}
                floatingLabelText={this.props.floatingText}
                underlineStyle={underlineStyle} 
                name={this.props.title}
                multiLine={this.props.multiLine}
                rows={this.props.rows}
                defaultValue={this.props.defaultValue || ''}
                hintText={this.props.hintText || ''}
                />
            </div>
        )
    }
}