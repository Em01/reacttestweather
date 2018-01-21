import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// import logo from '../images/logo.svg';
// import '../styles/components/App.css';
import WeatherComponent from './WeatherComponent';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherComponent />
      </div>
    );
  }
}

export default App;
