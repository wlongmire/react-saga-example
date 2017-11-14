import * as React from 'react';
import { GlobalState } from '../../common';
import { connect } from 'react-redux';

import TreatmentsCollection from '../components/Treatments/TreatmentsCollection';

interface TreatmentsProps {
    treatments: any;
    loadAllRx: () => void;
}
export class Treatments extends React.Component<TreatmentsProps, {}> {
    render() {
        return (
            <div>
                {/* TODO remove hardcode */}
                <TreatmentsCollection
                    treatments={[{
                            'treatment_type': 'Rimabotulinumotoxin:Pharmacy Received',
                            'description': 'Albumin levels were higher than expected.Updated your case to the flu',
                            'detail': 'Albumin, Nitried and 2 More',
                            'date': '27 Aug'
                        },
                        {
                            'treatment_type': 'Rimabotulinumotoxin:Pharmacy Received',
                            'description': 'Albumin levels were higher than expected.Updated your case to the cold bruh',
                            'detail': 'Lipid Panel',
                            'date': '27 Aug'
                        },
                    ]}
                
                />
            </div>
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        treatments : state.treatments
    };
};

export default connect(mapStateToProps, {})(Treatments);