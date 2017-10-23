import * as React from 'react';
import { GlobalState } from '../../../common';
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
                            "date": "27 Aug"
                        },
                        {
                            "treatment_type": "Rimabotulinumotoxin:Pharmacy Received",
                            "description": "Albumin levels were higher than expected.Updated your case to the cold bruh",
                            "detail": "Lipid Panel",
                            "date": "27 Aug"
                        },
                    ]}
                
                />
            </div>
        )
    }
}

const mapStateToProps = (state: GlobalState) => {
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