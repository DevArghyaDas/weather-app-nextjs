"use client";

import { useRouter } from "next/navigation";
import { RainbowButton } from "../magicui/rainbow-button";

const MyLocationBtn = () => {
  const router = useRouter();
  const pushHandeler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          // Redirect to the weather page with the current location
          if (latitude !== 0 && longitude !== 0) {
            router.push(`/?lat=${latitude}&lon=${longitude}`);
          }
        } catch (
          err: any // eslint-disable-line
        ) {
          console.error(err.message as string);
        }
      });
    }
  };
  return (
    <>
      <RainbowButton
        className="bg-transparent"
        onClick={pushHandeler}
      >
        Get my area&apos;s Weather!
      </RainbowButton>
    </>
  );
};

export default MyLocationBtn;
