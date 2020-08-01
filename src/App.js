import React from 'react';
import './App.css';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';

function App() {
  return (
    <div className="App">
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
