import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components"; // check index.js file from components folder to see the export

import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  async componentDidMount() {
    // this is where we fetch Data

    const data = await fetchData();

    console.log(data);
  }
  render() {
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
