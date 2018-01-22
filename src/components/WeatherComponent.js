import React, { Component } from 'react';
import store from '../store/configureStore';
import * as weatherActions from '../actions/weatherActions';
import * as locationActions from '../actions/locationActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { weatherImage } from './helpers/weatherImage';
import '../styles/components/WeatherComponent.css';

class WeatherComponent extends Component {

  componentDidMount() {
    this.props.locationActions.getLocation()
  }

  description() {
    const description = this.props.weatherData.weather[0].description
    const formatDescription = description.charAt(0).toUpperCase();
    return formatDescription + description.slice(1);
  }

  temperature() {
    return this.props.weatherData.main.temp.toFixed(1)
  }

  humidity() {
    return this.props.weatherData.main.humidity
  }

  loading() {

    if(this.props.loadingWeather || this.props.loadingLocation) {
      return (
        <div className="Loading">
          <img src={require('../images/cloud-large.png')}/>
        </div>
      )
    } else if(this.props.loadedWeather){
      const weatherClass = weatherImage(this.props.weatherData.cod.toString())
      return (
        <div className={weatherClass.name}>
          <h2 className="City">{this.props.city}</h2>
          <div className="Description">{this.description()}</div>
          <img className="Icon" src={weatherImage(this.props.weatherData.cod.toString()).image}/>
          <div className="Details">
          <p>{this.temperature() + ' Celsius'}</p>
          <p>{this.humidity() + ' % Humidity'}</p>
        </div>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="WeatherComponent">
        {this.loading()}
        <h2>Please wait while we get your weather!"</h2>
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
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);
