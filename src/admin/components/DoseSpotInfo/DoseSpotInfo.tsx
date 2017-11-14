import * as React from 'react';

import { DoseSpotStatus } from '../../../common';
import { IconButton } from 'material-ui/IconButton';

interface DoseSpotInfoProps {
    statuses: DoseSpotStatus[];
}

class DoseSpotInfo extends React.PureComponent<DoseSpotInfoProps> {
    handleOpenDialog = () => {
        this.setState({ isDoseSpotOpen: true });
    }

    render() {
        return (
            <div>                           
                <table>
                    <thead>
                        <tr>
                            <td>Clincian ID</td>
                            <td>Refill Requests</td>
                            <td>Transmission Errors</td>
                            <td>Pending Prescriptions</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.statuses.map((status: DoseSpotStatus, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td>{status.clinicianId}</td>
                                        <td>{status.refillRequestsCount}</td>
                                        <td>{status.transactionErrorsCount}</td>
                                        <td>{status.pendingPrescriptionsCount}</td>
                                        <td>
                                        <IconButton tooltip="View Details" onClick={this.handleOpenDialog}>
                                            <i className="material-icons red">error</i>
                                        </IconButton>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DoseSpotInfo;