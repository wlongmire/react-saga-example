import * as React from 'react';
import './Common.css';


interface P {
    bioDriveComponent : JSX.Element
}

interface S {
    tabState: object;
    tabs: Array<any>
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
        tabs : ['biodrive', 'hormone', 'visit']
        }
    }

    // _handleClickBioDrive = () => {
    //     this.setState({
    //         biodriveClicked: true,
    //         visitTabClicked: false,
    //         hormoneTabClicked: false
    //     })
    // }
    // _handleClickHormoneTab = () => {
    //     this.setState({
    //         biodriveClicked: false,
    //         visitTabClicked: false,
    //         hormoneTabClicked: true
    //     })
    // }
    // _handleClickVisitsTab = () => {
    //     this.setState({
    //         biodriveClicked: false,
    //         visitTabClicked: true,
    //         hormoneTabClicked: false
    //     })
    // }

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
            tabState: resetState
        })
    }

    _handleAddTab = () => {
        console.log("cliked")
    }

    capitalizeFirstLetter = (s:string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    render(){
        console.log(this.state)
        return(
            <div id="wrapper">
                <div className="chat-section"></div>
                <div className="right-section">
                    <div className="tabs">
                        {
                            this.state.tabs.map((t:any, index:number)=>{
                                return (
                                    <div key={index} className="tab-header" onClick={() => this._handleClickTab(t)} >{this.capitalizeFirstLetter(t)}</div>
                                )
                            })
                        }
                    <span onClick={this._handleAddTab}className="add-icon"> + </span>
                    </div>
                    
                    <div className="tab-content">
                        {/* {
                            this.state.biodriveClicked && !this.state.hormoneTabClicked && !this.state.visitTabClicked &&
                            <div>{this.props.bioDriveComponent}</div>
                        }

                        {
                            !this.state.biodriveClicked && this.state.hormoneTabClicked && !this.state.visitTabClicked &&
                            <div>hormoneTabClicked</div>
                        }

                        {
                            !this.state.biodriveClicked && !this.state.hormoneTabClicked && this.state.visitTabClicked &&
                            <div>visitTabClicked</div>
                        } */}



                    </div>
                </div>            
            </div>
        )
    }
}