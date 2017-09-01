import * as React from 'react';

import './TestOrders.css';

interface TestOrder {

}
interface TestCollectionProps {
    testOrders : Array<TestOrder>
}

const TestOrderCollection = (props: TestCollectionProps) => {
        return(
            <ul>
                {props.testOrders.map((v:any, index: number) => {
                    return (
                        <li className="test-item" key={index}>
                        <div>
                        <p className="test-type">{v.test_type}</p>
                        <div className="test-details">
                        <p className="test-detail"> {v.detail}</p>
                        <p className="test-date">{v.date}</p>
                        </div>

                        </div>
                        <div>
                        <p className="test-description">{v.description}</p>
                        </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

export default TestOrderCollection;