import * as React from 'react';
import * as Cases from '../../../cases';

import './CaseEvents.zoo.css';

/**
 * Host element for CaseEvents component in zoo.
 */
export class CaseEventsZoo extends React.Component<{}, {}> {
  render() {
    const demoProps = new Cases.Components.CaseEventsComponentProps(new Cases.Model.CaseItem());

    return (
      <div className="case-events-zoo">
        <h1>Case Events Components</h1>
        <div>
          <Cases.Components.CaseEvents {...demoProps} />
        </div>
        <div>
          <h4>Usage</h4>
          <code>{'<Cases.Components.CaseEvents events={} />'}</code>
        </div>
      </div>
    );
  }
}
