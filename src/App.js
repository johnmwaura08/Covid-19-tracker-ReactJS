import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components"; // check index.js file from components folder to see the export

import styles from "./App.module.css";
import { fetchData } from "./api";
import covidImage from './images/covidimage.png';

class App extends Component {

  state ={ //easier way to declare state

    data: {},
    country: ''



  }

  async componentDidMount() {
    // this is where we fetch Data

    const fetchedData = await fetchData();

    this.setState({ data: fetchedData});

  
  }

  handleCountryChange = async (country)=>{

    //fetch the data
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country});

  }
  render() {

    const { data,country} = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>

            <img classname={styles.image}src={covidImage} alt="coronavirus"/>
          </div>
        <Cards data ={data}/>
        <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
