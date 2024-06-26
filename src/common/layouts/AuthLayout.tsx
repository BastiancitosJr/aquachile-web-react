import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col text-center px-5 md:px-10 w-full h-dvh pt-5 md:pt-10 bg-gray-50">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
