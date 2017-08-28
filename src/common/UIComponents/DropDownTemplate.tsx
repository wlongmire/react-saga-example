import * as React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import './Common.css'

interface S {
    value: number
}

interface DropDownTemplateProps {
    title: string;
    dataArray: dataObject[];
    onChange: (v: number, s : string) => void;
}

interface dataObject {
    value: number;
    primaryText: string;
}

const underlineStyle = {
    display: "none"
}

export class DropDownTemplate extends React.Component<DropDownTemplateProps, S>{
    constructor() {
        super();
        this.state = { value: 1 };
    }

    handleChange = (event: any, index: number, value: number) =>
        this.setState({ value }, () => {
            this.props.onChange(this.state.value, this.getText(this.state.value))
        });

    private getText =  (value: number): string => {
        const foundData = this.props.dataArray.find((data: dataObject) => data.value === value);
        return (foundData && foundData.primaryText) || ""; //potential bug
    }

    render() {
        return (
            <div>
                <span className="dropdown-label">{this.props.title}</span>
                <div className="dropdown-value">
                <DropDownMenu 
                iconStyle={{left:650}}
                underlineStyle={underlineStyle} 
                value={this.state.value} 
                onChange={this.handleChange}>
                    {
                        this.props.dataArray.map((data: dataObject, index: number) => {
                            return (
                                <MenuItem key={index} value={data.value} primaryText={data.primaryText} />
                            )
                        })
                    }
                </DropDownMenu>
                </div>
            </div>
        );
    }
}