import * as React from 'react';
import './Common.css';


interface P {
    bioDriveComponent : JSX.Element
}

interface S {
    tabState: object;
    tabs: Array<any>;
    clickedTab: string
    // biodriveClicked: boolean;
    // hormoneTabClicked: boolean;
    // visitTabClicked: boolean;


}
export class CustomTabComponent extends React.Component<P, S>{
    constructor(props:P){
        super(props)
        this.state = {
            tabState : {
                biodrive: true,
                hormone: false,
                visit: false
                },
            tabs : ['biodrive', 'hormone', 'visit'],
            clickedTab: ''
        }
    }


    _handleClickTab = (tabSelected:string) => {
        /**
         * Make an entirely new copy of state every time you click
         */
        let resetState = {...this.state.tabState};
        Object.keys(resetState).forEach((s:string)=>{
            resetState[s] = false
        })
        let clickedState = Object.keys(resetState).filter((t:string) => {
            return t === tabSelected
        }
        )
        let k = clickedState[0]
        resetState[k] = true;
        this.setState({
            tabState: resetState,
            clickedTab : clickedState[0]
        })
    }

    _handleAddTab = () => {
        let currentState = {...this.state.tabState};
        let currentTabs = [...this.state.tabs]
        currentState['new'] = false
        currentTabs.push('new');
        this.setState({
           tabState: currentState, 
           tabs: currentTabs
        })

    }

    capitalizeFirstLetter = (s:string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    render(){
        let tabContent = <div>{this.state.clickedTab}</div>
        return(
            <div id="wrapper">
                <div className="chat-section"></div>
                <div className="right-section">
                    <div className="tabs">
                        {
                            this.state.tabs.map((t:any, index:number)=>{
                                return (
                                    <div key={index} className={t === this.state.clickedTab ? "tab-header-clicked": "tab-header"} onClick={() => this._handleClickTab(t)} >{this.capitalizeFirstLetter(t)}</div>
                                )
                            })
                        }
                    <span onClick={this._handleAddTab}className="add-icon"> + </span>
                    </div>
                    
                    <div className="tab-content">
                        {tabContent}

                    </div>
                </div>            
            </div>
        )
    }
}