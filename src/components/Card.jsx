import React from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import { useState, useEffect } from "react";

const Card = ({ data }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex flex-column align-items-center g-2 mt-3">
        <Clock value={value} />
        <h2>
          {data.name},{data.sys.country}
        </h2>
        <h1>
          <img
            src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`}
            alt=""
          />
          {data.main.temp}°C
        </h1>
        <p>{data.weather[0].main}</p>
        <p>Humidity:{data.main.humidity}%</p>
        <p>Visibility:{data.visibility / 1000}km</p>
      </div>
    );
  } else {
    return <h1 className="text-center">Loading...</h1>;
  }
};

export default Card;
