import React, {setState} from 'react';
import './Weather.css';

const Weather = props => {
  return (
    <div className="Weather">
        Weather {props.location[0]}, {props.location[1]}
    </div>
  );
}

export default Weather;