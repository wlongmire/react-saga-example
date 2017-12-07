import * as React from 'react';
import * as _ from 'lodash';
import * as uuidv4 from 'uuid/v4';
import Treatment from '../../../treatments/containers/Treatment';
import * as Tests from '../../../testorders';
import * as Imaging from '../../../imaging';
import Avatar from 'material-ui/Avatar';
import { RouteComponentProps } from 'react-router-dom';
import { 
    ChannelEventMessage,
    ChannelEventMessageRequest,
    ChatMessage,
    Identity,
    Other,
    Patient,
    TabControl, 
    TabItemInfo,
    Treatment as TreatmentModel,
    Visit
} from '../../../common';
import chat from '../../../chat';
import biodrive from '../../../biodrive';
import VisitComponent from '../../../visits/components/VisitComponent/VisitComponent';

import './PatientDetail.css';

interface PatientDetailProps extends RouteComponentProps<{patientId: number}> {
    user: Identity;
    messages: Array<ChannelEventMessage<ChatMessage>>;
    patients: Array<Patient>;
    treatments: Array<TreatmentModel>;
    visits: Array<Visit>;
    other: Other;
    fetchVisits: (channelId: number) => void;
    fetchTreatments: (channelId: number) => void;
    loadOther: (channelId: number) => void;
    sendMessage: (message: ChannelEventMessageRequest<ChatMessage>) => void;
    onSaveVisit: (visit: Visit, channelId: number) => void;
}

interface PatientDetailState {
    open: boolean;
    // anchorEl?: any;
    tabItems?: Array<TabItemInfo>;
    selectedTabIndex: number;
    selectedPatient?: Patient;
    messages: Array<ChannelEventMessage<ChatMessage>>;
}

class PatientDetailForm extends React.Component<PatientDetailProps, PatientDetailState> {

    private _addContentElement: TabItemInfo;

    constructor() {
        super();

        this.state = {
            open: false,
            selectedTabIndex: -1,
            messages: []
        };
    }

    componentDidMount() {
        this._addContentElement = {
            header: 'New Event',
            content: (
                <div className="new-container">
                    <input
                        type="button"
                        className="new-container-button"
                        value="Treatment"
                        onClick={() => this.handleClickNew('treatment')}
                    />
                    <input
                        type="button"
                        className="new-container-button"
                        value="Visit"
                        onClick={() => this.handleClickNew('visit')}
                    />
                    {/*
                        <input
                            type="button"
                            className="new-container-button"
                            value="Test"
                            onClick={() => this.handleClickNew('test')}
                        />
                        <input
                            type="button"
                            className="new-container-button"
                            value="Imaging"
                            onClick={() => this.handleClickNew('imaging')}
                        />
                    */}
                </div>
            )
        } as TabItemInfo;

        let selectedPatient = this.props.patients.find((patient) =>
            patient.id === Number(this.props.match.params.patientId)
        );

        if (selectedPatient !== undefined) {
            let channelId = selectedPatient.primaryChannel;
            let chatMessages = this.props.messages.filter((message) => message.channel_id === channelId);

            this.props.fetchVisits(channelId);
            this.props.fetchTreatments(channelId);
            this.props.loadOther(channelId);

            const initialTabs: Array<TabItemInfo> = [
                {
                    header: 'Biodrive',
                    disableRemove: true,
                    content: (
                        <biodrive.components.Biodrive
                            patient={selectedPatient} 
                            treatments={this.props.treatments}
                            visits={this.props.visits}
                            other={this.props.other}
                            onDetailItemSelected={() => { /* TODO implement */ }}
                        />
                    )
                }
            ];

            this.setState({
                tabItems: initialTabs, 
                selectedTabIndex: 0,
                selectedPatient,
                messages: chatMessages
            });
        }       
    }

    componentWillReceiveProps(props: PatientDetailProps) {
        const { selectedPatient } = this.state;

        if (selectedPatient) {
            this.setState({
                messages: props.messages.filter((message) => message.channel_id === selectedPatient.primaryChannel)
            });
        }
    }

    createNewTreatment(): TreatmentModel {
        let treatment = new TreatmentModel();
        treatment.id = uuidv4();
        return treatment;
    }

    createNewVisit(): Visit {
        let visit = new Visit();
        visit.id = uuidv4();
        return visit;
    }

    // findTreatment(id: string): Treatment {
    //     if (!this.state..patient) return { } as Treatment;
    //     let treatment = this.props.patient.treatments.find((treatment) => {
    //         return treatment.id === id;
    //     }) || {} as Treatment;
    //     return treatment;
    // }

    // findVisit(id: string): Visit {
    //     if (!this.props.patient) return { } as Visit;
    //     let visit = this.props.patient.visits.find((visit) => {
    //         return visit.id === id;
    //     }) || {} as Visit;
    //     return visit;
    // }

    // handleBiodriveItemSelected(info: biodrive.reducer.BiodriveListItemInfo) {
        // let newItem: TabItemInfo | undefined = undefined;
        // let entityType: string = info.entityType;

