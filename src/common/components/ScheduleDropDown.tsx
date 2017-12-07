import * as React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import './Common.css';

interface S {
    value: number;
}

interface DropDownTemplateProps {
    title?: string;
    dataArray: DataObject[];
    onChange: (v: number, s: string) => void;
    leftCaretPosition ?: number;
}

interface DataObject {
    value: number;
    primaryText: string;
}

const underlineStyle = {
    display: 'none'
};

export class ScheduleDropDown extends React.Component<DropDownTemplateProps, S> {
    constructor() {
        super();
        this.state = { value: 1 };
    }

    handleChange = (event: any, index: number, value: number) => {
        this.setState({ value }, () => {
            this.props.onChange(this.state.value, this.getText(this.state.value));
        });
    }

    render() {
        return (
            <div className="schedule-dropdown-component">
                <span className="schedule-dropdown-label">{this.props.title}</span>
                <div className="schedule-dropdown-value">
                <DropDownMenu 
                    iconStyle={{left: 160}}
                    underlineStyle={underlineStyle}
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    {
                        this.props.dataArray.map((data: DataObject, index: number) => {
                            return (
                                <MenuItem key={index} value={data.value} primaryText={data.primaryText} />
                            );
                        })
                    }
                </DropDownMenu>
                </div>
            </div>
        );
    }

    private getText =  (value: number): string => {
        const foundData = this.props.dataArray.find((data: DataObject) => data.value === value);
        return (foundData && foundData.primaryText) || ''; // potential bug
    }
}