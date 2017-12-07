import * as React from 'react';
import { GlobalState } from '../../common';
import { connect } from 'react-redux';

import Wellness from '../components/Wellness';

import './Wellness.css';

interface WellnessProps {
    wellness: any;
    loadAllWellness: () => void;
}

class WellnessContainer extends React.Component<WellnessProps, {}> {
    render() {
        return(
            <Wellness {...this.props} />
        );
    }
}

const mapStateToProps = (state: GlobalState) => {
    return {
        wellness : state.wellness,
    };
};

export default connect<{}, WellnessProps, {}>(mapStateToProps, {})(WellnessContainer);