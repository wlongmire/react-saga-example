import * as React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import './TableInputs.css';


const TableStyles = {
    width: '70%',
    margin: '0 auto'
}

interface IAdditionalItem {
    id: number;
    title : string;
    description: string;

}
interface TableTemplateState {
    items: Array<IAdditionalItem>
}

interface TableTemplateProps{
    headerTitle : string
}
export default class TableTemplate extends React.Component<TableTemplateProps, TableTemplateState>{
    private count:number = 0;
    
    constructor(props:TableTemplateProps){
        super(props)
    
    this.state = {
        items : []
    }

    this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem = (e: React.SyntheticEvent<any>) => {
        let newItem: IAdditionalItem = {id:this.count++,title:'', description:''}
        let items = [...this.state.items];
        items.push(newItem)
        this.setState({
            items: items
        })
    
    }

    render(){
        return(
        <Table style={TableStyles}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>{this.props.headerTitle}</TableHeaderColumn>
                        <TableHeaderColumn><span onClick={this.handleAddItem} className="add">+</span></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                        {
                            this.state.items.map((item:IAdditionalItem)=>{
                                return(
                                <TableRow key={item.id}>
                                <TableRowColumn>
                                    <TextField 
                                        id={item.id.toString()}
                                        name="title"
                                        hintText="Title"
                                        floatingLabelText="Title"
                                    />
                                </TableRowColumn>
                                <TableRowColumn>
                                    <TextField 
                                        id={item.id.toString()}
                                        name="description"
                                        hintText="Description"
                                        floatingLabelText="Description"/>
                                </TableRowColumn>
                                </TableRow>
                                )
                            })
                        }
                </TableBody>
        
        </Table> 
        )
    }
}