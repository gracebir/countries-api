import React from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
type navbarProp = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

function NavBar({ theme, setTheme }: navbarProp) {
  const handleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className="bg-bgLight shadow-3xl dark:shadow-2xl dark:bg-bgDarlElt flex justify-between items-center md:px-24 py-6">
      <h2 className="font-[700] text-xl md:text-2xl text-textLight dark:text-textDark">
        Where in the world?
      </h2>
      <div onClick={handleMode} className="cursor-pointer">
        {theme === "dark" ? (
          <div className="flex gap-3 items-center text-textDark">
            <IoMoon />
            <span className="font-semibold">Dark Mode</span>
          </div>
        ) : (
          <div className="flex gap-3 items-center text-textLight">
            <IoMoonOutline />
            <span className="font-semibold">Light Mode</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
