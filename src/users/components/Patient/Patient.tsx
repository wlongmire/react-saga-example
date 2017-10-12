// import * as React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {  Dispatch } from 'redux';
// // import * as patientActions  from '../../actions';
// import ApplicationState from '../../../common';
// import * as Model from '../../models';
// // import {Navigation} from '../../../navigation/components/Navigation';
// import {
//     CustomTabComponent
// } from '../../../common/UIComponents';
// import './Patient.css';
// // import {Tabs, Tab} from 'material-ui/Tabs';
// // import * as Visits from '../../../visits'
// // import * as Tests from '../../../testorders';
// // import * as Wellness from '../../../wellness';
// // import * as Others from '../../../others';
// // import * as Rx from '../../../treatments';
// // import * as Imaging from '../../../imaging';

// interface Params {
//     patientId: string,
//     // patient?: Model.Patient
// }

// interface MatchParams{
//     params : Params
// }

// interface P {
//     loadSinglePatient:(id:string)=>void;
//     match : MatchParams;
//     patient: Model.Patient;
// }

// interface IVisit {
//     id: number;
//     description?: string;
//     doctor_type: string;
//     location: string;
//     visit_type: string;
// }

// interface S {
//     open : boolean;
//     anchorEl?: any;
//     createNewVisit?: boolean;
//     createNewTestOrder?: boolean;
//     createNewImaging?: boolean;
//     createNewTreatment?: boolean;
//     showWellnessSection?:boolean;
//     showOthersSection?: boolean;
//     selectedTab : number;
//     patient: object;
//     tabs: Array<string>;
//     tabState : object;
//     clickedTab: string;
//     visit?: IVisit;
// }

// // const labelBackground = {
// //     backgroundColor: 'white',
// //   }
  
// //   const labelTitle = {
// //     color: "black",
// //   }
// //   const lableUnderline = {
// //     backgroundColor: '#f84445'
// // }

// class PatientContainer extends React.Component<P,S>{
//     constructor() {
//         super();
//         this.state = {
//             open: false,
//             selectedTab: 0,
//             createNewVisit: false,
//             patient: {},
//             tabs : ['biodrive', 'hormone'],
//             tabState : {
//                 biodrive: true,
//                 hormone: false
//                 },
//             clickedTab: '',
//             visit: {
//                 id: 0,
//                 visit_type: '',
//                 doctor_type :'',
//                 location: ''
//             }
//         };
//     }
//     componentWillMount(){
//         // let patient = patientActions.loadSinglePatient(this.props.match.params.patientId);
//         // this.setState({patient})
//     }

//     handleClosePopOver = (event: any) => {
//         // This prevents ghost click.
//         event.preventDefault();
    
//         this.setState({
//           open: false,
//         });
//       };

//     _handleShowPopOver = (event: any) => {
//         this.setState({
//             open: true,
//             anchorEl: event.currentTarget
//         })
//     }

//     _handleHidePopOver = (event: any) => {
//         this.setState({
//             open: false,
//         })
//     }

//     handleRequestClose = () => {
//         this.setState({
//           open: false,
//         });
//       };

//     handleClickVisitsTab = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//             selectedTab: 1,
//             open: false,
//             createNewVisit : false
//         })
//     }  

//     handleClickTestOrdersTab = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//             selectedTab: 2,
//             open: false,
//             createNewTestOrder : false
//         })
//     } 

//     handleClickTreatmentsTab = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//             selectedTab: 0,
//             open: false,
//             createNewTreatment : false
//         })
//     }

//     handleClickImagingTab = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//             selectedTab: 3,
//             open: false,
//             createNewImaging : false
//         })
//     }

//     handleClickWellnessTab = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//             selectedTab: 4,
//             open: false,
//             createNewImaging : false
//         })
//     }

//     handleClickOthersTab = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//             selectedTab: 5,
//             open: false,
//             createNewImaging : false
//         })
//     }

//     handleClickOnAddTreatments = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//           open:false,
//           selectedTab: 0,
//           createNewTreatment: true
//         })
//       }

//     handleClickOnAddVisits = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//           open:false,
//           createNewVisit : true,
//           selectedTab: 1
//         })
//     }
    
//     handleClickOnAddImaging = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//           open:false,
//           createNewImaging: true,
//           selectedTab: 3
//         })
//     }
    
//     handleClickOnAddTests = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//           createNewTestOrder: true,
//           open:false,
//           selectedTab:2
//         })
//     } 

//     handleClickOnAddWellness = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//           open:false,
//           selectedTab:4
//         })
//     }
    
//     handleClickOnAddOthers = () => {
//         window.scrollTo(0, 0);
//         this.setState({
//           open:false,
//           selectedTab:5
//         })
//     } 

//     _handleClickTab = (tabSelected:string) => {
//         /**
//          * Make an entirely new copy of state every time you click
//          */
//         let resetState = {...this.state.tabState};
//         Object.keys(resetState).forEach((s:string)=>{
//             resetState[s] = false
//         })
//         let clickedState = Object.keys(resetState).filter((t:string) => {
//             return t === tabSelected
//         }
//         )
//         let k = clickedState[0]
//         resetState[k] = true;
//         console.log(clickedState)
//         this.setState({
//             tabState: resetState,
//             clickedTab : clickedState[0]
//         })
//     }

