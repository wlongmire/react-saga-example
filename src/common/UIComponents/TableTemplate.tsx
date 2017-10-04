import * as React from 'react';
import TextField from 'material-ui/TextField';
import './TableInputs.css';

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
        };

        this.setState(prevState => ({
            items: prevState.items.concat(newItem)
        }));
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
        <div id="add-component">
                <div className="add-component-header">
    
                        <div>{this.props.headerTitle}</div>
                        <div><span onClick={this.handleAddItem} className="add">+</span></div>
                
                </div>
                <div className="body">
                        {
                            this.state.items.map((item:IAdditionalItem, index:number, array)=>{
                                return(
                                <div key={item.id} className="component-entry">
                                <div>
                                    <TextField 
                                        id={item.id.toString()}
                                        name="title"
                                        hintText="Title"
                                        onChange={this.handleChangeInput(index)}
                                        floatingLabelText="Title"
                                    />
                                </div>
                                <div>
                                    <TextField 
                                        id={item.id.toString()}
                                        name="description"
                                        hintText="Description"
                                        onChange={this.handleChangeInput(index)}
                                        floatingLabelText="Description"/>
                                </div>
                                </div>
                                )
                            })
                        }
                </div>
        
        </div> 
        )
    }
}