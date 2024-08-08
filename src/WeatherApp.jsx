import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(info) {
  let [weather, setWeather] = useState({
    city: "Hyderabad",
    feelslike: 24.61,
    humidity: 94,
    max: 23.73,
    min: 23.73,
    temprature: 23.73,
    weather: "light rain",
  });

  let updateInfo = (newinfo) => {
    setWeather(newinfo);
  };
  return (
    <div>
      <h1>Weather App by Moid</h1>
      <SearchBox  updateInfo={updateInfo}/>
      <InfoBox info={weather} />
    </div>
  );
}
