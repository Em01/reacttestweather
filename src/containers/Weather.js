import _ from 'underscore';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions/weatherActions';
import * as locationActions from '../actions/locationActions';
import Spinner from '../components/Spinner';
import WeatherItem from '../components/WeatherItem';
import { weatherImage } from './helpers/weatherImage';
import {
  formatWeatherDescription,
  formatTemperature,
  formatHumidity,
  getMainWeather,
  getUpcomingWeather,
  timeText
} from './helpers/formatWeatherData';
import '../styles/containers/Weather.css';

class Weather extends Component {

  componentDidMount() {
    this.props.locationActions.getLocation();
  }

  renderItem(type, details, id) {
    const { city } = this.props;
    return (
      <div className="Item">
        <WeatherItem
          type={type}
          id={id}
          city={city}
          description={formatWeatherDescription(details)}
          temperature={formatTemperature(details)}
          humidity={formatHumidity(details)}
          time={timeText(id)}
          image={weatherImage(details.weather[0].id.toString()).image}
        />
      </div>
    );
  }

  renderItems(otherItems) {
    return _.map(otherItems, (details, id) => {
      return this.renderItem("small", details, id)
    });
  }

  loading() {
    const {
      loadingWeather,
      loadingLocation,
      loadedWeather,
      forecast
    } = this.props;

    if(loadingWeather || loadingLocation) {
      return (
        <Spinner />
      );
    } else if(loadedWeather) {

      const details = getMainWeather(forecast);
      const weatherClass = weatherImage(details.weather[0].id.toString());
      const upcomingItems = getUpcomingWeather(forecast);

      return (
        <div className={weatherClass.name}>
          {this.renderItem("large", details, null)}
          <h2 className="UpcomingText">Coming up...</h2>
          <div className="UpcomingWrapper">
          {this.renderItems(upcomingItems)}
          </div>
        </div>
      );
    }
    else {
      return;
    }
  }

  render() {
    return (
      <div className="Weather">
        {this.loading()}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { weather, location } = state
  return {
    forecast: weather.weatherData.list,
    loadedWeather: weather.loadedWeather,
    loadingWeather: weather.loadingWeather,
    loadingLocation: location.loadingLocation,
    city: location.city
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
