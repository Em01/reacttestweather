import React from 'react';
import '../styles/components/weather_error.css';

const WeatherError = () => {
  return (
    <div>
      <img className="error-image" src={require('../images/sad.png')} alt="error" />
      <h2>Something went wrong, Please reload and try again.</h2>
    </div>
  );
}

export default WeatherError;
