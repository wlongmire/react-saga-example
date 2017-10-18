import * as React from 'react';
import {
    TextInputTemplate,
} from '../../common/UIComponents';

import ApplicationState from '../../common';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from "redux";

import * as actions from '../actions';

import './Others.css';

interface OthersProps {
    others : any,
    loadAllOthers : () => void
}
class OthersComponent extends React.Component<OthersProps, {}>{
    render(){
        return(
            <div className="others-component">
                <TextInputTemplate
                multiLine={true}
                name="social"
                title="Social"
                rows={2}
                />

                <TextInputTemplate
                multiLine={true}
                name="family"
                title="Family"
                rows={2}
                />

                <TextInputTemplate
                multiLine={true}
                name="allergies"
                title="Allergies"
                rows={2}
                />
                
            </div>
        )
    }
}

const mapStateToProps = (state: ApplicationState.IState) => {
    return {
        others : state.others,
    }
}

const mapDispatchToProps = (dispatch:Dispatch<{}>) => bindActionCreators(
    {
        loadAllOthers: actions.getAllOthersItems
    },
    dispatch
) 

export const OthersContainer = connect<{},OthersProps, {}>(mapStateToProps, mapDispatchToProps)(OthersComponent)