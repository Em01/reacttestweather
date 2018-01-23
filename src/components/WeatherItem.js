import PropTypes from 'prop-types';
import React from 'react';
import '../styles/components/weather_item.css';

export function showCity(type, city, description) {
  if(type === "large") {
    return (
      <div>
        <h1 className="city">{city}</h1>
        <div className="description">{description}</div>
      </div>
    );
  }
}

export function showTime(time, type) {
  if(type ==="small") {
    return (
      <p>{"+ " + time + " Hours"}</p>
    );
  }
}

const WeatherItem = (props) => {
  const { image, time, temperature, humidity, type, city, description} = props;
  return (
    <div>
      {showCity(type, city, description)}
      <img className="icon" src={image} alt={"icon"} />
      <div>
        {showTime(time, type)}
        <p>{temperature + " Celsius"}</p>
        <p>{humidity + "% Humidity"}</p>
      </div>
    </div>
  );
}

WeatherItem.propTypes - {
  city: PropTypes.string,
  description: PropTypes.string,
  humidity: PropTypes.number,
  image: PropTypes.number,
  time: PropTypes.number,
  type: PropTypes.string
}
export default WeatherItem;
