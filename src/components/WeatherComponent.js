import React, { Component } from 'react';
import logo from '../images/logo.svg';
import store from '../store/configureStore';
import * as weatherActions from '../actions/weatherActions';
import * as locationActions from '../actions/locationActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class WeatherComponent extends Component {

  componentDidMount() {
    this.props.locationActions.getLocation()
  }

  description() {
    return this.props.weatherData.weather[0].description
  }

  temperature() {
    console.log(this.props, 'props')
    return this.props.weatherData.main.temp.toFixed(1)
  }

  humidity() {
    return this.props.weatherData.main.humidity
  }


  loading() {
    console.log(this.props)
    if(this.props.loadingWeather || this.props.loadingLocation) {
      return (
        <h1>LOADING...</h1>
      )
    } else if(this.props.loadedWeather){
      return (
        <div>
          <h2>{this.props.city}</h2>
          <div>{this.description()}</div>
          <img src={require('../images/sun.png')}/>
          <div>{this.temperature() + ' Celsius'}</div>
          <div>{this.humidity() + ' %'}</div>
        </div>
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
    loadedWeather: state.weather.loadedWeather,
    loadingWeather: state.weather.loadingWeather,
    loadingLocation: state.location.loadingLocation,
    locationData: state.location.locationData,
    weatherData: state.weather.weatherData,
    city: state.location.city
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);
