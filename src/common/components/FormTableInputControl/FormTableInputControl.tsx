import * as React from 'react';
import * as classnames from 'classnames';
import * as _ from 'lodash';
import { FormTableInputItem, FormTableInputItemControl } from './FormTableInputItemControl';
import { FormSelectControlOption } from '../FormSelectControl';

import './FormTableInputControl.css';

interface FormTableInputControlProps {
    className?: string;
    label: string;
    items?: Array<FormTableInputItem>;
    options: Array<FormSelectControlOption>;
    multilineDetail?: boolean;
    multilineRows?: number;
    singleValue?: boolean;
    onChange: (items: Array<FormTableInputItem>) => void;
}

interface FormTableInputControlState {
    items: Array<FormTableInputItem>;
    expanded: boolean;
}

export class FormTableInputControl extends React.Component<FormTableInputControlProps, FormTableInputControlState> {

    constructor(props: FormTableInputControlProps) {
        super(props);

        this.state = {
            items: [],
            expanded: false
        };

        this.handleItemAdd = this.handleItemAdd.bind(this);
        this.handleItemCancel = this.handleItemCancel.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleItemUpdate = this.handleItemUpdate.bind(this);
        this.handleToggleExpanded = this.handleToggleExpanded.bind(this);
    }

    componentDidMount() {
        if (this.props.items) {
            this.setState({
                items: this.props.items,
                expanded: this.props.items && this.props.items.length > 0
            });
        }
    }

    componentWillReceiveProps(props: FormTableInputControlProps) {
        if (props.items) {
            this.setState({
                items: props.items,
                expanded: props.items && props.items.length > 0
            });
        }
    }

    handleItemAdd() {
        if (this.state.items.length > 0) {
            // already a new unsaved item in the collection
            if (this.state.items[this.state.items.length - 1].isNew) {
                return;
            }
        }

        // create a new item and append it to end
        let newItem = new FormTableInputItem();
        newItem.isNew = true;

        let items = _.cloneDeep(this.state.items);
        items.push(newItem);

        this.setState({
            expanded: true,
            items
        });
    }

    handleItemCancel(item: FormTableInputItem) {
        if (item.isNew) {
            let index = this.state.items.indexOf(item);
            if (index > -1) {
                this.state.items.splice(index, 1);
            }
            this.setState({
                items: this.state.items
            });
        }
    }

    handleItemDelete(item: FormTableInputItem) {
        let index = this.state.items.indexOf(item);
        if (index > -1) {
            this.state.items.splice(index, 1);
        }
        this.setState({
            items: this.state.items
        });
    }

    handleItemUpdate(item: FormTableInputItem) {
        this.props.onChange(this.state.items);
    }

    handleToggleExpanded() {
        this.setState({
            expanded: !this.state.expanded
        });
    }
    
    render() {
        return (
            <div className={classnames('form-table-input-control', this.props.className ? this.props.className : '')}>
                <div className={classnames('form-table-input-control-header', {'expanded': this.state.expanded})}>
                    <span onClick={this.handleToggleExpanded}>{this.props.label}</span>
                    <i 
                        className="material-icons add" 
                        onClick={this.handleItemAdd}
                    >
                        add
                    </i>
                    <i 
                        className="material-icons arrow-drop-down" 
                        onClick={this.handleToggleExpanded}
                    >
                        arrow_drop_down
                    </i>
                    <i 
                        className="material-icons arrow-drop-up" 
                        onClick={this.handleToggleExpanded}
                    >
                        arrow_drop_up
                    </i>
                </div>
                <div className={classnames('form-table-input-control-body', {'expanded': this.state.expanded})}>
                    {
                        this.state.items.map((item, index) => {
                            return (
                                <FormTableInputItemControl 
                                    key={index}
                                    options={this.props.options} 
                                    item={item} 
                                    onCancel={this.handleItemCancel}
                                    onDelete={this.handleItemDelete}
                                    onChange={this.handleItemUpdate}
                                    multiline={this.props.multilineDetail}
                                    rows={this.props.multilineRows}
                                    singleValue={this.props.singleValue}
                                /> )
                        })
                    }
                </div>
            </div>
        );
    }
}