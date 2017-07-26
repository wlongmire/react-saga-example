import * as React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import './TableInputs.css';

const TableStyles = {
    width: '70%',
    margin: '0 auto'
}



const vitalsObject = [
    { id: 0, name: 'Weight' },
    { id: 1, name: 'Height' },
    {
        id: 2, name: 'Age'
    }
]

interface IVital {
    id: number;
    name: string;
    value: string;
}

interface TableInputsState {
    value: number;
    vitalOptions?: any;
    myVitals: Array<IVital>;
}


export default class TableInputs extends React.Component<{}, TableInputsState>{
    private count: number = 0;
    constructor() {
        super()
        this.state = {
            value: 0,
            vitalOptions: vitalsObject,
            myVitals: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAddVital = this.handleAddVital.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
    }

    handleChange = (event: any, vitalId: number, value: string) => {
        let st = [...this.state.myVitals]
        st.forEach((vital:IVital) => {
            if(vital.id === vitalId){
                vital.value = value;
            }
        })
        this.setState({myVitals: st});
        
    }

    handleTextInput = (event:any, newValue: string, id:number) => {
        let st = [...this.state.myVitals];
        st.forEach((vital:IVital)=>{
            if(vital.id === id){
                vital.value = newValue
            }
        })
        this.setState({myVitals: st})
    }   



    handleAddVital = (event: React.SyntheticEvent<any>) => {
        console.log("Event")
        let newVital: IVital = { id: this.count++, name: '', value: '' };
        let vitals = this.state.myVitals;
        vitals.push(newVital);
        this.setState({ myVitals: vitals })
    }

    render() {
        const VitalOptions: JSX.Element = this.state.vitalOptions.map((v: any) => {
            return (
                <MenuItem key={v.id} value={v.name} primaryText={v.name} />
            )
        })
        const TableInputRow =
            this.state.myVitals.map((vital: IVital) => {
                return (
                    <TableRow key={vital.id}>
                        <TableRowColumn>
                            <DropDownMenu value={vital.value} onChange={(e,k,v) => {
                                console.log('event',e)
                                console.log('key', k)
                                console.log('value', v)
                                this.handleChange(e,vital.id,v)}
                                
                                }>
                                {VitalOptions}
                            </DropDownMenu>
                        </TableRowColumn>
                        <TableRowColumn>
                            <TextField 
                            hintText="Vitals" 
                            value={vital.value} 
                            onChange={(e,v) => this.handleTextInput(e,v,vital.id)} floatingLabelText="Vitals" />
                        </TableRowColumn>
                    </TableRow>
                )
            })
        return (
            <Table style={TableStyles}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Vitals</TableHeaderColumn>
                        <TableHeaderColumn><span onClick={this.handleAddVital} className="add">+</span></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {TableInputRow}
                </TableBody>
            </Table>
        )
    }
}