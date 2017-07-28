import * as React from 'react';
import { VisitDrawer } from '../Visit/VisitDrawer';
import RaisedButton from 'material-ui/RaisedButton';

import './Visits.css';


const style = {
    backgroundColor: '#f84445',
    display: ''
}

interface VisitComponentState {
    openDrawer: boolean
}

export class VisitsContainer extends React.Component<{}, VisitComponentState>{
    constructor() {
        super()
        this.state = {
            openDrawer: false
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState({
            openDrawer: !this.state.openDrawer
        })
    }
    render() {
        return (
            <div className="visits-container">
                <RaisedButton
                    label="Visit"
                    secondary={true}
                    buttonStyle={style}
                    onClick={this.toggleDrawer}
                />
                <VisitDrawer
                    className={this.state.openDrawer ? "visit-drawer-show" : "visit-drawer-hide"} />
            </div>
        )
    }
}