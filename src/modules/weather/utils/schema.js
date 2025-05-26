import { z } from "zod";
import { WEATHER_UNITS } from "./constants";

export const weatherSettingsSchema = z.object({
  unit: z.enum(Object.values(WEATHER_UNITS)).default(WEATHER_UNITS.celcius),
});
