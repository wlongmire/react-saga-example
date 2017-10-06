import * as React from 'react';
import './Common.css';


interface P {
    bioDriveComponent : JSX.Element
}

interface S {
    biodriveClicked: boolean;
    hormoneTabClicked: boolean;
    visitTabClicked: boolean;


}
export class CustomTabComponent extends React.Component<P, S>{
    constructor(props:P){
        super(props)
        this.state = {
            biodriveClicked: true,
            hormoneTabClicked: false,
            visitTabClicked: false
        }
    }

    _handleClickBioDrive = () => {
        this.setState({
            biodriveClicked: true,
            visitTabClicked: false,
            hormoneTabClicked: false
        })
    }
    _handleClickHormoneTab = () => {
        this.setState({
            biodriveClicked: false,
            visitTabClicked: false,
            hormoneTabClicked: true
        })
    }
    _handleClickVisitsTab = () => {
        this.setState({
            biodriveClicked: false,
            visitTabClicked: true,
            hormoneTabClicked: false
        })
    }
    _handleAddTab = () => {
        console.log("Click Add Tab")
    }
    render(){
        console.log(this.state)
        return(

            <div id="wrapper">
                <div className="chat-section"></div>
                <div className="right-section">
                    <div className="tabs">
                        <div onClick={this._handleClickBioDrive} className={this.state.biodriveClicked ? "tab-header-clicked":"tab-header"}>BioDrive</div>
                        <div onClick={this._handleClickHormoneTab} className={this.state.hormoneTabClicked ? "tab-header-clicked":"tab-header"}>Hormone Test</div>
                        <div onClick={this._handleClickVisitsTab} className={this.state.visitTabClicked ? "tab-header-clicked":"tab-header"}>LifeCo Visit</div>
                    <span onClick={this._handleAddTab}className="add-icon"> + </span>
                    </div>
                    
                    <div className="tab-content">
                        {
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
                        }



                    </div>
                </div>            
            </div>
        )
    }
}