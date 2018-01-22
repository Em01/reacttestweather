import React, { Component } from 'react';
import '../styles/components/App.css';
import Weather from '../containers/Weather';
import ErrorBoundary from './common/ErrorBoundary';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Weather />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
