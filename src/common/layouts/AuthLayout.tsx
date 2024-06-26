import React from "react";
import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const token = "1";
  const isLoggedIn = token ? true : false;

  return (
    <>
      {isLoggedIn && <Navbar />}
      <div className="flex flex-col text-center px-5 md:px-10 w-full md:pt-10 ">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
