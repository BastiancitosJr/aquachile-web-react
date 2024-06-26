import { useState } from "react";
import { ShowPasswordButton } from "../../common/components/ShowPasswordButton";
import { Button, Label, TextInput } from "flowbite-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <form
      className="flex flex-col w-full h-full justify-start items-start mt-5"
      onSubmit={handleLogin}
    >
      <div className="block w-full text-start mb-1">
        <Label htmlFor="username-input" value="Tu Identificador" />
      </div>
      <TextInput
        className="w-full"
        color="enterprise"
        id="username-input"
        type="text"
        placeholder="Ej: Linea-1 o 12.123.123-K"
      />

      <div className="block w-full text-start mt-2 mb-1">
        <Label htmlFor="password-input" value="Tu Identificador" />
      </div>
      <div className="relative z-0 w-full mb-10 group">
        <div className="inline-flex w-full">
          <TextInput
            className="w-full"
            color="enterprise"
            id="password-input"
            type={showPassword ? "text" : "password"}
            placeholder="******"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <ShowPasswordButton showPassword={showPassword} />
          </button>
        </div>
      </div>

      {/* <input
        type="text"
        name="username"
        id="username"
        autoComplete="username"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
      />
      <label
        htmlFor="username"
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {credentialsPlaceholder}
      </label>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        id="password"
        autoComplete="current-password"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
      />
      <label
        htmlFor="password"
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {passwordPlaceholder}
      </label>
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-0 top-3 text-sm text-blue-700 focus:outline-none"
      >
        <ShowPasswordButton showPassword={showPassword} />
      </button> */}
      <Button
        className="btn-loggin"
        type="submit"
        size="lg"
        color="enterprise"
        isProcessing={isProcessing}
      >
        Iniciar sesión
      </Button>
    </form>
  );
};

export default LoginForm;
