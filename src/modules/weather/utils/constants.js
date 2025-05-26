import sunAnimation from "@/assets/animations/sun.json";
import cloudyAnimation from "@/assets/animations/cloudy.json";
import foggyAnimation from "@/assets/animations/foggy.json";
import lightDrizzleAnimation from "@/assets/animations/light-drizzle.json";
import heavyDrizzleAnimation from "@/assets/animations/heavy-drizzle.json";
import thunderCloudAnimation from "@/assets/animations/thunder-cloud.json";
import snowCloudAnimation from "@/assets/animations/snow-cloud.json";

export const DEFAULT_WEATHER_PARAMS = {
  current:
    "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,visibility,uv_index,precipitation",
  daily: "temperature_2m_min,temperature_2m_max,sunrise,sunset",
  timezone: "auto",
};

export const DEFAULT_WEATHER_CHART_PARAMS = {
  past_days: 7,
  daily:
    "temperature_2m_min,temperature_2m_max,precipitation_sum,wind_speed_10m_max",
  timezone: "auto",
};

export const CITY_LIST = {
  delhi: { name: "New Delhi", latitude: 28.75, longitude: 77.125 },
  mumbai: { name: "Mumbai", latitude: 19.125, longitude: 72.875 },
  bangalore: { name: "Bengaluru", latitude: 13, longitude: 77.625 },
  chennai: { name: "Chennai", latitude: 13, longitude: 80.125 },
  kolkata: { name: "Kolkata", latitude: 22.625, longitude: 88.375 },
};

export const WEATHER_TYPES = [
  {
    from: 0,
    to: 0,
    icon: sunAnimation,
    description: "Clear Sky",
  },
  {
    from: 1,
    to: 1,
    icon: sunAnimation,
    description: "Mainly Clear",
  },
  {
    from: 2,
    to: 3,
    icon: cloudyAnimation,
    description: "Partly Cloudy / Overcast",
  },
  {
    from: 45,
    to: 48,
    icon: foggyAnimation,
    description: "Foggy / Rime Fog",
  },
  {
    from: 51,
    to: 55,
    icon: lightDrizzleAnimation,
    description: "Light to Dense Drizzle",
  },
  {
    from: 56,
    to: 57,
    icon: heavyDrizzleAnimation,
    description: "Freezing Drizzle",
  },
  {
    from: 61,
    to: 65,
    icon: heavyDrizzleAnimation,
    description: "Light to Heavy Rain",
  },
  {
    from: 66,
    to: 67,
    icon: heavyDrizzleAnimation,
    description: "Freezing Rain",
  },
  {
    from: 71,
    to: 75,
    icon: snowCloudAnimation,
    description: "Light to Heavy Snowfall",
  },
  {
    from: 77,
    to: 77,
    icon: snowCloudAnimation,
    description: "Snow Grains",
  },
  {
    from: 80,
    to: 82,
    icon: heavyDrizzleAnimation,
    description: "Rain Showers",
  },
  {
    from: 85,
    to: 86,
    icon: snowCloudAnimation,
    description: "Snow Showers",
  },
  {
    from: 95,
    to: 95,
    icon: thunderCloudAnimation,
    description: "Thunderstorm",
  },
  {
    from: 96,
    to: 99,
    icon: thunderCloudAnimation,
    description: "Thunderstorm with Hail",
  },
];
