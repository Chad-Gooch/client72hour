import React, {useState, useEffect} from 'react';
import './App.css';
import Weather from './Components/Weather/Weather';
import Nasa from './Components/Nasa/Nasa';
import Tmaster from './Components/Tmaster/Tmaster';

function App() {

  const [location, setLocation] = useState([]);


  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      setLocation([position.coords.latitude, position.coords.longitude]);
      console.log(position.coords.latitude, position.coords.longitude)
    }
  },[])


  return (
    <div className="App">
        <Weather location={location} />
        <Nasa location={location}/>
        <Tmaster location={location}/>
    </div>
  );
}

export default App;