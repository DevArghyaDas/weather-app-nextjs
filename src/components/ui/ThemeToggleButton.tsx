"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";
const ThemeToggleButton = () => {
  // const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return;
  // }

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer rounded-xl"
    >
      <SunIcon className="block dark:hidden" />
      <MoonIcon className="hidden dark:block" />
    </Button>
  );
};

export default ThemeToggleButton;
