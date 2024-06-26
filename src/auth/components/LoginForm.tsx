import { LoginButton } from "./LoginButton";


export function LoginForm() {
  return (
    <form>
      <div className="relative z-0 w-full mb-10 group">
        <input 
        type="text" 
        name="username" 
        id="username" 
        autoComplete="username" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
        <label 
        htmlFor="username" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Credenciales</label>
      </div>
      <div className="relative z-0 w-full mb-10 group">
        <input 
        type="password"
        name="password"
        id="password" 
        autoComplete="current-password" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
        <label 
        htmlFor="password"
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
      </div>
      <LoginButton/>
    </form>
  );
}