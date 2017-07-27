import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import './App.css';

const btnStyle = {
  backgroundColor:'#f84445'
}



class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="title">LifeCo EMR Web</h2>
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
      </div>
    );
  }
}

export default App;
