import { Outlet } from "react-router-dom";
import "../../index.css";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "../layouts/MainLayout";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <>
      <ToastContainer />
      <MainLayout children={<Outlet />} />
    </>
  );
};

export default Root;
