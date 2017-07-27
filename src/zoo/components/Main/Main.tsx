import * as React from 'react';
import * as Cases from '../../../cases';
import { Switch, Route, NavLink } from 'react-router-dom';
import { CaseEventsZoo } from '../CaseEvents';
import { LoginZoo } from '../Login';

import './Main.css';

export interface MainState {
  header: JSX.Element;
  nav: JSX.Element;
  main: JSX.Element;
  aside?: JSX.Element | undefined;
  footer?: JSX.Element | undefined;
}

export class Main extends React.Component<{}, MainState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      header: (<h1>LifeCo Web Component Zoo</h1>),
      nav: (
        <ul>
          <li><NavLink to="/zoo/components/case" activeClassName="selected">Case</NavLink></li>
          <li><NavLink to="/zoo/components/cases" activeClassName="selected">Cases</NavLink></li>
          <li><NavLink to="/zoo/components/patient" activeClassName="selected">Patient</NavLink></li>
          <li><NavLink to="/zoo/components/patients" activeClassName="selected">Patients</NavLink></li>
          <li><NavLink to="/zoo/components/case-events" activeClassName="selected">Case Events</NavLink></li>
          <li><NavLink to="/zoo/components/imaging" activeClassName="selected">Imaging</NavLink></li>
          <li><NavLink to="/zoo/components/labs" activeClassName="selected">Labs</NavLink></li>
          <li><NavLink to="/zoo/components/procedures" activeClassName="selected">Procedures</NavLink></li>
          <li><NavLink to="/zoo/components/schedule" activeClassName="selected">Schedule</NavLink></li>
          <li><NavLink to="/zoo/components/social" activeClassName="selected">Social</NavLink></li>
          <li><NavLink to="/zoo/components/tasks" activeClassName="selected">Tasks</NavLink></li>
          <li><NavLink to="/zoo/components/treatments" activeClassName="selected">Treatments</NavLink></li>
          <li><NavLink to="/zoo/components/visits" activeClassName="selected">Visits</NavLink></li>
        </ul>
      ),
      main: (
        <Switch>
          <Route path="/zoo/components/case" exact={true} component={Cases.Components.Case} />
          <Route path="/zoo/components/cases" exact={true} component={Cases.Components.Cases} />
          <Route path="/zoo/components/case-events" exact={true} component={CaseEventsZoo} /> 
        </Switch>
      ),
      aside: undefined,
      footer: undefined
    };
  }
  
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
                <li><NavLink to="/zoo/components/case-events" activeClassName="selected">Case Events</NavLink></li>
                <li><a>Imaging</a></li>
                <li><a>Labs</a></li>
                <li><NavLink to="/zoo/components/login" activeClassName="selected">Login</NavLink></li>
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
              <Route path="/zoo/components/case" exact={true} component={Cases.Components.Case} />
              <Route path="/zoo/components/cases" exact={true} component={Cases.Components.Cases} />
              <Route path="/zoo/components/case-events" exact={true} component={CaseEventsZoo} /> 
              <Route path="/zoo/components/login" exact={true} component={LoginZoo} />
            </Switch>
          <nav>
            <ul>
              <li><NavLink to="/zoo/components/case" activeClassName="selected">Case</NavLink></li>
              <li><NavLink to="/zoo/components/cases" activeClassName="selected">Cases</NavLink></li>
              <li><NavLink to="/zoo/components/case-events" activeClassName="selected">Case Events</NavLink></li>
              <li><NavLink to="/zoo/components/imaging" activeClassName="selected">Imaging</NavLink></li>
              <li><NavLink to="/zoo/components/labs" activeClassName="selected">Labs</NavLink></li>
              <li><NavLink to="/zoo/components/procedures" activeClassName="selected">Procedures</NavLink></li>
              <li><NavLink to="/zoo/components/schedule" activeClassName="selected">Schedule</NavLink></li>
              <li><NavLink to="/zoo/components/social" activeClassName="selected">Social</NavLink></li>
              <li><NavLink to="/zoo/components/tasks" activeClassName="selected">Tasks</NavLink></li>
              <li><NavLink to="/zoo/components/treatments" activeClassName="selected">Treatments</NavLink></li>
              <li><NavLink to="/zoo/components/visits" activeClassName="selected">Visits</NavLink></li>
            </ul>
          </nav>
          <aside>aside</aside>
        </div>
        <footer />
      </div>
    );
  }
}