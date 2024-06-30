import { Outlet } from "react-router-dom";
import "../../index.css";
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from "../layouts/MainLayout";

const Root = () => {
  return <MainLayout children={<Outlet />} />;
};

export default Root;
