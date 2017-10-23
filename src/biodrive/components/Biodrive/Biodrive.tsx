import * as React from 'react';
// import * as Rx from '../../../treatments';
// import * as Visits from '../../../visits';
// import * as Tests from '../../../testorders';
// import * as Imaging from '../../../imaging';
// import * as Wellness from '../../../wellness';
// import * as Others from '../../../others';
import { BiodriveListItemInfo } from '../../reducer';
import { BiodriveList } from '../BiodriveList';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Patient } from '../../../common';

import './Biodrive.css';

interface BiodriveProps {
    patient: Patient;
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

export class Biodrive extends React.Component<BiodriveProps, BiodriveState> {
    
    constructor() {
        super();
        this.state = {
            selectedTab: 'treatments'
        };

        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    componentDidMount() {
        console.log('patient', this.props.patient);
    }

    getTabButtonStyle(tabName: string) {
        return {
            color: this.state.selectedTab === tabName ? '#67B2A6' : '#979797'
        };
    }

    handleItemClick(info: BiodriveListItemInfo) {
        if (this.props.onDetailItemSelected) {
            this.props.onDetailItemSelected(info);
        }
    }

    handleTabChange(value: any) {
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
                                items={this.props.patient.treatments.map((treatment) => { 
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
                                items={this.props.patient.visits.map((visit) => { 
                                    return new BiodriveListItemInfo(
                                        'visit',
                                        visit.id, 
                                        visit.scheduledFor || new Date(),
                                        visit.visitType || '',
                                        visit.status || '',
                                        'Need to build'
                                    );
                                })} 
                                onItemClick={this.handleItemClick} 
                            />
                        </Tab>
                        {/* <Tab value={'tests'} label="Tests" buttonStyle={this.getTabButtonStyle('tests')}>
                            <BiodriveList 
                                items={this.props.patient.tests.map((test) => { 
                                    return new BiodriveListItemInfo(
                                        'test',
                                        test.id, 
                                        test.scheduledFor || Date.now(), 
                                        test.name,
                                        test.status,
                                        test.publicNote
                                    );
                                })} 
                                onItemClick={this.handleItemClick} 
                            />
                        </Tab>
                        <Tab value={'imaging'} label="Imaging" buttonStyle={this.getTabButtonStyle('imaging')}>
                            <BiodriveList 
                                items={this.props.patient.imaging.map((image) => { 
                                    return new BiodriveListItemInfo(
                                        'imaging',
                                        image.id, 
                                        image.scheduledFor || Date.now(), 
                                        image.imagingTypeDescription,
                                        image.status,
                                        image.publicNote
                                    );
                                })} 
                                onItemClick={this.handleItemClick} 
                            />
                        </Tab>
                        <Tab value={'wellness'} label="Wellness" buttonStyle={this.getTabButtonStyle('wellness')}>
                            <div>Wellness</div>
                        </Tab>
                        <Tab value={'other'} label="Other" buttonStyle={this.getTabButtonStyle('other')}>
                            <div>Other</div>
                        </Tab> */}
                     </Tabs>
                 </section>
            </div>
        );
    }
}