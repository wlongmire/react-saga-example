import * as React from 'react';
import ApplicationState from '../../../common';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from "redux";
// import * as rxActions from '../../actions';
import TreatmentsCollection from './TreatmentsCollection';

interface RxProps {
    treatments : any,
    loadAllRx: () => void
}
export class Treatments extends React.Component<RxProps, {}>{
    constructor(){
        super()
    }

    componentDidMount(){
        // this.props.loadAllRx()
    }
    render(){
        return (
            <div>

                <TreatmentsCollection
                    treatments={[{
                            "treatment_type": "Rimabotulinumotoxin:Pharmacy Received",
                            "description": "Albumin levels were higher than expected.Updated your case to the flu",
                            "detail": "Albumin, Nitried and 2 More",
                            "date": "AUG 27 2017"
                        },
                        {
                            "treatment_type": "Rimabotulinumotoxin:Pharmacy Received",
                            "description": "Albumin levels were higher than expected.Updated your case to the cold bruh",
                            "detail": "Lipid Panel",
                            "date": "AUG 27 2017"
                        },
                    ]}
                
                />
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
        // loadAllRx : rxActions.getAllTreatments
    },
    dispatch
)

export const RXContainer = connect<{}, RxProps, {}>(mapStateToProps, mapDispatchToProps)(Treatments)