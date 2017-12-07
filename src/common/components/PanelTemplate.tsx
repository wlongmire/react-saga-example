import * as React from 'react';
import TextField from 'material-ui/TextField';
import './TableInputs.css';

interface AdditionalItem {
    id: number;
    title: string;
    description: string;

}

const underlineStyle = {
    display : 'none'
};

interface TableTemplateState {
    items: Array<AdditionalItem>;
}

interface TableTemplateProps {
    headerTitle: string;
    onChange: (items: Array<any>) => void;
}
export class PanelTemplate extends React.Component<TableTemplateProps, TableTemplateState> {
    private count: number = 0;
    
    constructor(props: TableTemplateProps) {
        super(props);
    
        this.state = {
        items : [],
        
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

    handleSubmit = (e: any, value: any) => {
        // TODO implement
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

    render() {
        return(
        <div id="add-component">
                <div className="add-component-header">
    
                        <div>{this.props.headerTitle}</div>
                        <div><span onClick={this.handleAddItem} className="add">+</span></div>
                
                </div>
                <div className="body">
                        {
                            this.state.items.map((item: AdditionalItem, index: number, array) => {
                                return(
                                <div key={item.id} className="component-entry-panels">
                                <div>
                                    <TextField 
                                        id={item.id.toString()}
                                        name="test"
                                        hintText="Test"
                                        onChange={this.handleChangeInput(index)}
                                        floatingLabelText="Test"
                                        underlineStyle={underlineStyle}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                        id={item.id.toString()}
                                        name="result"
                                        hintText="Result"
                                        onChange={this.handleChangeInput(index)}
                                        underlineStyle={underlineStyle}
                                        floatingLabelText="Result"
                                    />
                                </div>
                                <div>
                                    <TextField 
                                        id={item.id.toString()}
                                        name="status"
                                        hintText="Status"
                                        underlineStyle={underlineStyle}
                                        onChange={this.handleChangeInput(index)}
                                        floatingLabelText="Status"
                                    />
                                </div>

                                <div>
                                    <TextField 
                                        id={item.id.toString()}
                                        underlineStyle={underlineStyle}
                                        name="comment"
                                        hintText="Comment"
                                        onChange={this.handleChangeInput(index)}
                                        floatingLabelText="Comment"
                                    />
                                </div>
                                </div>
                                );
                            })
                        }
                </div>
        
        </div> 
        );
    }
}