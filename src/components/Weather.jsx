import React from "react";
import "./Weather.css";
import axios from "axios";
import { useEffect, useState } from "react";
import  dataPlaces  from "./data/dummyData";
import moment from "moment-timezone";
import { ICON_MAP } from "./data/dummyData";

function Weather() {
  const [temperature, setTemperature] = useState(null);
  const [time, setTime] = useState(null);2
  const [city, setCity] = useState(null);
  const [place, setPlace] = useState("../image/Warsaw.png");
  const [weatherCode, setWeatherCode] = useState(null);

  function getWeather(lat, lon, timezone, citi) {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max&timeformat=unixtime&timezone=${timezone}`
      )
      .then((response) => {
        const data = response.data;

        const currentUnixTime = moment().unix();

        const index = data.hourly.time.findIndex(
          (time) => time >= currentUnixTime
        );

        setTemperature(Math.round(data.hourly.temperature_2m[index]));

        const currentTime = moment().tz(timezone);
        setTime(currentTime);

        const weatherCode = data.hourly.weather_code[index];
        setWeatherCode(weatherCode);

        setCity(citi);
      });
  }

  const getRandomPlace = () => {
    const index = Math.floor(Math.random() * dataPlaces.length);
    return dataPlaces[index];
  };

  const getWeatherForRandomPlace = () => {
    const place = getRandomPlace();
    setPlace(place);
    console.log("fun");
    getWeather(place.lat, place.lon, place.timezone, place.city);
  };

  useEffect(() => {
    getWeatherForRandomPlace();

    const intervalId = setInterval(getWeatherForRandomPlace, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const icon = ICON_MAP.get(weatherCode);

  return (
    <div
      className="weather"
      key={city}
      style={{
        backgroundImage: `url(${place.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="weather_info">
        <img src={icon} alt="cloud"></img>
        <div>
          <span>{temperature}</span>&deg;
        </div>
        <div className="weather_info_city">{city}</div>
        <div className="weather_info_date">
          <div className="day">{time && time.format("dddd")}</div>
          <div className="time">{time && time.format("HH:mm")}</div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
