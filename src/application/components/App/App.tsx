import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

const style = {
  backgroundColor: '#f84445'
}

class App extends React.Component<{}, {}> {
  constructor(){
    super()

    this.redirectToVisitPage = this.redirectToVisitPage.bind(this);
  }

  redirectToVisitPage(){
    console.log('====================================');
    console.log('Clicked');
    console.log('====================================');
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
          onClick={this.redirectToVisitPage}
        />
      </div>
    );
  }
}

export default App;
