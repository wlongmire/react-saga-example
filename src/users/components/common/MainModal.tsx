import * as React from 'react';

import './MainModal.css';

type P = {
    title : string;
    handleCloseModal : (event:any) => void
}


export default class MainModal extends React.Component<P, {}>{
    constructor(props:P){
        super(props)
    }

    handleCloseModal = (event:any) => {
        console.log('Here', event.target)
    
    }

    render(){
        return (
            <div id='main-modal' onClick={this.props.handleCloseModal}>
                <div className="modal-content">
                    <div className="modal-title">
                        <p> Add {this.props.title}</p>
                    </div>
                    <div>
                        Add {this.props.title} Here
                    </div>
                </div>
            </div>
        )
    }
}