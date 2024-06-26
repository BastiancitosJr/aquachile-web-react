import React from "react";
import Navbar from "../components/Navbar";
import useUserInformation from "../../auth/hooks/useUserInformation";

const baseClassName =
  "flex flex-col text-center md:px-10 w-full md:pt-10 bg-gray-100 min-h-dvh";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { token } = useUserInformation();

  if (token) {
    return (
      <>
        <Navbar />
        <div className={`${baseClassName} py-10 px-5`}>{children}</div>
      </>
    );
  }

  return <div className={`${baseClassName} sm:px-5`}>{children}</div>;
};

export default MainLayout;
