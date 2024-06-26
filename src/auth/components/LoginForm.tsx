import { useState } from "react";
import agent from "../../api/agent";
import { ShowPasswordButton } from "../../common/components/ShowPasswordButton";
import { Button, Label, TextInput } from "flowbite-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsProcessing(true);

    try {
      const response = await agent.Auth.login({ username, password });
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
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
        onChange={(event) => setUsername(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
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
