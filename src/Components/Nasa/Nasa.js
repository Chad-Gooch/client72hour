import React, {setState} from 'react';
import './Nasa.css';

const Nasa = props => {
  return (
    <div className="Nasa">
        Nasa {props.location[0]}, {props.location[1]}
    </div>
  );
}

export default Nasa;