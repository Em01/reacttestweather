import React, { Component } from 'react';
import store from '../store/configureStore';
import * as weatherActions from '../actions/weatherActions';
import * as locationActions from '../actions/locationActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { weatherImage } from './helpers/weatherImage';
import '../styles/components/WeatherComponent.css';
import _ from 'underscore'
class WeatherComponent extends Component {

  componentDidMount() {
    this.props.locationActions.getLocation()
  }

  description(mainItem) {
    const description = mainItem.weather[0].description
    const formatDescription = description.charAt(0).toUpperCase();
    return formatDescription + description.slice(1);
  }

  temperature(mainItem) {
    return mainItem.main.temp.toFixed(1)
  }

  humidity(mainItem) {
    return mainItem.main.humidity
  }

  getMainItem () {
    // const getItems = this.props.weatherData.list.slice(0, 3)
    const mainWeather = _.first(this.props.weatherData.list)
    return mainWeather
  }

  getOtherItems() {
    const getOtherItems = this.props.weatherData.list.slice(1, 4)
    return getOtherItems
  }

  timeText(id) {
    switch(id) {
      case 0:
        return "3"
      case 1:
        return "6"
      case 2:
      return "9"
    }
  }

  renderItems(otherItems) {
    return _.map(otherItems, (name, id) => {
      console.log(otherItems, name, id, 'id')
      return (
        <div className="Item">

        <img className="Icon" src={weatherImage(name.weather[0].id.toString()).image}/>
        <div className="Details">
          <p>{"+ " + this.timeText(id) + " Hours"}</p>
          <p>{this.temperature(name) + ' Celsius'}</p>
          <p>{this.humidity(name) + ' % Humidity'}</p>
        </div>
      </div>

      )
    });
  }

  loading() {

    if(this.props.loadingWeather || this.props.loadingLocation) {
      return (
        <div className="Loading">
          <img src={require('../images/cloud-large.png')}/>
          <h2>Loading...</h2>
        </div>
      )
    } else if(this.props.loadedWeather){
      const mainItem = this.getMainItem()

      const weatherClass = weatherImage(mainItem.weather[0].id.toString())
      console.log(mainItem, 'mi')
      const otherItems = this.getOtherItems()
      return (
        <div className={weatherClass.name}>
          <div>
            <h1 className="City">{this.props.city}</h1>
            <div className="Description">{this.description(mainItem)}</div>
            <img className="Icon" src={weatherImage(mainItem.weather[0].id.toString()).image}/>
            <div className="Details">
            <p>{this.temperature(mainItem) + ' Celsius'}</p>
            <p>{this.humidity(mainItem) + ' % Humidity'}</p>
          </div>
          </div>

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
