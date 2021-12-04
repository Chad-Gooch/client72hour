import React, {setState} from 'react';
import './App.css';
import Weather from './Components/Weather/Weather';
import Nasa from './Components/Nasa/Nasa';
import Tmaster from './Components/Tmaster/Tmaster';

function App() {
  return (
    <div className="App">
        <Weather />
        <Nasa />
        <Tmaster />
    </div>
  );
}

export default App;