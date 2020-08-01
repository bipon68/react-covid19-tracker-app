import React, { Component } from 'react';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {

  state = {
    data : {},
    countries: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log('feched data: ', fetchedData);
    this.setState({
      data: fetchedData
    })    
  }

  handleCountryChange = async (country) => {
    console.log(country)
    // fetch the data
    // set the state
  }

  render(){
    const { data } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
        
      </div>
    );
  }

}

export default App;
