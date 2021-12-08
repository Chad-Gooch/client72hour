import React, {useState, useEffect} from 'react';
import './App.css';
import Weather from './Components/Weather/Weather';
import Nasa from './Components/Nasa/Nasa';
import Tmaster from './Components/Tmaster/Tmaster';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div>
      <div>
        <h1 className="centerTextHeader">Party Planner</h1>
        <p className="centerText">Weather, events and satellite imagery to help you plan your outing!</p>
      </div>
    <Container className="App">
      <Row>
      <Col>
        <Weather location={location} />
        <Nasa location={location}/>
      </Col>
      <Col id="tmasterGraph">
        <Tmaster location={location}/>
      </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;