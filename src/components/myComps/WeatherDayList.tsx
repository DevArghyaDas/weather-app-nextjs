"use client";
import { WeatherDataResponseType } from "@/lib/types";
import ListCard from "../ListCard";

const WeatherDayList = ({ data }: { data: WeatherDataResponseType }) => {
  return (
    <>
      <div className="w-full rounded-lg backdrop-blur-xs md:min-w-2xl md:text-xl">
        <div className="grid w-full grid-cols-3 place-items-center p-3">
          <div>Date(mm/dd)</div>
          <div>Max(&deg;C)</div>
          <div>Min(&deg;C)</div>
        </div>

        <ListCard
          info={data}
          key={data.timezone_abbreviation + data.elevation}
        />
      </div>
    </>
  );
};

export default WeatherDayList;
