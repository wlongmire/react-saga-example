import * as React from 'react';
import ApplicationState from '../../../common';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from "redux";
import * as rxActions from '../../actions';

interface RxProps {
    treatments : any,
    loadAllRx: () => void
}
export class Treatments extends React.Component<RxProps, {}>{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.loadAllRx()
    }
    render(){
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state: ApplicationState.IState) => {
    return {
        treatments : state.treatments
    }
}

const mapDispatchToProps = (dispatch:Dispatch<{}>) => bindActionCreators(
    {
        loadAllRx : rxActions.getAllTreatments
    },
    dispatch
)

export const RXContainer = connect<{}, RxProps, {}>(mapStateToProps, mapDispatchToProps)(Treatments)