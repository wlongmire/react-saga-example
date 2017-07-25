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

const myVitals:any = []


interface TableInputsState{
    value: number;
    vitalOptions?: any;
    vitalsObjects?: any;
}
export default class TableInputs extends React.Component<{}, TableInputsState>{
    constructor(){
        super()
    this.state = {
        value: 1,
        vitalOptions: vitalsObject,
        vitalsObjects: myVitals
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
                            this.state.vitalOptions.map((v:any)=>{
                                    return(
                                 <MenuItem key={v.id} value={v.name} primaryText={v.name} />
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
            vitalsObjects : [...this.state.vitalsObjects.concat(newVital)]
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
                    {
                        this.state.vitalsObjects.map((vit:any)=>{
                            return(
                                <TableRow>
                                <TableRowColumn>
                                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                                    {
                                        this.state.vitalOptions.map((v:any)=>{
                                                return(
                                            <MenuItem key={v.id} value={v.name} primaryText={v.name} />
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
                        } )
                    }
                    {/* <TableRow>
                    <TableRowColumn>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        {
                            this.state.vitalOptions.map((v:any)=>{
                                    return(
                                 <MenuItem key={v.id} value={v.name} primaryText={v.name} />
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
                    </TableRow> */}
            </TableBody>
        </Table>
        )
    }
}