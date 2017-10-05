import * as React from 'react';
import {TextInputTemplate} from './TextInputTemplate';
import {DropDownTemplate} from './DropDownTemplate';
import './Inputs.css';


interface IAdditionalItem {
    id: number;
    title : string;
    description: string;

}
interface TableTemplateState {
    items: Array<IAdditionalItem>;
    payload: object
}

const stubbedData = {
    'activity': [
        {value: 1, primaryText:"Active"},
        {value: 2, primaryText:"Not Active"}
]
}

interface TableTemplateProps{
    headerTitle: string;
    onChange : (items:Array<any>) => void;
}

const getNamedValue = (name:string, v?:number) => {
    let theArrays = Object.keys(stubbedData);
    let targetArray = theArrays.filter((s:any)=>{
        return s === name
    });
    
    let arrayVal = stubbedData[targetArray[0]];
    let actualValue = arrayVal.filter((a:any) =>{
        return a.value === v
    });

    return actualValue[0].primaryText;
}

export class TableGoalTemplate extends React.Component<TableTemplateProps, TableTemplateState>{
    private count:number = 0;
    
    constructor(props:TableTemplateProps){
        super(props)
    
    this.state = {
        items : [],
        payload: {}
        
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

    onPlainTextDropDownChange = (name:string) => (v:number) =>{
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [name]: getNamedValue(name, v)
            }
        }))
    }

    render(){
        return(
        <div>
                <section className="data-header">
                        <span>{this.props.headerTitle}</span>
                        <span onClick={this.handleAddItem} className="add">+</span>
                </section>
                <section>
                        {
                            this.state.items.map((item:IAdditionalItem, index:number, array)=>{
                                return(
                                <div className="data-body" key={item.id}>
                                    <div className="top-section">
                                    <div>
                                        <TextInputTemplate
                                            name="goal-name"
                                            multiLine={false}
                                            rows={1}
                                            hintText={"Name"}
                                        />
                                    </div>
                                    <div>
                                        <DropDownTemplate
                                            dataArray={stubbedData.activity}
                                            onChange={this.onPlainTextDropDownChange('activity')}
                                        />
                                    </div>
                                    </div>
                                    <div className="bottom-section">
                                    <TextInputTemplate
                                            name="goal-description"
                                            multiLine={true}
                                            rows={3}
                                            hintText={"Type Something ..."}
                                    />
                                    </div>
                                </div>
                                )
                            })
                        }
                </section>
        
        </div> 
        )
    }
}