import * as React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import DropDownTemplate from './DropDownTemplate';
import DatePicker from 'material-ui/DatePicker';
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
    headerTitle : string,
    onChange : (items:Array<any>) => void;
}
export class TableTemplate extends React.Component<TableTemplateProps, TableTemplateState>{
    private count:number = 0;
    
    constructor(props:TableTemplateProps){
        super(props)
    
    this.state = {
        items : [],
        
    }

    this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem = (e: React.SyntheticEvent<any>) => {
        const newItem: IAdditionalItem = {
            id:this.count++,
            title:'',
            description:''
        }
        this.setState(prevState => ({
            items: prevState.items.concat(newItem)
        }))
    }

    handleSubmit = (e:any, value:any) => {
        console.log
    }

    handleChangeInput = (index: number) => (e:any) => {
        let items = [...this.state.items];
        const item = items[index];
        items[index] = {
            ...item,
            [e.target.name]: e.target.value
        }

        this.setState({items}, () => {
            this.props.onChange(this.state.items)
        })
    }

    render(){
        return(
        <Table style={TableStyles} selectable={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>{this.props.headerTitle}</TableHeaderColumn>
                        <TableHeaderColumn><span onClick={this.handleAddItem} className="add">+</span></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                        {
                            this.state.items.map((item:IAdditionalItem, index:number, array)=>{
                                return(
                                <TableRow key={item.id}>
                                <TableRowColumn>
                                    <DropDownTemplate/>
                                </TableRowColumn>
                                <TableRowColumn>
                                <DatePicker 
                                    name="date" 
                                    hintText="Date Created"
                                    style={{
                                        textAlign:"left",
                                        position:"relative",
                                        left:'2em',
                                        marginBottom:'.5em'
                                        }}
                                    />
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