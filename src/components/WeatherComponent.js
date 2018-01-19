import React, { Component } from 'react';
import logo from '../images/logo.svg';
import store from '../store/configureStore';
import * as weatherActions from '../actions/weatherActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class WeatherComponent extends Component {

  componentDidMount() {
    this.props.weatherActions.getLocation()
  }

  loading() {
    console.log(this.props)
    if(this.props.loadingWeather || this.props.loadingLocation) {
      return (
        <h1>LOADING...</h1>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>The weather</h1>
        {this.loading()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loadingWeather: state.weather.loadingWeather,
    loadingLocation: state.weather.loadingLocation,
    location: state.weather.location,
    weather: state.weather.weather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);
