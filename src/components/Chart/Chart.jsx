import React, { useState, useEffect } from "react";
//we're using hooks here

import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({data:{confirmed, recovered, deaths},country}) => {
  const [ dailyData, setDailyData ] = useState([]); //you have to represent it inn array format because dailydata is an array

  //we cant use async infront of useeffect so we'll have to create an async function and put it inside

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    // console.log(dailyData);

    fetchApi();
  },[]);

  //responsible for global showing of data
  //ternary operator means if daily data is available we'll show or else show null
  //our api only brings daily data for infected and deaths
  const lineChart = (
    dailyData.length
    ? (
            <Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,

                },
                    
                {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5',
                    fill: true,


                    }],
            }}
            />

     ) : null
  )

  console.log(confirmed,recovered,deaths)


  const barChart=(
    confirmed
    ?(
      <Bar
          data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [{
                label: 'People',
                backgroundColor: [
                  'rgba(0,0,255,0.5)',
                  'rgba(0,255,0,0.5)',
                  'rgba(255,0,0,0.5)'
                ],
                data:[confirmed.value,recovered.value, deaths.value]
              }]
          }}
      
            options={{
              legend:{display:false},
              title: {display: true, text: `Current state in ${country}`}
            }}
      
      
      
      />
    ): null

  )



  return (<div className={styles.container}>
    {country? barChart:lineChart}
     </div>);
   
  
  
  
   };
export default Chart;
