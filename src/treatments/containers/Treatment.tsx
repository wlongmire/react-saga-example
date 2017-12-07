import * as React from 'react';
import { connect } from 'react-redux';

// import { fetchSingleSignOnInfo } from '../actions';
import { Patient, SingleSignOnInfo, Treatment as TreatmentModel } from '../../common';
import TreatmentComponent from '../components/Treatment/Treatment';

interface TreatmentComponentProps {
    singleSignOnInfo: SingleSignOnInfo;
    treatment: TreatmentModel;
    patients: Array<Patient>;
    onSave?: (treatment: TreatmentModel) => void;
    onCancel?: (treatment: TreatmentModel) => void;
    fetchSingleSignOnInfo: () => void;
}

class Treatment extends React.Component<TreatmentComponentProps, {}> {
    render() {
        return (
            <TreatmentComponent {...this.props} />
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        patients: state.patients.items,
        singleSignOnInfo: state.treatments.singleSignOnInfo
    };
};

const mapDispatchToProps = {
    // fetchSingleSignOnInfo
};

export default connect<{}, TreatmentComponentProps, { treatment: TreatmentModel }>
                        (mapStateToProps, mapDispatchToProps)(Treatment);
