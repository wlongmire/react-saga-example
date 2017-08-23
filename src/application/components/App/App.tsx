import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import * as auth from '../../../auth';
import * as Navigation from '../../../navigation';
import {Tabs, Tab} from 'material-ui/Tabs';

import './App.css';

const btnStyle = {
  backgroundColor:'#f84445'
}


const labelBackground = {
  backgroundColor: 'white',
}

const labelTitle = {
  color: "black",
}
const lableUnderline = {
  backgroundColor: '#f84445'
}


class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Navigation.Components.Navigation/>
        <div className="App-container">
          <div className="chat-section">
            Chat Section
                  <p className="App-intro">
              Welcome
              </p>
              <Link to="/visits">
              <RaisedButton
                label="Go to Visit Section"
                secondary={true}
                buttonStyle={btnStyle}
              />
              </Link>
              <br/>
              <auth.Components.ConnectedLogoutButton />
              <br/>
              <Link to="/patients">
              <RaisedButton
                label="Go to Patients List Section"
                secondary={true}
                buttonStyle={btnStyle}
              />
              </Link>
              <br/>
          </div>

          <div className="biodrive-section">
            <Tabs tabItemContainerStyle={labelBackground} inkBarStyle={lableUnderline}>
            <Tab label="Treatments" style={labelTitle}>
              <div>
                Treatments
              </div>
            </Tab>

            <Tab label="Visits" style={labelTitle}>
              <div>
                Visits
              </div>
            </Tab>

            <Tab label="Tests" style={labelTitle}>
              <div>
                Tests
              </div>
            </Tab>

            <Tab label="Imaging" style={labelTitle}>
              <div>
                Imaging
              </div>
            </Tab>

            <Tab label="Wellness" style={labelTitle}>
              <div>
                Wellness
              </div>
            </Tab>

            <Tab label="Other" style={labelTitle}>
              <div>
                Other
              </div>
            </Tab>
            </Tabs>
          </div>
        </div>
        <p className="App-intro">
         Welcome
        </p>
        <Link to="/visits">
        <RaisedButton
          label="Go to Visit Section"
          secondary={true}
          buttonStyle={btnStyle}
        />
        </Link>
        <auth.Components.ConnectedLogoutButton />
        <Link to="/patients">
        <RaisedButton
          label="Go to Patients List Section"
          secondary={true}
          buttonStyle={btnStyle}
        />
        </Link>      
        </div>
    );
  }
}

export default App;
