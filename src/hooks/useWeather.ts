import { WeatherDataResponseType } from "@/lib/types";
import ky, { HTTPError } from "ky";
import { URLSearchParams } from "node:url";

export const UseWeather = async (lat: string, lon: string) => {
  const url = process.env.API_URL as string;
  const params = {
    latitude: lat,
    longitude: lon,
    daily: ["temperature_2m_max", "temperature_2m_min"],
    current: ["surface_pressure", "temperature_2m", "rain", "is_day"],
    timezone: "auto",
  };

  const qParams = new URLSearchParams({
    latitude: params.latitude,
    longitude: params.longitude,
    daily: params.daily.join(","),
    current: params.current.join(","),
    timezone: params.timezone,
  })
    .toString()
    .trim();

  // actual link looks like this

  // https://api.open-meteo.com/v1/forecast?latitude=lon&longitude=lat&daily=temperature_2m_max,temperature_2m_min&current=surface_pressure,temperature_2m,rain,is_day

  try {
    const res = await ky
      .get(url, {
        searchParams: qParams,
      })
      .json<WeatherDataResponseType>();

    if (!res) {
      return {
        success: false,
        data: null,
      };
    }
    return {
      success: true,
      data: res,
    };
  } catch (
    error: any | HTTPError // eslint-disable-line
  ) {
    if (error == HTTPError) {
      return {
        success: false,
        data: null,
      };
    }
    console.log(error.message);
  }
};
