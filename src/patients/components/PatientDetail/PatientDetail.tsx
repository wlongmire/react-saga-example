import * as React from 'react';
// import { Patient } from '../../';
import { RouteComponentProps } from 'react-router-dom';
import { BioDrive } from '../../../biodrive';
import {Tabs, Tab} from 'material-ui/Tabs';
import { DoseSpotUser, DoseSpotDialog } from '../../../dosespot';

import './PatientDetail.css';

interface PatientDetailProps extends RouteComponentProps<{}> {
    
}

interface PatientDetailState {
    tabs: PatientDetailTab[];
}

interface PatientDetailTab {
    label: string;
    value: string;
    type: string;
    component: React.ReactNode;
}

// class TabTemplate extends React.Component<{},{}> {
//     render() {
//         return (
//             <div className="findMe">{this.props.children}</div>
//         )
//     }
// }

export class PatientDetail extends React.Component<PatientDetailProps, PatientDetailState> {

    constructor() {
        super();
        this.state = {
            tabs: [
                {
                    label: 'Dose Spot User',
                    value: 'DoseSpotUser',
                    type: 'dosespot',
                    component: <DoseSpotUser></DoseSpotUser>
                },
                {
                    label: 'Biodrive',
                    value: 'Biodrive',
                    type: 'biodrive',
                    component: <BioDrive></BioDrive>
                },
                {
                    label: 'Hormone Test',
                    value: 'HormoneTest',
                    type: 'test',
                    component: <BioDrive></BioDrive> 
                },
                {
                    label: 'Dose Spot Dialog',
                    value: 'DoseSpotDialog',
                    type: 'dosespot',
                    component: <DoseSpotDialog></DoseSpotDialog>
                },
            ]
        };
    }

    render() {
        let tabItemContainerStyle = {
            width: '90%'
        };

        return (
            <div className="patient-detail">
                <Tabs tabItemContainerStyle={tabItemContainerStyle}>
                {
                    this.state.tabs.map((tab, index) => {
                        let buttonStyle = {
                            
                        };

                        return (
                            <Tab key={index} label={tab.label} value={tab.value} buttonStyle={buttonStyle}>
                                {tab.component}
                            </Tab>
                        );
                    })
                }
                </Tabs>
            </div>     
        )
    }
}