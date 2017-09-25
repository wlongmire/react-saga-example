import * as React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import './Common.css'

interface CustomDropDownState {
    selected: any;
}

export interface CustomDropDownProps {
    title?: string;
    itemSource: DropDownItem[];
    onChange: (v: DropDownItem) => void;
    leftCaretPosition ?: number;
    className?: string
}

export type DropDownItem = {
    value: any;
    primaryText: string;
}

const underlineStyle = {
    display: "none"
}

export class CustomDropDown extends React.Component<CustomDropDownProps, CustomDropDownState>{
    
    constructor() {
        super();
        this.state = {  
            selected: null
        };
    }

    handleChange = (event: any, index: number, value: any) => {
        // get the item with the index from the itemsSource
        const item = this.props.itemSource[index];

        this.setState({ selected: item}, () => {
            if (this.props.onChange)
                this.props.onChange(this.state.selected);
        });
    }

    // private getText =  (value: T): string => {
    //     const foundItem = this.props.itemSource.find((item: DropDownItem<T>) => item.value === value);
    //     return (foundItem && foundItem.primaryText) || ""; //potential bug
    // }

    render() {
        return (
            <div className="custom-dropdown-component">
                <span className="custom-dropdown-label">{this.props.title}</span>
                <div className="custom-dropdown-value">
                    <DropDownMenu 
                        className={this.props.className}
                        iconStyle={{left: 500}}
                        underlineStyle={underlineStyle} 
                        value={this.state.selected} 
                        onChange={this.handleChange}>
                        {
                            this.props.itemSource.map((item: DropDownItem, index: number) => {
                                return (
                                    <MenuItem key={index} value={item.value} primaryText={item.primaryText} />
                                )
                            })
                        }
                    </DropDownMenu>
                </div>
            </div>
        );
    }
}