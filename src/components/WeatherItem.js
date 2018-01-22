import React, { Component } from 'react';
import '../styles/components/WeatherComponent.css';

class WeatherItem extends Component {

  showCity() {
    if(this.props.type === "large") {
      return (
        <div>
        <h1 className="City">{this.props.city}</h1>
        <div className="Description">{this.props.description}</div>
      </div>
      )
    }
  }

  showTime(time) {
    if(this.props.type ==="small") {
      return (
        <p>{"+ " + time + " Hours"}</p>

      )
    }
  }
  render() {
    return (
        <div>
          {this.showCity()}
          <img className="Icon" src={this.props.image}/>
          <div className="Details">
            {this.showTime(this.props.time)}
          <p>{this.props.temperature + " Celsius"}</p>
          <p>{this.props.humidity + " % Humidity"}</p>
        </div>
      </div>
    )
  }
}

export default WeatherItem
