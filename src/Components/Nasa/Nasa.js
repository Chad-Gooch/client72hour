import React, {useState, useEffect} from 'react';
import './Nasa.css';


const Nasa = props => {

  let lat = props.location[0];
  let lon = props.location[1];

  const nasaURL = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2021-11-13&dim=0.15&api_key=vueHbyJVhnicq9tytk0IZC8M2aIMFRleAgqiNc7x`

  let [results, setResults] = useState("");

  const fetchResults = async () => {
    try {
      const response = await fetch(nasaURL);
      const json = await response.json();
      console.log(json.url);
      setResults(json.url);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [props.location]);


  return (
    <div className="Nasa">
        <img className="nasaImage" src={results} alt="NASA Image"/>
    </div>
  );
}

export default Nasa;