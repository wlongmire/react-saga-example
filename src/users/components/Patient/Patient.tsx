import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Dispatch } from 'redux';
import * as patientActions  from '../../actions';
import ApplicationState from '../../../common';
import * as Model from '../../models';
import {Navigation} from '../../../navigation/components/Navigation';
import {
    CustomTabComponent
} from '../../../common/UIComponents';
import './Patient.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import * as Visits from '../../../visits'
import * as Tests from '../../../testorders';
import * as Wellness from '../../../wellness';
import * as Others from '../../../others';
import * as Rx from '../../../treatments';
import * as Imaging from '../../../imaging';

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
    createNewVisit?: boolean;
    createNewTestOrder?: boolean;
    createNewImaging?: boolean;
    createNewTreatment?: boolean;
    showWellnessSection?:boolean;
    showOthersSection?: boolean;
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
            selectedTab: 0,
            createNewVisit: false
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
        });
      };

    _handleShowPopOver = (event: any) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        })
    }

    _handleHidePopOver = (event: any) => {
        this.setState({
            open: false,
        })
    }

    handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };

    handleClickVisitsTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 1,
            open: false,
            createNewVisit : false
        })
    }  

    handleClickTestOrdersTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 2,
            open: false,
            createNewTestOrder : false
        })
    } 

    handleClickTreatmentsTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 0,
            open: false,
            createNewTreatment : false
        })
    }

    handleClickImagingTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 3,
            open: false,
            createNewImaging : false
        })
    }

    handleClickWellnessTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 4,
            open: false,
            createNewImaging : false
        })
    }

    handleClickOthersTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 5,
            open: false,
            createNewImaging : false
        })
    }

    handleClickOnAddTreatments = () => {
        window.scrollTo(0, 0);
        this.setState({
          open:false,
          selectedTab: 0,
          createNewTreatment: true
        })
      }

    handleClickOnAddVisits = () => {
        window.scrollTo(0, 0);
        this.setState({
          open:false,
          createNewVisit : true,
          selectedTab: 1
        })
    }
    
    handleClickOnAddImaging = () => {
        window.scrollTo(0, 0);
        this.setState({
          open:false,
          createNewImaging: true,
          selectedTab: 3
        })
    }
    
    handleClickOnAddTests = () => {
        window.scrollTo(0, 0);
        this.setState({
          createNewTestOrder: true,
          open:false,
          selectedTab:2
        })
    } 

    handleClickOnAddWellness = () => {
        window.scrollTo(0, 0);
        this.setState({
          open:false,
          selectedTab:4
        })
    }
    
    handleClickOnAddOthers = () => {
        window.scrollTo(0, 0);
        this.setState({
          open:false,
          selectedTab:5
        })
    } 
    

    render(){
        if(!this.props.patient['patient']){
            return(
                <div>Loading ...</div>
            )
        }
        let patientData = this.props.patient['patient'];
        let bioDriveData = (<div id="main-section">
        <section className="biodrive-section">
        <Tabs value={this.state.selectedTab} tabItemContainerStyle={labelBackground} inkBarStyle={lableUnderline}>
        <Tab onClick={this.handleClickTreatmentsTab} value={0} label="Treatments" style={labelTitle}>
        <div>
            {
                this.state.createNewTreatment ?
                <Rx.Components.TreatmentsComponent/>:
                <Rx.Components.RXContainer/>
            }
           
        </div>
        </Tab>

        <Tab onClick={this.handleClickVisitsTab} value={1} label="Visits" style={labelTitle}>
        <div>
            { this.state.createNewVisit ? 
            <Visits.Components.VisitDrawer
                closeVisitCard={this.handleClickVisitsTab}
            />:
            <Visits.Components.VisitsContainer/> 
            }
        </div>
        </Tab>

        <Tab onClick={this.handleClickTestOrdersTab} value={2} label="Tests" style={labelTitle}>

        <div>
        <div>
            {
                this.state.createNewTestOrder ?
                <Tests.Components.AddTestSection
                    closeTestsCard={this.handleClickTestOrdersTab}
                />:
                <Tests.Components.TestOrdersContainer/>
            }
        </div>
        </div>
        </Tab>

        <Tab onClick={this.handleClickImagingTab} value={3} label="Imaging" style={labelTitle}>
        <div>
            {
                this.state.createNewImaging ? 
                <Imaging.Components.AddImageSection
                    closeImagingCard={this.handleClickImagingTab}
                />:
                <Imaging.Components.ImagingComponent/>
            }
            
        </div>
        </Tab>

        <Tab onClick={this.handleClickWellnessTab} value={4} label="Wellness" style={labelTitle}>
        <div>
            <Wellness.Components.WellnessComponent/>
        </div>
        </Tab>

        <Tab onClick={this.handleClickOthersTab} value={5} label="Other" style={labelTitle}>
        <div>
            <Others.Components.OthersComponent/>
        </div>
        </Tab>
        </Tabs>
        </section>
    </div>
    )
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
                <CustomTabComponent
                bioDriveComponent={bioDriveData}
                />

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