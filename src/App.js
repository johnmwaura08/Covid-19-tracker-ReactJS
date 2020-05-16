import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components"; // check index.js file from components folder to see the export

import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {

  state ={ //easier way to declare state

    data: {}



  }

  async componentDidMount() {
    // this is where we fetch Data

    const fetchedData = await fetchData();

    this.setState({ data: fetchedData});

  
  }
  render() {

    const { data} = this.state;
    return (
      <div className={styles.container}>
        <Cards data ={data}/>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
