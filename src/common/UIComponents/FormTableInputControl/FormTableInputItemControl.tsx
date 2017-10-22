import * as React from 'react';
import * as classnames from 'classnames';
import * as _ from 'lodash';
import FlatButton from 'material-ui/FlatButton';
import { FormSelectControl, FormSelectControlOption } from '../FormSelectControl';
import { FormTextField } from '../FormTextField';

import './FormTableInputItemControl.css';

interface FormTableInputItemControlProps {
    options: Array<FormSelectControlOption>;
    item: FormTableInputItem;
    singleValue?: boolean;
    multiline?: boolean;
    rows?: number;
    onCancel: (item: FormTableInputItem) => void;
    onChange: (item: FormTableInputItem) => void;
    onDelete: (item: FormTableInputItem) => void;
}

interface FormTableInputItemControlState {
    isEditing: boolean;
    item: FormTableInputItem;
    uneditedItem?: FormTableInputItem;
}

export class FormTableInputItem {
    isNew: boolean;
    selectedOption?: FormSelectControlOption;
    details?: string;
}

export class FormTableInputItemControl 
    extends React.Component<FormTableInputItemControlProps, FormTableInputItemControlState> {

    constructor(props: FormTableInputItemControlProps) {
        super(props);

        this.state = {
            isEditing: false,
            item: this.props.item
        };

        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleDetailChange = this.handleDetailChange.bind(this);
        this.handleDropDownChange = this.handleDropDownChange.bind(this);
        this.handleEditModeClick = this.handleEditModeClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            item: this.props.item,
            isEditing: this.props.item.isNew
        });
    }

    componentWillReceiveProps(props: FormTableInputItemControlProps) {
        this.setState({
            item: props.item
        });
    }

    handleCancelClick() {
        const unedited = this.state.uneditedItem;

        if (unedited) {
            this.state.item.isNew = unedited.isNew;
            this.state.item.selectedOption = unedited.selectedOption;
            this.state.item.details = unedited.details;
        }

        this.setState(
            {
                isEditing: false,
                uneditedItem: undefined
            }, 
            () => {
                this.props.onCancel(this.state.item);
            }
        );
    }

    handleDeleteClick() {
        this.setState(
            {
                isEditing: false,
                uneditedItem: undefined
            }, 
            () => {
                this.props.onDelete(this.state.item);
            }
        );
    }

    handleDetailChange(value: string) {
        this.state.item.details = value;
    }

    handleDropDownChange(value: string) {
        let foundOption = this.props.options.find((option) => {
            return option.value === value;
        });

        if (foundOption) {
            this.state.item.selectedOption = foundOption;
        }
    }

    handleEditModeClick() {
        const unedited = _.clone(this.state.item);
        this.setState({
            isEditing: true,
            uneditedItem: unedited
        });
    }

    handleSaveClick() {
        this.state.item.isNew = false;
        this.setState(
            {
                isEditing: false,
                uneditedItem: undefined
            }, 
            () => {
                this.props.onChange(this.state.item);
            }
        );
    }

    render() {
        if (this.state.isEditing) {
            return (
                <div 
                    className={
                        classnames(
                            'form-table-input-item-control edit-mode', 
                            {'single-edit-value': this.props.singleValue}
                        )
                    }
                >
                    <FormSelectControl 
                        className="form-select-control"
                        options={this.props.options}
                        value={this.state.item.selectedOption ? this.state.item.selectedOption.value : undefined}
                        onValueChanged={this.handleDropDownChange}
                    />
                    {!this.props.singleValue &&
                        <FormTextField
                            name="details"
                            className="form-detail-control"
                            value={this.state.item.details}
                            onValueChanged={this.handleDetailChange}
                            multiline={this.props.multiline}
                            rows={this.props.rows}
                        />
                    }
                    {!this.state.item.isNew &&
                        <div className="form-delete-icon">
                            <i className="material-icons" onClick={this.handleDeleteClick}>delete</i>
                        </div>
                    }
                    <div className="form-button-container">
                        <FlatButton  
                            className="form-cancel-button"
                            label="cancel"
                            style={{
                                color: '#979797',
                                textTransform: 'uppercase'
                            }}
                            hoverColor="#ffffff"
                            onClick={this.handleCancelClick}
                        />
                        <FlatButton 
                            className="form-save-button"
                            label="save changes"
                            style={{
                                color: '#67b2a6',
                                textTransform: 'uppercase'
                            }}
                            hoverColor="#ffffff"
                            onClick={this.handleSaveClick}
                        />
                    </div>
                </div>
            );
        } else {
            return (
            <div className="form-table-input-item-control read-mode">
                <span>
                    {this.state.item.selectedOption ? this.state.item.selectedOption.text : ''}
                    {this.props.singleValue ? '' : (this.state.item.details ? `: ${this.state.item.details}` : '')}
                </span>
                <i className="material-icons mode-add" onClick={this.handleEditModeClick}>mode_edit</i>
            </div>);
        }
    }
}