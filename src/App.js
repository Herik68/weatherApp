import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { api, api_key } from "./api/api";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("Chiang Mai");

  const fetchWeather = async (country_name) => {
    
    if (country_name && country_name !== '') {
      setCountry(country_name);
    }
    try {
      const res = await api.get(`/weather?q=${country}&appid=${api_key}`);
      setData(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [country]);

  return (
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
      <div className="shadow-lg bg-light gap-4 p-4">
        <Form fetchWeather={fetchWeather} />
        <Card data={data} />
      </div>
    </div>
  );
}

export default App;
