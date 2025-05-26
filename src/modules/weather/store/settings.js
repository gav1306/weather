import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WEATHER_UNITS } from "../utils";

export const useWeatherSettingsStore = create(
  persist(
    (set) => ({
      unit: WEATHER_UNITS.celcius,
      updateUnit: (value) =>
        set(() => {
          return { unit: value };
        }),
    }),
    {
      name: "weather-settings-storage",
    }
  )
);
