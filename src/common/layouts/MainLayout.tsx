import React from "react";
import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const token = "";
  const isLoggedIn = token ? true : false;

  return (
    <>
      {isLoggedIn && <Navbar />}
      <div className="flex flex-col text-center sm:px-5 md:px-10 w-full md:pt-10 bg-gray-100">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
