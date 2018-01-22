import React, { Component } from 'react';
import '../styles/components/App.css';
import Weather from '../containers/Weather';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
