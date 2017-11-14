import * as React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import './TableInputs.css';

const vitalsObject = [
    {id: 0, name: 'Weight' },
    {id: 1, name: 'Height' },
    {id: 2, name: 'Age'
}
]; 

interface Vital {
    id: number;
    name: string;
    value: string;
}

interface TableInputsState {
    value: number;
    vitalOptions?: any;
    myVitals: Array<Vital>;
}

interface TableInputProps {
    onChange: (vitalsArray: object[]) => void;
}

export class TableInputs extends React.Component<TableInputProps, TableInputsState> {
    private count: number = 0;
    constructor() {
        super();
        this.state = {
            value: 0,
            vitalOptions: vitalsObject,
            myVitals: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddVital = this.handleAddVital.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
    }
    
    handleChange = (event: any, vitalId: number, value: string) => {
        let st = [...this.state.myVitals];
        st.forEach((vital: Vital) => {
            if (vital.id === vitalId) {
                vital.name = value;
            }
        });
        this.setState({myVitals: st}, () => {
            this.props.onChange(this.state.myVitals); });
        
    }

    handleTextInput = (event: any, newValue: string, id: number) => {
        let st = [...this.state.myVitals];
        st.forEach((vital: Vital) => {
            if (vital.id === id) {
                vital.value = newValue;
            }
        });
        this.setState({myVitals: st});
    }   

    handleAddVital = (event: React.SyntheticEvent<any>) => {
        let newVital: Vital = { id: this.count++, name: '', value: '' };
        let vitals = this.state.myVitals;
        vitals.push(newVital);
        this.setState({ myVitals: vitals });
    }

    render() {
        const VitalOptions: JSX.Element = this.state.vitalOptions.map((v: any) => {
            return (
                <MenuItem key={v.id} value={v.name} primaryText={v.name} />
            );
        });
        const VitalInputRow =
            this.state.myVitals.map((vital: Vital) => {
                return (
                    <div key={vital.id} className="component-entry">
                        <div>
                            <DropDownMenu
                                value={vital.name}
                                onChange={(e, k, v) => { this.handleChange(e, vital.id, v); }}
                            >
                                {VitalOptions}
                            </DropDownMenu>
                        </div>
                        <div>
                            <TextField 
                                id={vital.id.toString()}
                                name={vital.name}
                                hintText={vital.name}
                                floatingLabelText={vital.value}
                                onChange={(e, v) => this.handleTextInput(e, v, vital.id)}
                            />
                        </div>
                    </div>
                );
            });
        return (
            <div id="add-component">
                <div>
                    <div className="add-component-header">
                        <div>Vitals</div>
                        <div><span onClick={this.handleAddVital} className="add">+</span></div>
                    </div>
                </div>
                <div>
                    {VitalInputRow}
                </div>
            </div>
        );
    }
}