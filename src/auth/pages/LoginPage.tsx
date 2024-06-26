import { LoginForm } from "../components/LoginForm";
import logo from "../../assets/img/aquachile-logo.webp";

const LoginPage = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg px-10 pt-8 pb-8 border-2 border-gray-200">
        <img src={logo} alt="Logo de Aquachile" />
        <h1 className="text-4xl lg:text-5xl text-aqcl-500 mt-3">
          Inicio de Sesión
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
