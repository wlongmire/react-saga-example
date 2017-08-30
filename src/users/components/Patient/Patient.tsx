import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from 'redux';
import * as patientActions  from '../../actions';
import ApplicationState from '../../../common';
import * as Model from '../../models';
import {Navigation} from '../../../navigation/components/Navigation';
import './Patient.css';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
import AddSection from '../common/AddSection';
import {Tabs, Tab} from 'material-ui/Tabs';
import * as Visits from '../../../visits'
import * as Tests from '../../../testorders';
import * as Wellness from '../../../wellness';
import * as Others from '../../../others';
import * as PopOverComponent from '../../../common/UIComponents';
import * as FloatingBtn from '../../../common/UIComponents';

interface Params {
    patientId: string
}

interface MatchParams{
    params : Params
}

interface P {
    loadSinglePatient:(id:string)=>void;
    match : MatchParams;
    patient: Model.Patient
}

interface S {
    open : boolean;
    anchorEl?: any;
    showTreatmentsModal?: boolean;
    showVisitsModal?: boolean;
    showTestsModal?: boolean;
    showImagingModal?: boolean;
    showWellnessModal?:boolean;
    showOthersModal?: boolean;
    tabs: Array<string>;
    selectedTab : number;
}

const labelBackground = {
    backgroundColor: 'white',
  }
  
  const labelTitle = {
    color: "black",
  }
  const lableUnderline = {
    backgroundColor: '#f84445'
}

class PatientContainer extends React.Component<P,S>{
    constructor(){
        super();
        this.state = {
            open: false,
            tabs: [
                "treatments", "visits", "tests", "imaging"
            ],
            selectedTab: 0
        };
    }
    componentDidMount(){
        this.props.loadSinglePatient(this.props.match.params.patientId)
    }
    handleClosePopOver = (event: any) => {
        // This prevents ghost click.
        event.preventDefault();
    
        this.setState({
          open: false,
          anchorEl: event.currentTarget,
        });
      };

    _handleShowPopOver = (event: any) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        })
    }

    _handleHidePopOver = (event: any) => {
        console.log("Mouse Out")
        this.setState({
            open: false,
        })
    }

    handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };
    
    handleClickOnTreatments = () => {
        this.setState({
          open:false,
          selectedTab: 0
        })
      }
    
      handleClickOnVisits = () => {
        this.setState({
          open:false,
          selectedTab: 1
        })
      }
    
      handleClickOnImaging = () => {
        this.setState({
          open:false,
          selectedTab: 3
        })
      }
    
      handleClickOnWellness = () => {
        this.setState({
          open:false,
          selectedTab: 4
        })
      }
    
      handleClickOnTests = () => {
        this.setState({
          showTestsModal: !this.state.showTestsModal,
          open:false,
          selectedTab:2
        })
      }    
    
      handleClickOnOthers = () => {
        this.setState({
          showOthersModal: !this.state.showOthersModal,
          open:false,
          selectedTab:5
        })
      }

      handleCloseModal = (event:any) => {
        if(event.target.id === "main-modal"){
          this.setState({
            showImagingModal: false,
            showTestsModal:false,
            showVisitsModal:false,
            showTreatmentsModal:false
          })
        }
      }

      _handleChange = (e:any) => {
        console.log(e)
      }

      _handleClick = (e:any) =>{
          console.log(e)
      }

    render(){
        if(!this.props.patient['patient']){
            return(
                <div>Loading ...</div>
            )
        }
        let patientData = this.props.patient['patient'];
        return(
            <div className="patient-view">
                <Navigation/>
                <div className="patient-details">
                    <div>
                        <img className="patient-avatar" src={patientData.avatar}/>
                    </div>
                    <div>
                    <p className="patient-name-details">{patientData.name}</p>
                    <span>{patientData.gender}</span>,
                    <span>{patientData.age}</span>
                    </div>
                </div>
                <div id="main-section">
                    <section className="chat-section">
                        <span className="chat-title">Chat</span>
                    </section>
                    <section className="biodrive-section">
                    <Tabs value={this.state.selectedTab} tabItemContainerStyle={labelBackground} inkBarStyle={lableUnderline}>
                    <Tab onClick={this.handleClickOnTreatments} value={0} label="Treatments" style={labelTitle}>
                    <div>
                        Treatments
                    </div>
                    </Tab>

                    <Tab onClick={this.handleClickOnVisits} value={1} label="Visits" style={labelTitle}>
                    <div>
                        <Visits.Components.VisitDrawer/>
                    </div>
                    </Tab>

                    <Tab onClick={this.handleClickOnTests} value={2} label="Tests" style={labelTitle}>

                    <div>
                    <div>
                        <Tests.Components.AddTestSection/>
                    </div>
                    </div>
                    </Tab>

                    <Tab onClick={this.handleClickOnImaging} value={3} label="Imaging" style={labelTitle}>
                    <div>
                        Imaging
                    </div>
                    </Tab>

                    <Tab onClick={this.handleClickOnWellness} value={4} label="Wellness" style={labelTitle}>
                    <div>
                        <Wellness.Components.WellnessComponent/>
                    </div>
                    </Tab>

                    <Tab onClick={this.handleClickOnOthers} value={5} label="Other" style={labelTitle}>
                    <div>
                        <Others.Components.OthersComponent/>
                    </div>
                    </Tab>
                    </Tabs>
                        {this.state.showVisitsModal &&
                        <AddSection

                        handleCloseModal={this.handleCloseModal}
                        >
                            <Visits.Components.VisitDrawer/>
                        </AddSection>
                        }

                        {this.state.open &&
                        <PopOverComponent.PopOver
                            _handleClickTest = {this.handleClickOnTests}
                            _handleClickImaging = {this.handleClickOnImaging}
                            _handleClickFollowUp = {this.handleClickOnOthers}
                            _handleClickOTC = {this.handleClickOnOthers}
                            _handleClickTreatments = {this.handleClickOnTreatments}
                            _handleClickVisits = {this.handleClickOnVisits}
                            _handleClickCase = {this.handleClickOnWellness}
                        />
                        }
                        <div id="add-event-btn"
                        className={this.state.open ? "floating-btn":"floating-btn-rotate"}

                        >
                        <div
                        >
                        <FloatingBtn.FloatingBtn
                        onMouseEnter={this._handleShowPopOver}
                        onClick={this.handleClosePopOver}
                        
                        />
                        </div>
                        
                         </div>
                    </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:ApplicationState.IState) => {
    return {
        patient: state.patients
    }
} 

const mapDispatchToProps = (dispatch: Dispatch<{}>) => bindActionCreators(
    {
        loadSinglePatient : patientActions.loadSinglePatient
    },
    dispatch
)
export const Patient = connect<{}, P, {}>(mapStateToProps,mapDispatchToProps)(PatientContainer);