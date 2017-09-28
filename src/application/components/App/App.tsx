import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import * as auth from '../../../auth';
// import * as Navigation from '../../../navigation';


import './App.css';

const btnStyle = {
  backgroundColor:'#f84445'
}

class App extends React.Component<{}, {}> {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App">
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
            <auth.ConnectedLogoutButton />
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
    );
  }
}

export default App;
