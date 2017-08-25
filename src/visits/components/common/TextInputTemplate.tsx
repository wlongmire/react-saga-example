import * as React from 'react';
import TextField from 'material-ui/TextField';

import './TextInputTemplate.css';

interface P {
    title : string;
    multiLine : boolean;
    rows : number
    name: string;
}

const underlineStyle = {
    display : "none"
}

export default class TextInputTemplate extends React.Component<P, {}>{
    render(){
        return(
            <div>
                <span className="input-title">{this.props.title}</span>
                <TextField
                style={{
                    border:'1px solid #dedede',
                    position: "relative",
                    right: ".5em",
                    width:'90%',
                    borderRadius: "3px"
                }}
                underlineStyle={underlineStyle} 
                name={this.props.title}
                multiLine={this.props.multiLine}
                rows={this.props.rows}
                />
            </div>
        )
    }
}