//     _handleAddTab = () => {
//         let currentState = {...this.state.tabState};
//         let currentTabs = [...this.state.tabs]
//         currentState['new'] = false
//         currentTabs.push('new');
//         this.setState({
//            tabState: currentState, 
//            tabs: currentTabs
//         })

//     }

//     _handleGetSingleVisit = (id:number) => {
//         // let visitClicked = Visits.utils.getSingleVisit(id);
//         let currentState = {...this.state.tabState};
//         let currentTabs = [...this.state.tabs]
//         currentState['visit'] = false
//         currentTabs.push('visit');
//         this.setState({
//             tabState: currentState, 
//             tabs: currentTabs,
//             // visit: visitClicked,
//             clickedTab: 'visit' // Allows us to be able to redirect to the right tab
//          })
         
//     }

//     _renderVisit = () =>{
//         return (
//             <div></div>
//             // <Visits.Components.VisitContainer
//             //     visit={this.state.visit || {
//             //     id: 0,
//             //     visit_type: '',
//             //     doctor_type :'',
//             //     location: ''
//             // }}
//             // />
//         )
//     }

//     _renderBiodrive = () => {
//         return (
//         <div id="main-section">
//         {/* <section className="biodrive-section">
//         <Tabs value={this.state.selectedTab} tabItemContainerStyle={labelBackground} inkBarStyle={lableUnderline}>
//         <Tab onClick={this.handleClickTreatmentsTab} value={0} label="Treatments" style={labelTitle}>
//         <div>
//             {
//                 this.state.createNewTreatment ?
//                 <Rx.Components.TreatmentsComponent/>:
//                 <Rx.Components.RXContainer/>
//             }
           
//         </div>
//         </Tab>

//         <Tab onClick={this.handleClickVisitsTab} value={1} label="Visits" style={labelTitle}>
//         <div>
//             { this.state.createNewVisit ? 
//             <Visits.Components.VisitDrawer
//                 closeVisitCard={this.handleClickVisitsTab}
//             />:
//             <Visits.Components.VisitsContainer
//                 getSingleVisit={this._handleGetSingleVisit}
//             /> 
//             }
//         </div>
//         </Tab>

//         <Tab onClick={this.handleClickTestOrdersTab} value={2} label="Tests" style={labelTitle}>

//         <div>
//         <div>
//             {
//                 this.state.createNewTestOrder ?
//                 <Tests.Components.AddTestSection
//                     closeTestsCard={this.handleClickTestOrdersTab}
//                 />:
//                 <Tests.Components.TestOrdersContainer/>
//             }
//         </div>
//         </div>
//         </Tab>

//         <Tab onClick={this.handleClickImagingTab} value={3} label="Imaging" style={labelTitle}>
//         <div>
//             {
//                 this.state.createNewImaging ? 
//                 <Imaging.Components.AddImageSection
//                     closeImagingCard={this.handleClickImagingTab}
//                 />:
//                 <Imaging.Components.ImagingComponent/>
//             }
            
//         </div>
//         </Tab>

//         <Tab onClick={this.handleClickWellnessTab} value={4} label="Wellness" style={labelTitle}>
//         <div>
//             <Wellness.Components.WellnessComponent/>
//         </div>
//         </Tab>

//         <Tab onClick={this.handleClickOthersTab} value={5} label="Other" style={labelTitle}>
//         <div>
//             <Others.Components.OthersContainer/>
//         </div>
//         </Tab>
//         </Tabs>
//         </section> */}
//     </div>
//     )
//     }

//     _renderHormoneSection = () => {
//         return (<div>Here</div>)
//     }
    

//     _handleRenderComponent = (tab: string) => {
//         switch(tab){
//             case 'biodrive': 
//                 return this._renderBiodrive();
//             case 'visit': 
//                 return this._renderVisit();
//             case 'hormone':
//                 return this._renderHormoneSection();
//             default:
//                 return this._renderBiodrive();

//         }
//     }

//     render(){
//         console.log(this.state)
//         let patientData = this.state.patient;
//         if(Object.keys(patientData).length === 0){
//             return(
//                 <div>Loading ...</div>
//             )
//         }
        
//         return(
//             <div className="patient-view">
//                 {/* <Navigation/> */}
//                 <div className="patient-details">
//                     <div>
//                         <img className="patient-avatar" src={patientData['avatar']}/>
//                     </div>
//                     <div>
//                     <p className="patient-name-details">{patientData['name']}</p>
//                     <span>{patientData['gender']}</span>,
//                     <span>{patientData['age']}</span>
//                     </div>
//                 </div>
//                 <CustomTabComponent
//                 tabs={this.state.tabs}
//                 handleClickTab={this._handleClickTab}
//                 appComponent={this._handleRenderComponent(this.state.clickedTab)}
//                 handleAddTab={this._handleAddTab}
//                 clickedTab={this.state.clickedTab}
//                 />

//         //     </div>
//         )
//     }
// }

// const mapStateToProps = (state:ApplicationState.IState) => {
//     return {
//         patient: state.patients
//     }
// } 

// const mapDispatchToProps = (dispatch: Dispatch<{}>) => bindActionCreators(
//     {
//         // loadSinglePatient : patientActions.loadSinglePatient
//     },
//     dispatch
// )
// export const Patient = connect<{}, P, {}>(mapStateToProps,mapDispatchToProps)(PatientContainer);