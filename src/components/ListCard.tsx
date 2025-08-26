"use client";

import { WeatherDataResponseType } from "@/lib/types";

const ListCard = ({ info }: { info: WeatherDataResponseType }) => {
  return (
    <>
      <div className="grid w-full grid-cols-3 place-items-center gap-5 p-3">
        <div className="flex flex-col items-center space-y-3">
          {info.daily.time.map((time, index) => (
            <div
              key={index}
              className="font-light italic"
            >
              {time.toString().substring(5, 10)}
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {info.daily.temperature_2m_max.map((tMax, index) => (
            <div
              key={index}
              className="font-bold"
            >
              {tMax}&deg;C
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {info.daily.temperature_2m_min.map((tMin, index) => (
            <div
              key={index}
              className="font-bold"
            >
              {tMin}&deg;C
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListCard;
