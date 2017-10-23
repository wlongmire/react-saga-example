import * as React from 'react';
import * as _ from 'lodash';
import * as Rx from '../../../treatments';
import * as Tests from '../../../testorders';
import * as Imaging from '../../../imaging';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
import { 
    ChatChannelInfo,
    ChatMessage,
    Identity,
    GlobalState,
    Patient,
    TabControl, 
    TabItemInfo,
    Visit
} from '../../../common';
import { ChatChannel } from '../../../chat';
import { Biodrive, BiodriveListItemInfo } from '../../../biodrive';
import { VisitComponent } from '../../../visits';

import './PatientDetail.css';

interface PatientDetailProps {
    user: Identity;
    patient: Patient;
    patientList: Array<Patient>;
    channel?: ChatChannelInfo;
    onSendMessage: (message: ChatMessage) => void;
}

interface PatientDetailState {
    open : boolean;
    anchorEl?: any;
    patient?: Patient;
    tabItems?: Array<TabItemInfo>;
    selectedTabIndex: number;
}

class _PatientDetail extends React.Component<PatientDetailProps, PatientDetailState> {

    private _addContentElement: TabItemInfo;

    constructor() {
        super();
        this.state = {
            open: false,
            selectedTabIndex: -1
        };
        this.handleBiodriveItemSelected = this.handleBiodriveItemSelected.bind(this);
        this.handleClickNew = this.handleClickNew.bind(this);
        this.handleSelectedTabChanged = this.handleSelectedTabChanged.bind(this);
        this.handleTabClosing = this.handleTabClosing.bind(this);
        this.handleVisitCancel = this.handleVisitCancel.bind(this);
        this.handleVisitSave = this.handleVisitSave.bind(this);
    }

    componentDidMount() {
        this._addContentElement = {
            header: 'New Event',
            content: (
                <div className="new-container">
                    <input type="button" className="new-container-button" value="Treatment" onClick={() => this.handleClickNew('treatment')} />
                    <input type="button" className="new-container-button" value="Visit" onClick={() => this.handleClickNew('visit')} />
                    <input type="button" className="new-container-button" value="Test" onClick={() => this.handleClickNew('test')} />
                    <input type="button" className="new-container-button" value="Imaging" onClick={() => this.handleClickNew('imaging')} />
                </div>
            )
        } as TabItemInfo;

        const initialTabs: Array<TabItemInfo> = [
            {
                header: 'Biodrive',
                disableRemove: true,
                content: (
                    <Biodrive 
                        patient={this.props.patient} 
                        onDetailItemSelected={this.handleBiodriveItemSelected} 
                    />
                )
            }
        ];

        this.setState({tabItems: initialTabs, selectedTabIndex: 0});
    }

    createNewVisit(): Visit {
        return new Visit();
    }

    findVisit(id: string): Visit {
        if (!this.state.patient) return { } as Visit;
        return this.state.patient.visits.find((visit) => visit.id === id) || {} as Visit;
    }

    handleBiodriveItemSelected(info: BiodriveListItemInfo) {
        let newItem: TabItemInfo | undefined = undefined;
        let entityType: string = info.entityType;

        switch (entityType) {
            case 'treatment':
                newItem = {
                    header: info.header,
                    content: (<Rx.Components.Treatment />)
                } as TabItemInfo;
                break;
            case 'visit':
                newItem = {
                    header: info.header,
                    content: (<VisitComponent patientList={this.props.patientList} visit={this.findVisit(info.id)} />)
                } as TabItemInfo;
                break;
            case 'test':
                newItem = {
                    header: info.header,
                    content: (
                        <Tests.Components.AddTestSection
                            closeTestsCard={() => { console.log('closed tests') }}
                        />
                    )
                } as TabItemInfo;
                break;
            case 'imaging':
                newItem = {
                    header: info.header,
                    content: (
                        <Imaging.Components.AddImageSection
                            closeImagingCard={() => { console.log('closed imaging') }}
                        />
                    )
                } as TabItemInfo;
                break;                
        }

        if (newItem === undefined) return;
        let tabItems: TabItemInfo[] = (this.state.tabItems || []).concat([newItem]);
        this.setState({ tabItems, selectedTabIndex: tabItems.indexOf(newItem) });
    }

    handleClickNew(entityType: string) {

        let newItem: TabItemInfo | undefined = undefined;
        let header: string = `New ${_.upperFirst(entityType)}`;

        switch (entityType) {
            case 'treatment':
                newItem = {
                    header,
                    content: (<Rx.Components.Treatment />)
                } as TabItemInfo;
                break;
            case 'visit':
                newItem = {
                    header,
                    content: (
                        <VisitComponent 
                            patientList={this.props.patientList} 
                            visit={this.createNewVisit()} 
                            onSave={this.handleVisitSave} 
                            onCancel={this.handleVisitCancel} 
                        />
                    )
                } as TabItemInfo;
                break;
            case 'test':
                newItem = {
                    header,
                    content: (
                        <Tests.Components.AddTestSection
                            closeTestsCard={() => { console.log('closed tests') }}
                        />
                    )
                } as TabItemInfo;
                break;
            case 'imaging':
                newItem = {
                    header,
                    content: (<Imaging.Components.ImagingComponent />)
                } as TabItemInfo;
                break;                
        }

        if (newItem === undefined) return;
        let tabItems: TabItemInfo[] = (this.state.tabItems || []).concat([newItem]);
        const placeholderIndex = tabItems.findIndex((item) => item.header === 'New Event');
        if (placeholderIndex > -1) {
            tabItems.splice(placeholderIndex, 1);
        }
        this.setState({ tabItems, selectedTabIndex: tabItems.indexOf(newItem) });
    }

    handleSelectedTabChanged(item: TabItemInfo, index: number) {
        if (this.state.selectedTabIndex === index) return;
        this.setState({selectedTabIndex: index});
    }

    handleTabClosing(index: number) {
        if (!this.state.tabItems) return;
        const tabItems = _.cloneDeep(this.state.tabItems);
        tabItems.splice(index, 1);

        let currentIndex = this.state.selectedTabIndex;

        if (index < currentIndex) {
            currentIndex -= 1;
        } 

        if (currentIndex == tabItems.length) {
            currentIndex -= 1;
        }

        this.setState({ tabItems, selectedTabIndex: currentIndex});
    }

    handleVisitCancel() {

    }

    handleVisitSave(visit: Visit) {

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
                <div className="patient-detail-chat">
                    {patient &&
                        <ChatChannel user={this.props.user} channel={channel} patient={patient} onSendMessage={this.props.onSendMessage} />
                    }
                </div>
                <div className="patient-detail-body">
                    <TabControl 
                        items={this.state.tabItems}
                        canAdd={true}
                        selectedIndex={this.state.selectedTabIndex}
                        onAddTab={() => {
                            return this._addContentElement;
                        }}
                        onTabClosing={(tabItemInfo, index) => {
                            this.handleTabClosing(index);
                            return true;
                        }}
                        onSelectedChanged={this.handleSelectedTabChanged}
                    />
                </div>
            </div>     
        )
    }
}

interface ConnectedPatientDetailProps {
    channel?: ChatChannelInfo;
    onSendMessage: (message: ChatMessage) => void;
}

const mapStateToProps= (state: GlobalState) => {
    return {
        patient: state.patients.selectedPatient,
        patientList: state.patients.items,
        user: state.auth.identity
    }
}

export const PatientDetail= connect<{}, PatientDetailProps, ConnectedPatientDetailProps>(
    mapStateToProps,
    {
        
    }
)(_PatientDetail);