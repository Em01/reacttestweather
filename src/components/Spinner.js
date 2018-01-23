import React from 'react';
import '../styles/components/Spinner.css';

const Spinner = () => {
  return (
    <div>
      <div className="Spinner">
        <img src={require('../images/cloud.png')} alt={"spinner"} />
      </div>
      <h2 className="SpinnerText">Loading...</h2>
    </div>
  );
}

export default Spinner;
