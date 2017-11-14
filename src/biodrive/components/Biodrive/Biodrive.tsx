import * as React from 'react';
import * as Moment from 'moment';
import { BiodriveListItemInfo } from '../../reducer';
import BiodriveList from '../BiodriveList/BiodriveList';
import { Tabs, Tab } from 'material-ui/Tabs';
import OthersComponent from '../../../other/components/Other';
import { Other, Patient, Treatment, Visit } from '../../../common';

import './Biodrive.css';

interface BiodriveProps {
    patient: Patient;
    treatments: Array<Treatment>;
    visits: Array<Visit>;
    other: Other;
    onDetailItemSelected?: (info: BiodriveListItemInfo) => void;
}

interface BiodriveState {
    selectedTab: string;
}

const labelBackground = {
    backgroundColor: 'white'
};

const inkBarStyle = {
    height: 4,
    backgroundColor: '#67B2A6',
    borderRadius: 3
};

class Biodrive extends React.Component<BiodriveProps, BiodriveState> {
    state = {
        selectedTab: 'treatments'
    };

    getTabButtonStyle(tabName: string) {
        return {
            color: this.state.selectedTab === tabName ? '#67B2A6' : '#979797'
        };
    }

    handleItemClick = (info: BiodriveListItemInfo) => {
        if (this.props.onDetailItemSelected) {
            this.props.onDetailItemSelected(info);
        }
    }

    handleTabChange = (value: any) => {
        this.setState({selectedTab: value});
    }

    render() {
        return (
            <div id="main-section">
                 <section className="biodrive-section">       
                    <Tabs
                        value={this.state.selectedTab} 
                        inkBarStyle={inkBarStyle} 
                        tabItemContainerStyle={labelBackground}
                        onChange={this.handleTabChange}
                    >
                        <Tab value={'treatments'} label="Treatments" buttonStyle={this.getTabButtonStyle('treatments')}>
                            <BiodriveList 
                                items={this.props.treatments.map((treatment) => {
                                    return new BiodriveListItemInfo(
                                        'treatment',
                                        treatment.id, 
                                        treatment.dateWritten, 
                                        treatment.medicationName, 
                                        treatment.status, 
                                        treatment.sig);
                                })} 
                                onItemClick={this.handleItemClick} 
                            />
                        </Tab>
                        <Tab value={'visits'} label="Visits" buttonStyle={this.getTabButtonStyle('visits')}>
                            <BiodriveList 
                                items={this.props.visits.map((visit) => {
                                    return new BiodriveListItemInfo(
                                        'visit',
                                        visit.id, 
                                        visit.scheduledFor ? Moment.unix(visit.scheduledFor).toDate() : new Date(),
                                        visit.visitType || '',
                                        visit.status || '',
                                        'Need to build'
                                    );
                                })} 
                                onItemClick={this.handleItemClick} 
                            />
                        </Tab>
                        <Tab value={'other'} label="Other" buttonStyle={this.getTabButtonStyle('other')}>
                            <OthersComponent
                                other={this.props.other}
                                channelId={this.props.patient.primaryChannel}
                            />
                        </Tab>
                    </Tabs>
                 </section>
            </div>
        );
    }
}

export default Biodrive;