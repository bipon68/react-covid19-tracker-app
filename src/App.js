import React, { Component } from 'react';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import image from './images/image.png';

class App extends Component {

  state = {
    data : {},
    country: ''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log('feched data: ', fetchedData);
    this.setState({
      data: fetchedData
    })    
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData();
    console.log(country)

    console.log('handle change fetched data: ', fetchedData)
    this.setState({
      data: fetchedData,
      country: country
    })
    
    // set the state
  }

  render(){
    // destructor
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        
      </div>
    );
  }

}

export default App;
