import * as React from 'react';
// import { VisitDrawer } from '../Visit/VisitDrawer';
// import VisitCollection from './VisitsCollection';
// import RaisedButton from 'material-ui/RaisedButton';
// import {getAllVisits} from '../../selectors';
import ApplicationState from '../../../common';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {  Dispatch } from "redux";
// import * as VisitsActions from '../../actions';
import * as VisitModels from '../../model';
import {loadAllVisits} from '../../actions';
import './Visits.css';


// const style = {
//     backgroundColor: '#f84445',
// }

interface VisitsProps {
    visits : VisitModels.Visits,
    loadAllVisits : () => void
}

interface VisitComponentState {
    openDrawer: boolean
    visits?: Array<any>
}

export class Visits extends React.Component<VisitsProps, VisitComponentState>{
    constructor() {
        super()
        this.state = {
            openDrawer: false,
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    componentDidMount(){    
        this.props.loadAllVisits();
    }

    toggleDrawer() {
        this.setState({
            openDrawer: !this.state.openDrawer
        })
    }
    render() {
        return (
            <div>
                Visits Here
            </div>
        )
    }
}

const mapStateToProps = (state: ApplicationState.IState) => {
    return {
        visits : state.visits,
    }
}


export const VisitsContainer = connect<{}, VisitsProps, {}>(mapStateToProps, {loadAllVisits})(Visits)