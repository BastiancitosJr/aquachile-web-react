import { LoginForm } from "../components/LoginForm";
import logo from "../../assets/img/AquaChileLOGO.png";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col items-center w-full max-w-2xl">
              <div className="w-full max-w-md bg-white shadow-2xl rounded-lg px-10 pt-8 pb-8 md:text-lg md:py-4 md:px-8 border-2 border-gray-200">
                  <div className="flex justify-center items-center text-center">
                      <img src={logo} alt="Logo de Aquachile" className="h-13" />
                  </div> 
                  <h1 className="text-center text-4xl py-10 text-blue-900"> Inicio de Sesión</h1>
                  <LoginForm/>
              </div>

          </div>
    </div>
  );
};

export default LoginPage;
