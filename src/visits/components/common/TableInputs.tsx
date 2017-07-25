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

const createIdGenerator = () => {
    let id = 0;
    return () => ++id;
}

const idGenerator = createIdGenerator();

const TableStyles = {
    width: '70%',
    margin: '0 auto'
}


const vitalsObject = [
    {id: idGenerator(), name: 'Weight'}, 
    {id: idGenerator(), name:'Height'}, 
    {id: idGenerator(), name:'Age'
}
]


interface TableInputsState{
    value: number;
    vitals?: any
}
export default class TableInputs extends React.Component<{}, TableInputsState>{
    constructor(){
        super()
    this.state = {
        value: 1,
        vitals: vitalsObject
    }
    this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange = (event:any, index:number, value:any) => this.setState({value});

    render(){
        return(
            <Table style={TableStyles}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn>Vitals</TableHeaderColumn>
                <TableHeaderColumn><span className="add">+</span></TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                    <TableRow>
                    <TableRowColumn>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        {
                            this.state.vitals.map((v:any)=>{
                                    return(
                                 <MenuItem key={v.id} value={v.name} primaryText={v.name} />
                            )})
                        }
                    </DropDownMenu>
                    </TableRowColumn>
                    <TableRowColumn>  
                        <TextField
                            floatingLabelText="Test"
                        />  
                    </TableRowColumn>
                          </TableRow>
            </TableBody>
        </Table>
        )
    }
}