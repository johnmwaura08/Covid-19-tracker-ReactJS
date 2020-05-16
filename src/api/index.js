import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

//async function to retrieve data from our api for cards

export const fetchData = async (country) => {


  let changeableUrl = url;

  if(country){

    changeableUrl= `${url}/countries/${country}`
  }
  try {
      //destructuring the response data from the api
    const  { data:{ confirmed, recovered, deaths, lastUpdate}}= await axios.get(changeableUrl); // we only need confirmed, recovered etc so thats why we destructure
    return {confirmed, recovered, deaths, lastUpdate}
  } catch (error) { 
    console.log(error)

  }
};


//api for chart we need daily data for the chart

export const fetchDailyData = async () => {

  

  try {


    const {data} = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({ // instant return of an object

      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate

    }));
    return modifiedData;
  }
  catch(error) {
    console.log(error)

  }
}


export const fetchCountries = async () => {

  try{

    const {data: {countries}} = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  }


  catch(error){
    console.log(error)
  }
};