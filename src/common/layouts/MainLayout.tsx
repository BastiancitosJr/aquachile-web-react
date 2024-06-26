import React from "react";
import Navbar from "../components/Navbar";
import useUserInformation from "../../auth/hooks/useUserInformation";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { token } = useUserInformation();

  return (
    <>
      {token && <Navbar />}
      <div className="flex flex-col text-center sm:px-5 md:px-10 w-full md:pt-10 bg-gray-100">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
