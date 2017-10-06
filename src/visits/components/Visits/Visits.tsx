import * as React from 'react';
// import { VisitDrawer } from '../Visit/VisitDrawer';
import VisitCollection from './VisitsCollection';
// import RaisedButton from 'material-ui/RaisedButton';
// import {getAllVisits} from '../../selectors';
import ApplicationState from '../../../common';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from "redux";
import * as visitsActions from '../../actions';
import * as VisitModels from '../../model';
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
                <VisitCollection
                    visits={[
                        {
                            "visit_type": "LifeCo",
                            "doctor_type": "Chiropractor",
                            "location": "25 BroadWay, New York, NY 3880",
                            "description": "Visiting Dr.Peters for ANC",
                            "date": "27 Sept"
                        },
                        {
                            "visit_type": "Chiropractor",
                            "doctor_type": "Chiropractor",
                            "location": "25 BroadWay, New York, NY 3880",
                            "description": "Visiting Dr.Peters for ANC",
                            "date": "28 Sept"
                        }
                    ]}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: ApplicationState.IState) => {
    return {
        visits : state.visits,
    }
}

const mapDispatchToProps = (dispatch:Dispatch<{}>) => bindActionCreators(
    {
        loadAllVisits : visitsActions.getAllVisits
    },
    dispatch
)

export const VisitsContainer = connect<{}, VisitsProps, {}>(mapStateToProps, mapDispatchToProps)(Visits)