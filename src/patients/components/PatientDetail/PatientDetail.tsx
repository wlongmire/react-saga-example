import * as React from 'react';
// import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
// import { GlobalState } from '../../../rootReducer';
import { Patient } from '../../';
// import { RouteComponentProps } from 'react-router-dom';
import { ChatChannel } from '../../../chat';
import { ChatChannelInfo } from '../../../chat';
import { ChatMessage } from '../../../chat/reducer';
import { Tabs, Tab } from 'material-ui/Tabs';
import * as Rx from '../../../treatments';
import * as Visits from '../../../visits';
import * as Tests from '../../../testorders';
import * as Imaging from '../../../imaging';
import * as Wellness from '../../../wellness';
import * as Others from '../../../others';

import {
    CustomTabComponent
} from '../../../common/UIComponents';

// const SafeUrlAssembler = require('safe-url-assembler');

const labelBackground = {
    backgroundColor: 'white',
};
  
const labelTitle = {
    color: "black",
};

const lableUnderline = {
    backgroundColor: '#f84445'
};

import './PatientDetail.css';

interface PatientDetailProps {
    patient: Patient;
    channel?: ChatChannelInfo;
    onSendMessage: (message: ChatMessage) => void;
}

interface PatientDetailState {
    open : boolean;
    anchorEl?: any;
    createNewVisit?: boolean;
    createNewTestOrder?: boolean;
    createNewImaging?: boolean;
    createNewTreatment?: boolean;
    showWellnessSection?:boolean;
    showOthersSection?: boolean;
    selectedTab : number;
    patient: object;
    tabs: Array<string>;
    tabState : object;
    clickedTab: string;
}

export class PatientDetail extends React.Component<PatientDetailProps, PatientDetailState> {

    constructor() {
        super();
        this.state = {
            open: false,
            selectedTab: 0,
            createNewVisit: false,
            patient: {},
            tabs : ['biodrive', 'hormone'],
            tabState : {
                 biodrive: true,
                 hormone: false
                 },
            clickedTab: ''
        };
    }

    componentDidMount() {
        // const token = localStorage.getItem('access_token') as string;
        // this.setState({userAccessToken: token});
    }

    _handleAddTab = () => {
        let currentState = {...this.state.tabState};
        let currentTabs = [...this.state.tabs];
        currentState['new'] = false;
        currentTabs.push('new');
        this.setState({
           tabState: currentState, 
           tabs: currentTabs
        });
     }

     handleClickImagingTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 3,
            open: false,
            createNewImaging : false
        })
    }

     _handleClickTab = (tabSelected:string) => {
        /**
         * Make an entirely new copy of state every time you click
         */
        let resetState = {...this.state.tabState};
        
        Object.keys(resetState).forEach((s:string) => {
            resetState[s] = false
        });

        let clickedState = Object.keys(resetState).filter((t:string) => {
            return t === tabSelected
        });

        let k = clickedState[0];
        resetState[k] = true;
        
        this.setState({
            tabState: resetState,
            clickedTab : clickedState[0]
        });
    }

    handleClickTreatmentsTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 0,
            open: false,
            createNewTreatment : false
        })
    }

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

    handleClickOthersTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 5,
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

    _handleGetSingleVisit = (id:number) => {
        // let visitClicked = Visits.utils.getSingleVisit(id);
        let currentState = {...this.state.tabState};
        let currentTabs = [...this.state.tabs];
        currentState['visit'] = false;
        currentTabs.push('visit');
            this.setState({
                tabState: currentState, 
                tabs: currentTabs,
                // visit: visitClicked,
                clickedTab: 'visit' // Allows us to be able to redirect to the right tab
            });
        }

    _handleRenderComponent = (tab: string) => {
        console.log('tab', tab);
        switch(tab) {
            case 'biodrive': 
                return this._renderBiodrive();

            case 'visit': 
                return this._renderVisit();

            case 'hormone':
                return this._renderHormoneSection();

            default:
                return this._renderBiodrive();
        }
    }

    _renderBiodrive = () => {
        return (
            <div id="main-section">
                <section className="biodrive-section">
                    <Tabs value={this.state.selectedTab} tabItemContainerStyle={labelBackground} inkBarStyle={lableUnderline}>
                        <Tab onClick={this.handleClickTreatmentsTab} value={0} label="Treatments" style={labelTitle}>
                            <div>
                            {
                                this.state.createNewTreatment ?
                                <Rx.Components.Treatment/>:
                                <Rx.Components.RXContainer/>
                            }
                            </div>
                        </Tab>

                        <Tab onClick={this.handleClickVisitsTab} value={1} label="Visits" style={labelTitle}>
                            <div>
                                { this.state.createNewVisit ? 
                                    <Visits.Components.VisitDrawer
                                        closeVisitCard={this.handleClickVisitsTab}
                                    /> :
                                    <Visits.Components.VisitsContainer
                                        getSingleVisit={this._handleGetSingleVisit}
                                    /> 
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
                                    /> :
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
                                /> :
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
                                <Others.Components.OthersContainer/>
                            </div>
                        </Tab>
                    </Tabs>
                </section>
            </div>
        )
    }

    _renderHormoneSection = () => {
        return (<div>Here</div>)
    }

    _renderVisit = () => {
        return (<div></div>)
        // return (            
        //     <Visits.Components.VisitContainer
        //         visit={this.state.visit || {
        //         id: 0,
        //         visit_type: '',
        //         doctor_type :'',
        //         location: ''
        //     }}
        // />)
    }

    render() {
        const { patient } = this.props;
        const { channel } = this.props;

        return (
            <div className="patient-detail">
                <div className="patient-detail-header">
                    <Avatar 
                        size={70}
                        backgroundColor="#f84445"
                        color="#ffffff">
                        {patient &&
                            patient.name ? patient.name.substr(0,1) : ''
                        }
                    </Avatar>
                    <div className="patient-detail-header-wrapper">
                        <div className="patient-detail-header-title">
                            {patient &&
                                patient.name 
                            }
                        </div>
                        <div className="patient-detail-header-subtitle">
                            Gender, Age
                        </div>
                    </div>
                </div>
                <div className="patient-detail-body">
                    <div className="patient-detail-chat">
                        {patient &&
                            <ChatChannel channel={channel} userId={patient.id} patient={patient} onSendMessage={this.props.onSendMessage} />
                        }
                        
                    </div>
                    <div className="patient-detail-info">
                        <CustomTabComponent
                            tabs={this.state.tabs}
                            handleClickTab={this._handleClickTab}
                            appComponent={this._handleRenderComponent(this.state.clickedTab)}
                            handleAddTab={this._handleAddTab}
                            clickedTab={this.state.clickedTab}
                        />
                        {/* <div className="admin-dosespot-dialog-wrapper">
                            <iframe className="admin-dosespot-iframe" src={ patientUrl } ></iframe>
                        </div> */}
                    </div>
                </div>
            </div>     
        )
    }
}