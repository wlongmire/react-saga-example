import * as React from 'react';

import './AddSection.css';

type P = {
    handleCloseModal ?: (event: any) => void;
    children?: JSX.Element
};

export default class AddSection extends React.Component<P, {}> {
    handleCloseModal = (event: any) => {
        // TODO implement
    }

    render() {
        const C = this.props.children;
        return (
            <div id="add-section" onClick={this.props.handleCloseModal}>
                <div className="add-section">
                    <div>
                        {C}
                    </div>
                </div>
            </div>
        );
    }
}