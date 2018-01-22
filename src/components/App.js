import React, { Component } from 'react';

import * as locationActions from '../actions/locationActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from './Spinner';
import ErrorBoundary from './common/ErrorBoundary';
import Weather from '../containers/Weather';

import '../styles/components/App.css';

export class App extends Component {

  componentDidMount() {
    this.props.locationActions.getLocation();
  }

  render() {
    const  { loadedWeather } = this.props;
    return (
      <div className="App">
        <ErrorBoundary>
          { loadedWeather ? <Weather /> : <Spinner /> }
        </ErrorBoundary>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    loadedWeather: state.weather.loadedWeather,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
