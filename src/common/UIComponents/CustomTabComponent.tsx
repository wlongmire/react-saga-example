import * as React from 'react';
import './Common.css';

// interface TabDescription {
//     default?: boolean;
//     type?: string;
//     id: string;
//     component?: JSX.Element; 
//     props?: object; 
// }

interface P {
    appComponent ?: JSX.Element;
    tabs: Array<string>;
    clickedTab: string;
    handleClickTab: (t:string) => void;
    handleAddTab: () => void;
}

interface S {
    tabState: object,
    clickedTab: string
}

export class CustomTabComponent extends React.Component<P, S>{
    constructor(props:P){
        super(props)
        this.state = {
            tabState : {
                biodrive: true,
                hormone: false,
                },
            clickedTab: ''
        }
    }

    capitalizeFirstLetter = (s:string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    
    render() {
        return (
            <div id="wrapper">
                <div className="chat-section"></div>
                <div className="right-section">
                    <div className="tabs">
                        {
                            this.props.tabs.map((t: string, index: number) => {
                                return (
                                    <div key={index} className={t === this.props.clickedTab ? "tab-header-clicked": "tab-header"} onClick={() => this.props.handleClickTab(t)} >{this.capitalizeFirstLetter(t)}</div>
                                )
                            })
                        }
                        <span onClick={this.props.handleAddTab} className="add-icon"> + </span>
                    </div>
                    
                    <div className="tab-content">
                        {this.props.appComponent &&
                            this.props.appComponent
                        }
                    </div>
                </div>            
            </div>
        )
    }
}