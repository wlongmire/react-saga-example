import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import * as _ from 'lodash';

import './FormControl.css';

export enum ControlType {
    Text = 1,
    Selector,
    DateSelector
}

export type ValidationErrors = {
    [key: string]: any
}

export interface ValidatorFn {
    (c: any): ValidationErrors|null;
}

export class FormControlOptions {
    title?: string;
    floatingLabelText: string;
    hintText: string;
    name: string;
    defaultValue?: string;
    value: string;
    type?: string;
    validators?: ValidatorFn[];
}

export class TextFieldOptions extends FormControlOptions {
    type: 'text';
    onChange: (event: object, newValue: string) => void;

    constructor(options: object) {
        super();
        _.keys(options).forEach((key: string) => {
            this[key] = options[key];
        });
    }
}

export interface DropdownItem {
    value: any;
    primaryText: string;
}

export class DropdownFieldOptions extends FormControlOptions {
    type: 'dropdown';
    onChange: (event: object, index: number, newValue: any) => void;
    items: DropdownItem[];

    constructor(options: object) {
        super();
        _.keys(options).forEach((key: string) => {
            this[key] = options[key];
        });
    }
}

export class DateSelectorFieldOptions extends FormControlOptions {
    type: 'date';
    onChange: (event: object, newValue: any) => void;

    constructor(options: object) {
        super();
        _.keys(options).forEach((key: string) => {
            this[key] = options[key];
        });
    }
}

interface FormControlProps {
    controlType: ControlType,
    textOptions?: TextFieldOptions,
    dropdownOptions?: DropdownFieldOptions,
    dateSelectorOptions?: DateSelectorFieldOptions
}

export const FormControl: React.SFC<FormControlProps> = (props) => {
    return (
        <div className="lc-form-control">
            {props.controlType == ControlType.Text &&
                <TextField
                    hintText={props.textOptions ? props.textOptions.hintText : ''}
                    floatingLabelText={props.textOptions ? props.textOptions.floatingLabelText : ''}
                    value={props.textOptions ? props.textOptions.value : ''}
                    onChange={props.textOptions ? props.textOptions.onChange : undefined}
                />
            }
            {props.controlType == ControlType.Selector &&
                <SelectField 
                    hintText={props.dropdownOptions ? props.dropdownOptions.hintText : ''}
                    floatingLabelText={props.dropdownOptions ? props.dropdownOptions.floatingLabelText : ''}
                    value={props.dropdownOptions ? props.dropdownOptions.value : ''}
                    onChange={props.dropdownOptions ? props.dropdownOptions.onChange : undefined}
                >
                {props.dropdownOptions &&
                    props.dropdownOptions.items.map((item: DropdownItem, index: number) => {
                        <MenuItem key={item.value} value={item.value} primaryText={item.primaryText} />
                    })
                }
                </SelectField>
            }
            {props.controlType == ControlType.DateSelector &&
                <div></div>
            }
        </div>
    );
}