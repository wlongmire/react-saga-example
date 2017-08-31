import * as React from 'react';
import ApplicationState from '../../../common';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from "redux";

import * as testOrderActions from '../../actions';

interface TestOrdersProps {
    testOrders : Array<any>,
    loadAllTestOrders : () => void;
}

class TestOrders extends React.Component<TestOrdersProps, {}>{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.loadAllTestOrders()
    }
    render(){
        return(
            <div></div>
        )
    }
}

const mapStateToProps = (state: ApplicationState.IState) => {
    return {
        testOrders : state.testorders,
    }
}

const mapDispatchToProps = (dispatch:Dispatch<{}>) => bindActionCreators(
    {
        loadAllTestOrders : testOrderActions.getAllTestOrders
    },
    dispatch
)

export const TestOrdersContainer = connect<{}, TestOrdersProps, {}>(mapStateToProps, mapDispatchToProps)(TestOrders)

