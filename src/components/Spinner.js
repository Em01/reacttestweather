import React from 'react';
import '../styles/components/Spinner.css';

const Spinner = () => {
  return (
    <div className="Spinner">
      <img src={require('../images/cloud.png')}/>
      <h2 className="SpinnerText">Loading...</h2>
    </div>
  );
}

export default Spinner;