        // switch (entityType) {
        //     case 'treatment':
        //         newItem = {
        //             header: info.header,
        //             content: (
        //                 <Rx.TreatmentComponent 
        //                    treatment={this.findTreatment(info.id)} 
        //                 />
        //             )
        //         } as TabItemInfo;
        //         break;
        //     case 'visit':
        //         newItem = {
        //             header: info.header,
        //             content: (
        //                 <VisitComponent 
        //                     patientList={this.props.patientList} 
        //                     user={this.props.user}
        //                     visit={this.findVisit(info.id)} 
        //                     onCancel={this.handleVisitCancel}
        //                     onSave={this.handleVisitSave}
        //                 />
        //             )
        //         } as TabItemInfo;
        //         break;
        //     case 'test':
        //         newItem = {
        //             header: info.header,
        //             content: (
        //                 <Tests.Components.AddTestSection
        //                     closeTestsCard={() => {  }}
        //                 />
        //             )
        //         } as TabItemInfo;
        //         break;
        //     case 'imaging':
        //         newItem = {
        //             header: info.header,
        //             content: (
        //                 <Imaging.Components.AddImageSection
        //                     closeImagingCard={() => {  }}
        //                 />
        //             )
        //         } as TabItemInfo;
        //         break;                
        // }

        // if (newItem === undefined) return;
        // let tabItems: TabItemInfo[] = (this.state.tabItems || []).concat([newItem]);
        // this.setState({ tabItems, selectedTabIndex: tabItems.indexOf(newItem) });
    // }

    handleClickNew = (entityType: string) => {

        let newItem: TabItemInfo | undefined = undefined;
        let header: string = `New ${_.upperFirst(entityType)}`;

        switch (entityType) {
            case 'treatment':
                newItem = {
                    header,
                    content: (
                    <Treatment treatment={this.createNewTreatment()} />)
                } as TabItemInfo;
                break;
            case 'visit':
                newItem = {
                    header,
                    content: (
                        <VisitComponent 
                            patientList={this.props.patients} 
                            user={this.props.user}
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
                            closeTestsCard={() => { /* TODO implement */ }}
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
            default:
                break;
        }

        if (newItem === undefined) {
            return;
        }
        let tabItems: TabItemInfo[] = (this.state.tabItems || []).concat([newItem]);
        const placeholderIndex = tabItems.findIndex((item) => item.header === 'New Event');
        if (placeholderIndex > -1) {
            tabItems.splice(placeholderIndex, 1);
        }
        this.setState({ tabItems, selectedTabIndex: tabItems.indexOf(newItem) });
    }

    handleSelectedTabChanged = (item: TabItemInfo, index: number) => {
        if (this.state.selectedTabIndex === index) {
            return;
        }
        this.setState({selectedTabIndex: index});
    }

    handleSendMessage = (message: ChannelEventMessageRequest<ChatMessage>) => {
        if (this.props.sendMessage) {
            this.props.sendMessage(message);
        }
    }

    handleTabClosing = (index: number) => {
        if (!this.state.tabItems) {
            return;
        }
        const tabItems = _.cloneDeep(this.state.tabItems);
        tabItems.splice(index, 1);

        let currentIndex = this.state.selectedTabIndex;

        if (index < currentIndex) {
            currentIndex -= 1;
        } 

        if (currentIndex === tabItems.length) {
            currentIndex -= 1;
        }

        this.setState({ tabItems, selectedTabIndex: currentIndex});
    }

    handleVisitCancel = (visit: Visit) => {
        if (!this.state.tabItems) {
            return;
        }
        let index = this.state.tabItems.findIndex((tabItem) => {
            let component = tabItem.content as VisitComponent;
            if (component.props.visit) {
                return component.props.visit.id === visit.id;
            }
            return false;
        });
        this.handleTabClosing(index);
    }

    handleVisitSave = (visit: Visit) => {
        // if (this.props.onSaveVisit) {
        //     this.props.onSaveVisit(visit, this.props.patient.primaryChannel);
        // }
    }

    render() {
        // const { patient } = this.props;
        // const { channel } = this.props;

        const { selectedPatient } = this.state;
            
        return (
            <div className="patient-detail">
                <div className="patient-detail-header">
                    <Avatar 
                        size={70}
                        backgroundColor="#67B2A6"
                        color="#ffffff"
                    >
                        {selectedPatient &&
                            selectedPatient.name ? selectedPatient.name.substr(0, 1) : ''
                        }
                    </Avatar>
                    <div className="patient-detail-header-wrapper">
                        <div className="patient-detail-header-title">
                            {selectedPatient &&
                                selectedPatient.name 
                            }
                        </div>
                        <div className="patient-detail-header-subtitle">
                            {selectedPatient &&
                                selectedPatient.gender
                            }
                            {/* Gender, Age  */}
                        </div>
                    </div>
                </div>
                <div className="patient-detail-chat">
                    {selectedPatient &&
                        <chat.components.ChatChannel
                            user={this.props.user} 
                            messages={this.state.messages} 
                            patient={selectedPatient} 
                            onSendMessage={this.handleSendMessage} 
                        />
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
        );
    }
}

export default PatientDetailForm;