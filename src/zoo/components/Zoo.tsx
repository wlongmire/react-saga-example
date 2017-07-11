import * as React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import { cases } from '../../cases';

import './Zoo.css';

class Zoo extends React.Component<{}, {}> {
  render() {
    return (
      <div className="Zoo">
        <div className="Zoo-header">
          <h2>Welcome to the LifeCo Component Zoo!</h2>
        </div>
        {/* TODO: Add Router & Routes */}
        <div className="zoo-sidenav">
            <ul>
                <li><NavLink to="/zoo/components/case" activeClassName="selected">Case</NavLink></li>
                <li><NavLink to="/zoo/components/cases" activeClassName="selected">Cases</NavLink></li>
                <li><a>Imaging</a></li>
                <li><a>Labs</a></li>
                <li><a>Procedures</a></li>
                <li><a>Schedule</a></li>
                <li><a>Social</a></li>
                <li><a>Tasks</a></li>
                <li><a>Treatments</a></li>
                <li><a>Visits</a></li>
            </ul>
        </div>
        <div className="zoo-detail-panel">
            <Switch>
                <Route path="/zoo/components/cases" exact={true} component={cases.Components.Cases} />
                <Route path="/zoo/components/case" exact={true} component={cases.Components.Case} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default Zoo;
