import React, { Component } from 'react';

import * as locationActions from '../actions/locationActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Weather from './Weather';

import '../styles/containers/app.css';

export class App extends Component {

  componentDidMount() {
    this.props.locationActions.getLocation();
  }

  render() {
    const  { weatherFetchState } = this.props;
    return (
      <div className="app">
        <ErrorBoundary>
          { weatherFetchState === "SUCCESS" ? <Weather /> : <Spinner /> }
        </ErrorBoundary>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    weatherFetchState: state.weather.weatherFetchState
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    locationActions: bindActionCreators(locationActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
