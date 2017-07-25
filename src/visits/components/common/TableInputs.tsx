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
    {id: 1, name:'Weight'}, 
    {id: 2, name:'Height'}, 
    {id: 3, name:'Age'
}
]

const myVitals:any = []


interface TableInputsState{
    value:number;
    vitalOptions?: any;
    myVitals?: any;
}
export default class TableInputs extends React.Component<{}, TableInputsState>{
    constructor(){
        super()
    this.state = {
        value: 0,
        vitalOptions: vitalsObject,
        myVitals: myVitals
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddVital = this.handleAddVital.bind(this);
    }

    handleChange = (event:any, index:number, value:any) => this.setState({value});

    handleAddVital = (event:any) => {

        const newVital = (
                    <TableRow>
                    <TableRowColumn>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        {
                            this.state.vitalOptions.map((v:any, index:number)=>{
                                    return(
                                 <MenuItem key={index} value={v.name} primaryText={v.name} />
                            )})
                        }
                    </DropDownMenu>
                    </TableRowColumn>
                    <TableRowColumn>  
                    <TextField
                            hintText="Hint Text"
                            floatingLabelText="Vitals"
                     /> 
                    </TableRowColumn>
                    </TableRow>
        ) 
    
        this.setState({
            myVitals : [...this.state.myVitals.concat(newVital)]
        })
    }

    render(){
        return(
            <Table style={TableStyles}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn>Vitals</TableHeaderColumn>
                <TableHeaderColumn><span onClick={this.handleAddVital} className="add">+</span></TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {this.state.myVitals}
            </TableBody>
        </Table>
        )
    }
}