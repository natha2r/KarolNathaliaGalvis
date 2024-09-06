import React, { useState } from "react";
import { findCityByTemperature } from "../utils/findCityByTemperature";
import "./TemperatureCalculator.css";

function TemperatureCalculator() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [city, setCity] = useState("");

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    setFahrenheit(celsiusValue ? ((celsiusValue * 9) / 5 + 32).toFixed(2) : "");
    findCity(celsiusValue);
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius(
      fahrenheitValue ? (((fahrenheitValue - 32) * 5) / 9).toFixed(2) : ""
    );
    findCity(((fahrenheitValue - 32) * 5) / 9);
  };

  const findCity = (temperature) => {
    const result = findCityByTemperature(parseFloat(temperature));
    setCity(result);
  };

  return (
    <div className="calculator-container">
      <h1>Calculadora de Temperaturas</h1>
      <div className="input-group-container">
        <div className="input-group">
          <label>Celsius:</label>
          <input type="number" value={celsius} onChange={handleCelsiusChange} />
        </div>
        <div className="input-group">
          <label>Fahrenheit:</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
        </div>
      </div>
      {city && <p>Ciudad cercana a la temperatura: {city}</p>}
    </div>
  );
}

export default TemperatureCalculator;
