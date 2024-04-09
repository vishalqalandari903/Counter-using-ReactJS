import React from "react";
import ThemeBtn from "./ThemeBtn";

export const Header = () => {
  return (
    <div className=" md:px-20 w-full max-h-[10vh] flex items-center dark:bg-[#181C37] sticky top-0 p-2 px-5 shadow-lg justify-between">
      <h1 className="dark:text-white text-black text-xl font-medium uppercase">
        Counter App
      </h1>
      <ThemeBtn />
    </div>
  );
};
