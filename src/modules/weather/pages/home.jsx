import { WeatherListTabs } from "../components";
import { HydratedWeatherList } from "../hydrate";

export const WeatherHome = () => {
  return (
    <section className="grid gap-4">
      <HydratedWeatherList>
        <WeatherListTabs />
      </HydratedWeatherList>
    </section>
  );
};
