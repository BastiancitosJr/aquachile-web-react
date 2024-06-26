import { useState } from "react";
import { ShowPasswordButton } from "../../common/components/ShowPasswordButton";
import { Button, Label, TextInput } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import useLoginRequest from "../hooks/useLoginRequest";
import useSuccessLogin from "../hooks/useSuccessLogin";

type LoginInputs = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const sendLogin = useLoginRequest();
  const { setToken } = useSuccessLogin();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setIsProcessing(true);
    setIsAuthError(false);

    try {
      const { accessToken } = await sendLogin(data);
      setToken(accessToken);
    } catch (err) {
      setIsAuthError(true);
    } finally {
      setIsProcessing(false);
    }
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

      {isAuthError && (
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
