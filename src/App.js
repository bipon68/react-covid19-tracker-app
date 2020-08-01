import React, { Component } from 'react';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {

  state = {
    data : {}
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({
      data: fetchedData
    })

    
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
