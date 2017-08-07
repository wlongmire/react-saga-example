import * as React from 'react';
import * as Cases from '../../../cases';
import { CaseItem } from '../../../cases/model';

import './CaseEvents.zoo.css';

/**
 * Host element for CaseEvents component in zoo.
 */
export class CaseEventsZoo extends React.Component<{}, {}> {
  render() {
    const demoProps = new Cases.Components.CaseEventsComponentProps(new Array<CaseItem>());

    return (
      <div>
        <h1>Case Events Component</h1>
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
