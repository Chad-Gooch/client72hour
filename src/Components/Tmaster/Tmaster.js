import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tmaster.css';

const Tmaster = props => {

  let lat = props.location[0]
  let lon = props.location[1]
  let url = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${lat},${lon}&apikey=8SYs7OqHR7zy6b4ZIYWil2Kt1WTJwkuH`;
  const [result, setResult] = useState([]);

  const fetchResults = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => setResult(data._embedded.events))
      .catch(err => console.log(err));
  };

  const eventMapper = tickets => {
      return tickets.map((name, index) => {
          return(
              <tr>
                  <td scope="row">{name.name}</td>
                  <td>{name._embedded.venues[0].name}</td>
                  <td>{name.dates.start.localDate}</td>
                  <td>{name.dates.start.localTime}</td>
                  <td>${name.priceRanges[0].min} - ${name.priceRanges[0].max}</td>
              </tr>
          )
      })
  }

  useEffect(()=>{
    fetchResults();
  },[props.location])

  return (
    <Table dark>
        <thead>
            <tr>
                <th>Name</th>
                <th>Where</th>
                <th>Date</th>
                <th>Time</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {eventMapper(result)}
        </tbody>
    </Table>
  );
}

export default Tmaster;