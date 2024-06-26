import { useState } from "react";
import agent from "../../api/agent";
import { ShowPasswordButton } from "../../common/components/ShowPasswordButton";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  type LoginInputs = {
    username: string;
    password: string;
  };
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isUnAuth, setIsUnAuth] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const navigate = useNavigate();
  const { setToken } = useLogin();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const loginData = {
      username: data.username,
      password: data.password,
    };
    setIsProcessing(true);
    agent.Auth.login(loginData)
      .then((response) => {
        const { access } = response;
        setToken(access);
        console.log(response);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error de autenticación:", error);
        setIsUnAuth(true);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <form
      className="flex flex-col w-full h-full justify-start items-start mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="block w-full text-start mb-1">
        <Label htmlFor="username-input" value="Tu Identificador" />
      </div>
      <TextInput
        className="w-full"
        color={errors.username?.message ? "failure" : "enterprise"}
        id="username-input"
        type="text"
        placeholder="Ej: Linea-1 o 12.123.123-K"
        {...register("username", {
          required: "Debes ingresar tu identificador",
        })}
        autoComplete="username"
      />
      {errors.username && (
        <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
      )}

      <div className="block w-full text-start mt-2 mb-1">
        <Label htmlFor="password-input" value="Tu Identificador" />
      </div>
      <div className="relative z-0 w-full group">
        <div className="inline-flex w-full">
          <TextInput
            className="w-full"
            color={errors.password?.message ? "failure" : "enterprise"}
            id="password-input"
            type={showPassword ? "text" : "password"}
            placeholder="******"
            {...register("password", {
              required: "Debes ingresar tu contraseña",
            })}
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <ShowPasswordButton showPassword={showPassword} />
          </button>
        </div>
        <div className="text-start pt-1">
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
      </div>

      {isUnAuth && (
        <div className="text-red-500 mt-2">Credenciales inválidas</div>
      )}
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
