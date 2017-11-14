import * as React from 'react';

import './TestOrders.css';

interface TestOrder {

}
interface TestCollectionProps {
    testOrders: Array<TestOrder>;
}

const TestOrderCollection = (props: TestCollectionProps) => {
    return(
        <ul>
            {props.testOrders.map((v: any, index: number) => {
                return (
                    <li className="test-item" key={index}>
                        <div className="test-date">
                            <p><span>{v.date}</span></p>
                        </div>

                        <div className="test-details">
                            <p className="test-type">{v.test_type}</p>
                            <p className="test-detail"> {v.detail}</p>

                         </div>

                        <div>
                            <p className="test-description">{v.description}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default TestOrderCollection;