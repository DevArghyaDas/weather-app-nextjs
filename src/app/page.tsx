import CurrentDayWeather from "@/components/myComps/CurrentDayWeather";
import MyLocationBtn from "@/components/myComps/MyLocationBtn";
import WeatherDayList from "@/components/myComps/WeatherDayList";
import { UseWeather } from "@/hooks/useWeather";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Home Page",
};

type Params = Promise<{ lat: string; lon: string }>;

const page = async ({ searchParams }: { searchParams: Params }) => {
  const { lat, lon } = await searchParams;

  if (lat === undefined || lon === undefined) {
    return (
      <>
        <div className="relative grid h-full min-h-[86dvh] place-items-center">
          <MyLocationBtn />
        </div>
      </>
    );
  }

  const weather = await UseWeather(lat, lon);

  if (weather === undefined) {
    return "data is probly undefind";
  }
  const { data } = weather;

  if (data === undefined || data === null) {
    // return null;
    return "data is probly null";
  }

  return (
    <>
      <div className="grid h-[80dvh] place-items-center">
        <div className="">
          <CurrentDayWeather info={data} />
          <WeatherDayList data={data} />
        </div>
      </div>
    </>
  );
};

export default page;
