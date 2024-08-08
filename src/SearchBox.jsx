import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export default function SearchBox({updateInfo}) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "89543ac61f1cf1972649c65aefc22ac6";
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const weatherRes = async () => {
    try {
        let response = await axios.get(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
          );
         const data = await response.data
          console.log(data);
          let result = {
              city: city,
            temprature: data.main.temp,
            feelslike: data.main.feels_like,
            max: data.main.temp_max,
            min: data.main.temp_min,
            humidity: data.main.humidity,
            weather: data.weather[0].description,
          };
          console.log(result);
          return result;
        }
        catch (error) {
        throw error
        
        
        }
        
    } 


  let handleForm = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
        e.preventDefault();
        setCity("");
       let newInfo = await weatherRes();
       updateInfo(newInfo);
    } catch (error) {
        setError(true)
    }
  
  };

  return (
    <div>
      <h1>Search For Weather</h1>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter city"
          variant="outlined"
          onChange={handleForm}
          required
          value={city}
        />
        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
       
      </form><br />
      {error &&  <Alert variant="filled" severity="error">
        No such loction Detected !
      </Alert> }
      <br />
    </div>
  );
}
