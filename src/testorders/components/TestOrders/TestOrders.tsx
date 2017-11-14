import * as React from 'react';
import TestOrdersCollection from './TestOrdersCollection';
import { TestOrder } from '../../../common';

interface TestOrdersProps {
    testOrders: Array<TestOrder>;
    loadAllTestOrders: () => void;
}

export class TestOrders extends React.Component<TestOrdersProps, {}> {
    componentDidMount() {
        this.props.loadAllTestOrders();
    }

    render() {
        return(
            <div>
                {/* TODO remove hardcode */}
                <TestOrdersCollection
                    testOrders={[
                        {
                            'test_type': 'Sinus Infection Check',
                            'description': 'Albumin levels were higher than expected.' +
                                            'Updated your case to the flu',
                            'detail': 'Albumin, Nitried and 2 More',
                            'date': '17 Oct'
                        },
                        {
                            'test_type': 'Routine Blood Work',
                            'description': 'Albumin levels were higher than expected.' +
                                            'Updated your case to the cold bruh',
                            'detail': 'Lipid Panel',
                            'date': '24 Oct'
                        },
                    ]}
                />
            </div>
        );
    }
}