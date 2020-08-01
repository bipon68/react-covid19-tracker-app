import React, { Component } from 'react';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {

  async componentDidMount(){
    const data = await fetchData();

    console.log(data);
  }

  render(){
    return (
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }

}

export default App;
