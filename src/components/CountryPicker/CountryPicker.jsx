import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import{fetchCountries} from '../../api'


//immediately destructue handlecountrychange and use it as a prop and add it to onchange value
const CountryPicker = ({handleCountryChange}) => {
             const [fetchedCountries, setFetchedCountries] = useState([]);

            useEffect(() => {
                const fetchCountryApi = async () => {
                setFetchedCountries(await fetchCountries());
                }

                fetchCountryApi();
            }, [setFetchedCountries]);

            console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange = {(e) => handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => 
          <option key={i} value={country}>
            {country}
          </option>
        )}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
