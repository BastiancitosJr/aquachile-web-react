import { Outlet } from "react-router-dom";
import "../../index.css";
import AuthLayout from "../layouts/AuthLayout";

const Root = () => {
  return <AuthLayout children={<Outlet />} />;
};

export default Root;
