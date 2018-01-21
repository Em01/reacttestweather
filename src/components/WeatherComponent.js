import React, { Component } from 'react';
// import logo from '../images/logo.svg';
import store from '../store/configureStore';
import * as weatherActions from '../actions/weatherActions';
import * as locationActions from '../actions/locationActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { weatherImage } from './helpers/weatherImage'

class WeatherComponent extends Component {

  componentDidMount() {
    // console.log(this.props, 'test')
    this.props.locationActions.getLocation()
  }

  description() {
    return this.props.weatherData.weather[0].description
  }

  temperature() {
    return this.props.weatherData.main.temp.toFixed(1)
  }

  humidity() {
    return this.props.weatherData.main.humidity
  }


  loading() {
    // const imageType = this.weatherImage()
    if(this.props.loadingWeather || this.props.loadingLocation) {
      return (
        <h1>LOADING...</h1>
      )
    } else if(this.props.loadedWeather){
      // const imageType = this.weatherImage()
      // console.log(imageType,'image type')

      return (
        <div>
          <h2>{this.props.city}</h2>
          <div>{this.description()}</div>
          <img src={weatherImage(this.props.weatherData.cod.toString())}/>
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


export const mapStateToProps = (state) => {
  return {
    loadedWeather: state.weather.loadedWeather,
    loadingWeather: state.weather.loadingWeather,
    loadingLocation: state.location.loadingLocation,
    locationData: state.location.locationData,
    weatherData: state.weather.weatherData,
    city: state.location.city
  }
}

export const mapDispatchToProps = (dispatch) => {
  console.log('mdtp')
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);
