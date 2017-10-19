// import * as React from 'react';
// import VisitCollection from './VisitsCollection';
// // import ApplicationState from '../../../common';
// // import {connect} from 'react-redux';
// // import { bindActionCreators } from 'redux';
// // import {  Dispatch } from "redux";
// // import * as visitsActions from '../../actions';
// import * as VisitModels from '../../model';
// import * as Visits from './stubbedVisits';
// import './Visits.css';


// interface VisitsProps {
//     visits ?: VisitModels.Visits,
//     loadAllVisits ?: () => void,
//     getSingleVisit: (id:number) => void;
// }

// interface VisitComponentState {
//     openDrawer: boolean
//     visits?: Array<any>
// }

// export class VisitsContainer extends React.Component<VisitsProps, VisitComponentState>{
//     constructor() {
//         super()
//         this.state = {
//             openDrawer: false,
//         }
//         this.toggleDrawer = this.toggleDrawer.bind(this);
//     }

//     // componentDidMount(){    
//     //     this.props.loadAllVisits();
//     // }

//     toggleDrawer() {
//         this.setState({
//             openDrawer: !this.state.openDrawer
//         })
//     }

//     // _handleGetSingleVisit = (id:number) => {
//     //     console.log('Clicked Single Visit', id)
//     // }
    
//     render() {
//         return (
//             <div>
//                 <VisitCollection
//                     visits={Visits.getAllVisits}
//                     getVisitDetail={this.props.getSingleVisit}
//                 />
//             </div>
//         )
//     }
// }

// // const mapStateToProps = (state: ApplicationState.IState) => {
// //     return {
// //         visits : state.visits,
// //     }
// // }

// // const mapDispatchToProps = (dispatch:Dispatch<{}>) => bindActionCreators(
// //     {
// //         loadAllVisits : visitsActions.getAllVisits
// //     },
// //     dispatch
// // )

// // export const VisitsContainer = connect<{}, VisitsProps, {}>(mapStateToProps, mapDispatchToProps)(Visits)