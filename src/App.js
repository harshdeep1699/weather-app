import React from 'react';
import './App.css';
import Forecast from './Forecast/ForecastApi';

class App extends React.Component {
  render()
  {
    return (
    <div className="App">
    <Forecast></Forecast>
    </div>
  );
}
}
export default App;
