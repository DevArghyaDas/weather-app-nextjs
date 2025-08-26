import Link from "next/link";
import ThemeToggleButton from "../ui/ThemeToggleButton";

const Header = () => {
  return (
    <>
      <header className="border-b shadow">
        <div className="container mx-auto flex max-w-2xl items-center justify-between px-6 py-3 backdrop-blur-sm">
          <Link
            className="text-2xl font-semibold"
            href={"/"}
          >
            Weather App
          </Link>

          <nav className="flex items-center">
            <ThemeToggleButton />
            {/* <div className="">darkmode</div> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
