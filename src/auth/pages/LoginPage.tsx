import logo from "../../assets/img/aquachile-logo.webp";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg py-8 px-5 md:px-10 border-2 border-gray-200">
        <img src={logo} alt="Logo de Aquachile" />
        <h1 className="text-4xl lg:text-5xl text-aqcl-500">Inicio de Sesión</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
