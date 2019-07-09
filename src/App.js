import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Weather from './components/Weather.jsx';
import CityWeatherForecast  from './components/CityWeatherForecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Weather Data
      </header>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Weather} />
          <Route exact={true} path="/weather/:cityId" component={CityWeatherForecast} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
