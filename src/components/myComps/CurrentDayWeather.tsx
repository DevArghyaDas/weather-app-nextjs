"use client";

import { WeatherDataResponseType } from "@/lib/types";

const CurrentDayWeather = ({ info }: { info: WeatherDataResponseType }) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  return (
    <>
      <div className="mb-3 flex flex-col items-center justify-center gap-4">
        <div className="text-3xl font-semibold">
          {info.current.temperature_2m}&deg;C
        </div>
        <div className="text-muted-foreground font-bold tracking-wider">
          {dayNames[date.getDay()]}
        </div>
        <div className="grid grid-flow-row place-items-center gap-4 font-semibold tracking-wide text-balance *:inline-flex *:gap-2 md:grid-flow-col">
          <div className="">Rain: {info.current.rain} ,</div>
          <div className="font-bold">
            {info.current.is_day === 0
              ? "🌃"
              : info.current.is_day === 1
                ? "🌤️"
                : ""}
            {info.current.time.substring(0, 10)} ,
          </div>
          <div className="">Pressure: {info.current.surface_pressure}hPa</div>
        </div>
      </div>
    </>
  );
};

export default CurrentDayWeather;
