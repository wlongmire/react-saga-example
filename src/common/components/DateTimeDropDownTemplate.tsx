import * as React from 'react';
import DatePicker from 'material-ui/DatePicker';
import { DropDownTemplate } from './DropDownTemplate';
import './Inputs.css';

interface AdditionalItem {
    id: number;
    title: string;
    description: string;

}
interface TableTemplateState {
    items: Array<AdditionalItem>;
    payload: object;
}

const stubbedData = {
    'maintenance': [
        {value: 1, primaryText: 'Select'},
        {value: 2, primaryText: 'Not Select'}],
    
    'immunization': [
        {value: 1, primaryText: 'Select'},
        {value: 2, primaryText: 'Not Select'}
]
};

interface TableTemplateProps {
    headerTitle: string;
    onChange: (items: Array<any>) => void;
    domain: string;
}

const getNamedValue = (name: string, v?: number) => {
    let theArrays = Object.keys(stubbedData);
    let targetArray = theArrays.filter((s: any) => {
        return s === name;
    });
    
    let arrayVal = stubbedData[targetArray[0]];
    let actualValue = arrayVal.filter((a: any) => {
        return a.value === v;
    });

    return actualValue[0].primaryText;
};

export class DateTimeDropDownTemplate extends React.Component<TableTemplateProps, TableTemplateState> {
    private count: number = 0;
    
    constructor(props: TableTemplateProps) {
        super(props);
    
        this.state = {
        items : [],
        payload: {}
        
    };

        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem = (e: React.SyntheticEvent<any>) => {
        const newItem: AdditionalItem = {
            id: this.count++,
            title: '',
            description: ''
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem)
        }));
    }

    handleChangeInput = (index: number) => (e: any) => {
        let items = [...this.state.items];
        const item = items[index];
        items[index] = {
            ...item,
            [e.target.name]: e.target.value
        };

        this.setState({items}, () => {
            this.props.onChange(this.state.items);
        });
    }

    onPlainTextDropDownChange = (name: string) => (v: number) => {
        this.setState(prevState => ({
            payload: {
                ...prevState.payload,
                [name]: getNamedValue(name, v)
            }
        }));
    }

    render() {
        return(
        <div>
                <section className="data-header">
                        <span>{this.props.headerTitle}</span>
                        <span onClick={this.handleAddItem} className="add">+</span>
                </section>
                <section>
                        {
                            this.state.items.map((item: AdditionalItem, index: number, array) => {
                                return(
                                <div className="data-body-maintenance" key={item.id}>
                                    <div className="top-section">
                                        <DropDownTemplate
                                            dataArray={stubbedData[this.props.domain]}
                                            onChange={this.onPlainTextDropDownChange(this.props.domain)}
                                        />
                                    </div>
                                    <div className="bottom-section">
                                        <DatePicker hintText="Schedule Date" />
                                    </div>
                                </div>
                                );
                            })
                        }
                </section>
        
        </div> 
        );
    }
}