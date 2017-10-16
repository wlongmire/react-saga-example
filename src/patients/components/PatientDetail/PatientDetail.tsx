import * as React from 'react';
import * as _ from 'lodash';
import Avatar from 'material-ui/Avatar';
import { Patient } from '../../';
import { Biodrive, BiodriveListItemInfo } from '../../../biodrive';
import { ChatChannel } from '../../../chat';
import { ChatChannelInfo } from '../../../chat';
import { ChatMessage } from '../../../chat/reducer';
import { Identity } from '../../../auth';
import { TabControl, TabItemInfo } from '../../../common';

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
    patient: object;
    tabItems?: Array<TabItemInfo>;
    selectedTabIndex: number;
}

export class PatientDetail extends React.Component<PatientDetailProps, PatientDetailState> {

    private _addContentElement: TabItemInfo;

    constructor() {
        super();
        this.state = {
            open: false,
            patient: {},
            selectedTabIndex: -1
        };
        this.handleBiodriveItemSelected = this.handleBiodriveItemSelected.bind(this);
        this.handleClickNew = this.handleClickNew.bind(this);
        this.handleSelectedTabChanged = this.handleSelectedTabChanged.bind(this);
        this.handleTabClosing = this.handleTabClosing.bind(this);
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

    handleBiodriveItemSelected(info: BiodriveListItemInfo) {

        switch (info.entityType) {
            case 'treatment':
                break;
            case 'visit':
                break;
            case 'test':
                break;
            case 'imaging':
                break;
        }
    }

    handleClickNew(entityType: string) {

        let newItem: TabItemInfo | undefined = undefined;

        switch (entityType) {
            case 'treatment':
                newItem = {
                    header: `New ${_.upperFirst(entityType)}`,
                    content: (<div>{entityType}</div>)
                } as TabItemInfo;
                break;
            case 'visit':
                newItem = {
                    header: `New ${_.upperFirst(entityType)}`,
                    content: (<div>{entityType}</div>)
                } as TabItemInfo;
                break;
            case 'test':
                newItem = {
                    header: `New ${_.upperFirst(entityType)}`,
                    content: (<div>{entityType}</div>)
                } as TabItemInfo;
                break;
            case 'imaging':
                newItem = {
                    header: `New ${_.upperFirst(entityType)}`,
                    content: (<div>{entityType}</div>)
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