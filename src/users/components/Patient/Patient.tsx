import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from 'redux';
import * as patientActions  from '../../actions';
import ApplicationState from '../../../common';
import * as Model from '../../models';
import {Navigation} from '../../../navigation/components/Navigation';
import './Patient.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Popover from 'material-ui/Popover';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import MainModal from '../common/MainModal';
import {Tabs, Tab} from 'material-ui/Tabs';

import * as Visits from '../../../visits'

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
    showOthersModal?: boolean
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
            open: false
        };
    }
    componentDidMount(){
        this.props.loadSinglePatient(this.props.match.params.patientId)
    }
    handleTogglePopOver = (event: any) => {
        // This prevents ghost click.
        event.preventDefault();
    
        this.setState({
          open: true,
          anchorEl: event.currentTarget,
        });
      };
      handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };
    
      handleClickOnTreatments = () => {
        this.setState({
          showTreatmentsModal: !this.state.showTreatmentsModal,
          open:false
        })
      }
    
      handleClickOnVisits = () => {
        this.setState({
          showVisitsModal: !this.state.showVisitsModal,
          open:false
        })
      }
    
      handleClickOnImaging = () => {
        this.setState({
          showImagingModal: !this.state.showImagingModal,
          open:false
        })
      }
    
      handleClickOnWellness = () => {
        this.setState({
          showWellnessModal: !this.state.showWellnessModal,
          open:false
        })
      }
    
      handleClickOnTests = () => {
        this.setState({
          showTestsModal: !this.state.showTestsModal,
          open:false
        })
      }
    
    
    
      handleClickOnOthers = () => {
        this.setState({
          showOthersModal: !this.state.showOthersModal,
          open:false
        })
      }

      handleCloseModal = (event:any) => {
        console.log("event", event.target.id)
        if(event.target.id === "main-modal"){
          this.setState({
            showImagingModal: false,
            showTestsModal:false,
            showVisitsModal:false,
            showTreatmentsModal:false
          })
        }
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
                        <Tabs tabItemContainerStyle={labelBackground} inkBarStyle={lableUnderline}>
                        <Tab label="Treatments" style={labelTitle}>
                        <div>
                            Treatments
                        </div>
                        </Tab>

                        <Tab label="Visits" style={labelTitle}>
                        <div>
                            Visits
                        </div>
                        </Tab>

                        <Tab label="Tests" style={labelTitle}>
                        <div>
                            Tests
                        </div>
                        </Tab>

                        <Tab label="Imaging" style={labelTitle}>
                        <div>
                            Imaging
                        </div>
                        </Tab>

                        <Tab label="Wellness" style={labelTitle}>
                        <div>
                            Wellness
                        </div>
                        </Tab>

                        <Tab label="Other" style={labelTitle}>
                        <div>
                            Other
                        </div>
                        </Tab>
                        </Tabs>
                        {this.state.showTreatmentsModal &&
                        <MainModal
                        title="Treatment"
                        handleCloseModal={this.handleCloseModal}
                        />
                        }
                        {this.state.showVisitsModal &&
                        <MainModal
                        title="Visit"
                        handleCloseModal={this.handleCloseModal}
                        >
                            <Visits.Components.VisitDrawer/>
                        </MainModal>
                        }
                        {this.state.showImagingModal &&
                        <MainModal
                        title="Imaging"
                        handleCloseModal={this.handleCloseModal}
                        />
                        }
                        {this.state.showTestsModal &&
                        <MainModal
                        title="Test"
                        handleCloseModal={this.handleCloseModal}
                        />
                        }
                        <div id="add-event-btn">
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal:'right', vertical:'bottom'}}
                            targetOrigin={{horizontal:'left', vertical:'top'}}
                            onRequestClose={this.handleRequestClose}
                            >
                            
                            <Menu>
                            <MenuItem onClick={this.handleClickOnTreatments} primaryText="Treatments" />
                            <MenuItem onClick={this.handleClickOnVisits} primaryText="Visits" />
                            <MenuItem onClick={this.handleClickOnTests} primaryText="Tests" />
                            <MenuItem onClick={this.handleClickOnImaging} primaryText="Imaging" />
                            </Menu>
                        </Popover>
                        <FloatingActionButton 
                            onClick={this.handleTogglePopOver}
                            backgroundColor="#f84445">
                         <ContentAdd />
                         </FloatingActionButton>
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