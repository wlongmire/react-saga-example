import * as React from 'react';

import './MainModal.css';

type P = {
    title : string;
    handleCloseModal : (event:any) => void;
    children?: JSX.Element
}


export default class MainModal extends React.Component<P, {}>{
    constructor(props:P){
        super(props)
    }

    handleCloseModal = (event:any) => {
        console.log('Here', event.target)
    
    }

    render(){
        const C = this.props.children
        return (
            <div id='main-modal' onClick={this.props.handleCloseModal}>
                <div className="modal-content">
                    <div className="modal-title">
                        <p> Add {this.props.title}</p>
                    </div>
                    <div>
                        {C}
                    </div>
                </div>
            </div>
        )
    }
}