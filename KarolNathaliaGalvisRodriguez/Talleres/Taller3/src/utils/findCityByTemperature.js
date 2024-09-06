import { cityData } from "./cityData";

export const findCityByTemperature = (temperature) => {
  const tolerance = 2; // Tolerancia en grados Celsius
  const closestCity = cityData.reduce((prev, curr) =>
    Math.abs(curr.temperature - temperature) <
    Math.abs(prev.temperature - temperature)
      ? curr
      : prev
  );

  return Math.abs(closestCity.temperature - temperature) <= tolerance
    ? closestCity.city
    : "No encontré una ciudad :(";
};
