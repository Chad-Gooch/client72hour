import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardImg, CardText, CardBody,
  Button} from 'reactstrap';
import './Weather.css';

const Weather = props => {

    const lat = props.location[0];
    const lon = props.location [1];
    let [temp, setTemp] = useState(true);
    const [result, setResult] = useState([]);
    const url = 'https://api.openweathermap.org/data/2.5';
    const key = 'f19f2d47c690f58f576572b71182a24e';
    
    const fetchWeatherFahrenheit = async () => {
      await fetch(`${url}/weather/?lat=${lat}&lon=${lon}&units=imperial&APPID=${key}`)
      .then(res => res.json())
      .then(result => {
        setResult(result)
        console.log(result);
      });
    }

    useEffect(() =>{
      fetchWeatherFahrenheit();
    },[props.location])

    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    today = date+'\xa0\xa0\xa0'+time;

  return (
    <div className="col d-flex justify-content-center">
      {(typeof result.main != 'undefined') ? (
        <Card className="Weather">
          <CardBody  id="weatherDiv">
            <CardText className="city">{result.name}</CardText>
            <CardText>{today}</CardText>
            <CardImg className="weatherImg" src={`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} />
            <CardText>Temp: {temp ? Math.round(result.main.temp)+"°F" : Math.round((result.main.temp-32)*.5556)+"°C"}</CardText>
            <CardText>Humidity: {result.main.humidity}%</CardText>
            <CardText>Description: {result.weather[0].description.toUpperCase()}</CardText>
            <Button onClick={(e) => setTemp(!temp)}>Convert Temp</Button>
          </CardBody>
        </Card>
      ): (
        <div> </div>
      )}
    </div>
  );
}

export default Weather;