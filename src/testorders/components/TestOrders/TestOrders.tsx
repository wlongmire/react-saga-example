import * as React from 'react';
import ApplicationState from '../../../common';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from "redux";

import * as testOrderActions from '../../actions';
import TestOrdersCollection from './TestOrdersCollection';

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
            <div>
                <TestOrdersCollection
                testOrders={[
                        {
                            "test_type": "Sinus Infection Check",
                            "description": "Albumin levels were higher than expected.Updated your case to the flu",
                            "detail": "Albumin, Nitried and 2 More",
                            "date": "17 Oct"
                        },
                        {
                            "test_type": "Routine Blood Work",
                            "description": "Albumin levels were higher than expected.Updated your case to the cold bruh",
                            "detail": "Lipid Panel",
                            "date": "24 Oct"
                        },
                    ]}
                
                
                />

            </div>
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

