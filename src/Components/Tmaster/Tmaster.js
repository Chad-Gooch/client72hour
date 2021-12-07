import React, {setState} from 'react';
import './Tmaster.css';

const Tmaster = props => {
  return (
    <div className="Tmaster">
        Ticket Master {props.location[0]}, {props.location[1]}
    </div>
  );
}

export default Tmaster;