import { WEATHER_UNITS } from "./constants";

export const convertTemperature = (temperature, unit) => {
  if (unit === WEATHER_UNITS.celcius) {
    return temperature;
  }
  return (temperature * 1.8 + 32).toFixed(0);
};
