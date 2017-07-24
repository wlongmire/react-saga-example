import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import * as Visit from '../../../visits';
import './App.css';

const style = {
  backgroundColor: '#f84445'
}

interface VisitComponentState {
  openDrawer : boolean
}

class App extends React.Component<{}, VisitComponentState> {
  constructor(){
    super()
    this.state = {
      openDrawer: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(){
    this.setState({
      openDrawer : !this.state.openDrawer
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="title">LifeCo EMR Web</h2>
        </div>
        <p className="App-intro">
          This will contain the actual layout container for the app.
        </p>
        <RaisedButton
          label="Visit"
          secondary={true}
          buttonStyle={style}
          onClick={this.toggleDrawer}
        />
        <Visit.Components.VisitDrawer
          className={ this.state.openDrawer? "visit-drawer-show": "visit-drawer-hide"}/>
      </div>
    );
  }
}

export default App;
