import Link from "next/link";
import ThemeToggleButton from "../ui/ThemeToggleButton";

const Header = () => {
  return (
    <>
      <header className="border-b shadow backdrop-blur-sm">
        <div className="container mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
          <Link
            className="font-mono text-2xl font-semibold tracking-wide italic"
            href={"/"}
          >
            Weather_App
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
