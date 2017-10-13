import * as React from 'react';
// import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
// import { GlobalState } from '../../../rootReducer';
import { Patient } from '../../';
// import { RouteComponentProps } from 'react-router-dom';
import { BioDriveList, BioDriveListItemInfo } from '../../../biodrive';
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
import { Identity } from '../../../auth';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import {
    CustomTabComponent
} from '../../../common/UIComponents';

// const SafeUrlAssembler = require('safe-url-assembler');

const labelBackground = {
    backgroundColor: 'white',
};

const inkBarStyle = {
    height: 4,
    backgroundColor: '#67B2A6',
    borderRadius: 3
};

const newActionButtonStyle = {
    height: 150,
    width: 150,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    margin: 12
};

import './PatientDetail.css';

interface PatientDetailProps {
    user: Identity;
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
    treatments: Array<BioDriveEntity>;
    visits: Array<BioDriveEntity>;
    tests: Array<BioDriveEntity>;
    imaging: Array<BioDriveEntity>;
    isDoseSpotOpen: boolean;
}

interface BioDriveEntity {
    date: Date;
    header: string;
    subheader: string;
    description: string;
    entityType: string;
    entityId: string;
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
            clickedTab: '',
            treatments: [{
                date: new Date('2017-09-16'),
                header: 'Rimabotulinumtoxin',
                subheader: 'Pharmacy Received',
                description: 'Take once everyday.',
                entityType: 'treatment',
                entityId: '1'
            },
            {
                date: new Date('2017-08-16'),
                header: 'Rituxan',
                subheader: 'Pharmacy Received',
                description: 'Do this all the time.',
                entityType: 'treatment',
                entityId: '2'
            },
            {
                date: new Date('2016-12-16'),
                header: 'Super Advil',
                subheader: 'Pharmacy Received',
                description: 'If yoy notice anything cray call me.',
                entityType: 'treatment',
                entityId: '3'
            }],
            tests: [
                {
                    date: new Date('2017-10-17'),
                    header: 'Sinus Infection Check',
                    subheader: 'Albumin, Nitried and 2 More',
                    description: 'Albumin levels were higher than expected. Updated your case to the cold bruh',
                    entityType: 'test',
                    entityId: '1'
                },
                {
                    date: new Date('2017-10-24'),
                    header: 'Routine Blood Work',
                    subheader: 'Lipid Panel',
                    description: 'Albumin levels were higher than expected. Updated your case to the cold bruh',
                    entityType: 'test',
                    entityId: '1'
                }
            ],
            visits: [{
                date: new Date('2017-09-27'),
                header: 'LifeCo',
                subheader: '25 Broadway, New York NY 3880',
                description: 'Visiting Dr. Peters for ANC',
                entityType: 'visit',
                entityId: '1'
            },
            {
                date: new Date('2017-09-28'),
                header: 'Chiropractor',
                subheader: '25 Broadway, New York NY 3880',
                description: 'Visiting Dr. Peters for ANC',
                entityType: 'visit',
                entityId: '2'
            }],
            imaging: [{
                date: new Date('2017-08-26'),
                header: 'Imaging: Request',
                subheader: 'CT Scan',
                description: 'Albumin levels were higher than expected.',
                entityType: 'imaging',
                entityId: '1'
            },
            {
                date: new Date('2017-09-28'),
                header: 'Imaging: Results In',
                subheader: 'MRI',
                description: 'Albumin levels were higher than expected.',
                entityType: 'imaging',
                entityId: '2'
            }],
            isDoseSpotOpen: false
        };

        this.showNewImaging = this.showNewImaging.bind(this);
        this.showNewTestOrder = this.showNewTestOrder.bind(this);
        this.showNewImaging = this.showNewImaging.bind(this);
        this.showNewTreatment = this.showNewTreatment.bind(this);
        this.showAddNewVisitTab = this.showAddNewVisitTab.bind(this);
        this.showNewVisit = this.showNewVisit.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
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
        }, () => {
            this.selectTab('new')
        });
     }

     showAddNewVisitTab() {
        let currentState = {...this.state.tabState};
        let currentTabs = [...this.state.tabs];
        currentState['new'] = false;
        let idx = currentTabs.indexOf('new');
        currentTabs.splice(idx, 1);
        currentTabs.push('LifeCo Visit');
        this.setState({
            tabState: currentState,
            tabs: currentTabs,
            clickedTab: 'LifeCo Visit'
        }, () => {
            this.selectTab('LifeCo Visit')
        });
     }

     showEditVisitTab() {

     }

     handleClickImagingTab = () => {
        window.scrollTo(0, 0);
        this.setState({
            selectedTab: 3,
            open: false,
            createNewImaging : false
        })
    }

     _handleClickTab = (tabSelected: string) => {
        this.selectTab(tabSelected);
    }

    selectTab(tab: string) {
        /**
         * Make an entirely new copy of state every time you click
         */
        let resetState = {...this.state.tabState};
        
        Object.keys(resetState).forEach((s: string) => {
            resetState[s] = false
        });

        let clickedState = Object.keys(resetState).filter((t: string) => {
            return t === tab
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

    handleCloseDialog() {
        this.setState({ isDoseSpotOpen: false });
    }

    handleOpenDialog() {
        this.setState({ isDoseSpotOpen: true });
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

            case 'new':
                return this._renderNew();

            case 'New LifeCo Visit':
                return this._renderNewVisit();

            case 'New Treatment':
                return this._renderNewTreatment();

            default:
                return this._renderBiodrive();
        }
    }

    getLabelTitleStyle(tabIndex: number): object {
        return {
            color: this.state.selectedTab == tabIndex ? '#67B2A6' : '#000000'
        };
    }

    showNewTreatment() {
        this.setState({
            createNewTreatment: true,
            clickedTab: 'New Treatment'
        });
    }

    showNewVisit() {
        this.setState({
            createNewVisit: true,
            clickedTab: 'New LifeCo Visit'
        });
    }

    showNewTestOrder() {
        this.setState({createNewTestOrder: true});
    }

    showNewImaging() {
        this.setState({createNewImaging: true});
    }

    _renderNew() {
        return (
            <div className="new-container">
                <RaisedButton label="Treatment" style={newActionButtonStyle} onClick={this.showNewTreatment} />
                <RaisedButton label="Visit" style={newActionButtonStyle} onClick={this.showNewVisit} />
                <RaisedButton label="Test" style={newActionButtonStyle} onClick={this.showNewTestOrder} />
                <RaisedButton label="Imaging" style={newActionButtonStyle} onClick={this.showNewImaging} />
            </div>
        )
    }

    _renderNewVisit() {
        return (<Visits.Components.VisitDrawer closeVisitCard={this.handleClickVisitsTab} />)
    }

    _renderNewTreatment() {
        console.log('renderNewTreatment');
        return (<Rx.Components.Treatment />);
    }

    _renderBiodrive = () => {
        return (
            <div id="main-section">
                <section className="biodrive-section">
                    <Tabs value={this.state.selectedTab} tabItemContainerStyle={labelBackground} inkBarStyle={inkBarStyle}>
                        <Tab onClick={this.handleClickTreatmentsTab} value={0} label="Treatments" style={this.getLabelTitleStyle(0)}>
                            <div>
                                {
                                    this.state.createNewTreatment ?
                                    <Rx.Components.Treatment /> :
                                    <BioDriveList 
                                        items={this.state.treatments.map((treatment, index) => {
                                            return treatment as BioDriveListItemInfo;
                                        })}
                                        onItemSelected={() => console.log('clicked')} 
                                    />    
                                }
                            {/* {
                                this.state.createNewTreatment ?
                                <Rx.Components.Treatment/>:
                                <Rx.Components.RXContainer/>
                            } */}
                            </div>
                        </Tab>

                        <Tab onClick={this.handleClickVisitsTab} value={1} label="Visits" style={this.getLabelTitleStyle(1)}>
                            <div>
                                {
                                    this.state.createNewTreatment ?
                                    <Visits.Components.VisitDrawer
                                        closeVisitCard={this.handleClickVisitsTab}
                                    /> :
                                    <BioDriveList 
                                        items={this.state.visits.map((visit, index) => {
                                            return visit as BioDriveListItemInfo;
                                        })}
                                        onItemSelected={() => console.log('clicked')} 
                                    />
                                }  
                                {/* { 
                                    this.state.createNewVisit ? 
                                    <Visits.Components.VisitDrawer
                                        closeVisitCard={this.handleClickVisitsTab}
                                    /> :
                                    <Visits.Components.VisitsContainer
                                        getSingleVisit={this._handleGetSingleVisit}
                                    /> 
                                } */}
                            </div>
                        </Tab>

                        <Tab onClick={this.handleClickTestOrdersTab} value={2} label="Tests" style={this.getLabelTitleStyle(2)}>
                            <div>
                                <div>
                                    {
                                        this.state.createNewTestOrder ?
                                        <Tests.Components.AddTestSection
                                            closeTestsCard={this.handleClickTestOrdersTab}
                                        /> :
                                        <BioDriveList 
                                            items={this.state.tests.map((test, index) => {
                                                return test as BioDriveListItemInfo;
                                            })}
                                            onItemSelected={() => console.log('clicked')} 
                                        />
                                    }
                                    {/* {
                                        this.state.createNewTestOrder ?
                                        <Tests.Components.AddTestSection
                                            closeTestsCard={this.handleClickTestOrdersTab}
                                        /> :
                                        <Tests.Components.TestOrdersContainer/>
                                    } */}
                                </div>
                            </div>
                        </Tab>

                        <Tab onClick={this.handleClickImagingTab} value={3} label="Imaging" style={this.getLabelTitleStyle(3)}>
                            <div>
                                {
                                    this.state.createNewImaging ? 
                                    <Imaging.Components.AddImageSection
                                        closeImagingCard={this.handleClickImagingTab}
                                    /> :
                                    <BioDriveList 
                                        items={this.state.tests.map((test, index) => {
                                            return test as BioDriveListItemInfo;
                                        })}
                                        onItemSelected={() => console.log('clicked')} 
                                    />
                                }
                            {/* {
                                this.state.createNewImaging ? 
                                <Imaging.Components.AddImageSection
                                    closeImagingCard={this.handleClickImagingTab}
                                /> :
                                <Imaging.Components.ImagingComponent/>
                            } */}
                            </div>
                        </Tab>

                        <Tab onClick={this.handleClickWellnessTab} value={4} label="Wellness" style={this.getLabelTitleStyle(4)}>
                            <div>
                                <Wellness.Components.WellnessComponent/>
                            </div>
                        </Tab>

                        <Tab onClick={this.handleClickOthersTab} value={5} label="Other" style={this.getLabelTitleStyle(5)}>
                            <div>
                                <Others.Components.OthersContainer/>
                            </div>
                        </Tab>

                    </Tabs>
                </section>
                <Dialog
                    title="DoseSpot"
                    modal={true}
                    bodyStyle={{
                        padding: 0
                    }}
                    style={{
                        maxWidth: null
                    }}
                    contentStyle={{
                        maxWidth: 1000
                    }}
                    actions={[
                        <RaisedButton
                            label="Close"
                            primary={true}
                            onClick={this.handleCloseDialog} />
                    ]}
                    open={this.state.isDoseSpotOpen}
                    onRequestClose={this.handleCloseDialog}
                    autoScrollBodyContent={true}>
                    <div className="admin-dosespot-dialog-wrapper">
                        <iframe className="admin-dosespot-iframe" src=""></iframe>
                    </div>
                </Dialog>
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
                            <ChatChannel user={this.props.user} channel={channel} patient={patient} onSendMessage={this.props.onSendMessage} />
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