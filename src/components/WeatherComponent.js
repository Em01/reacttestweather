import React, { Component } from 'react';
import store from '../store/configureStore';
import * as weatherActions from '../actions/weatherActions';
import * as locationActions from '../actions/locationActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { weatherImage } from './helpers/weatherImage';
import '../styles/components/WeatherComponent.css';
import _ from 'underscore'

import Spinner from './Spinner'
import WeatherItem from './WeatherItem'
import { formatWeatherDescription, formatTemperature, formatHumidity, getMainWeather, getUpcomingWeather, timeText } from './helpers/formatWeatherData';
class WeatherComponent extends Component {

  componentDidMount() {
    this.props.locationActions.getLocation()
  }

  renderItems(otherItems) {
    return _.map(otherItems, (name, id) => {
      console.log(otherItems, name, id, 'id')
      return (
      <div className="Item">
        <WeatherItem
          type={"small"}
          id={id}
          city={this.props.city}
          description={formatWeatherDescription(name)}
          temperature={formatTemperature(name)}
          humidity={formatHumidity(name)}
          time={timeText(id)}
          image={weatherImage(name.weather[0].id.toString()).image}
        />
    </div>

      )
    });
  }

  loading() {

    if(this.props.loadingWeather || this.props.loadingLocation) {
      return (
        <Spinner />
      )
    } else if(this.props.loadedWeather){
      const mainItem = getMainWeather(this.props.weatherData.list)
      const weatherClass = weatherImage(mainItem.weather[0].id.toString())
      const otherItems = getUpcomingWeather(this.props.weatherData.list)

      return (
        <div className={weatherClass.name}>
          <WeatherItem
            type={"large"}
            city={this.props.city}
            description={formatWeatherDescription(mainItem)}
            temperature={formatTemperature(mainItem)}
            humidity={formatHumidity(mainItem)}
            image={weatherImage(mainItem.weather[0].id.toString()).image}
          />

          <h2 className="Soon">Coming up...</h2>

          <div className="Wrapper">
          {this.renderItems(otherItems)}
        </div>
        </div>




      )
    }
  }

  render() {
      return (
        <div className="WeatherComponent">
          {this.loading()}
        </div>
    )
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
