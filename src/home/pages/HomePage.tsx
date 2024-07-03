import { useEffect, useState } from "react";
import HomeOptions from "../components/HomeOptions";
import StartShiftMenu from "../components/StartShiftMenu";
import useCheckShift from "../hooks/useCheckShift";
import Spinner from "../../common/components/Spinner";
import { toast, ToastContainer } from "react-toastify";
import { ShiftInformation } from "../models/shift-information";

const HomePage = () => {
  const [isDataFetching, setIsDataFetching] = useState(true);
  const [isShiftOpen, setIsShiftOpen] = useState(false);
  const [shiftInformation, setShiftInformation] = useState<
    ShiftInformation | undefined
  >(undefined);
  const checkShift = useCheckShift();

  useEffect(() => {
    const fetchData = async () => {
      const { isShiftOpen, shiftInformation } = await checkShift();

      if (isShiftOpen && shiftInformation) {
        setShiftInformation(shiftInformation);
      }

      setIsShiftOpen(isShiftOpen);
      setIsDataFetching(false);
    };

    fetchData();
  }, [checkShift]);

  const onShiftOpen = () => {
    setIsShiftOpen(true);
    toast.success("Turno Iniciado", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const getBodyPage = () => {
    if (isDataFetching) {
      return <Spinner />;
    }

    if (isShiftOpen && shiftInformation) {
      return <HomeOptions shiftInformation={shiftInformation} />;
    }
    return <StartShiftMenu onShiftOpen={onShiftOpen} />;
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="text-6xl md:text-7xl">Bienvenido</h1>
      <h2 className="text-xl md:text-2xl mt-1 mb-5 text-aqclOrange-500 uppercase font-semibold">
        Gerenciamiento diario AquaChile
      </h2>
      {getBodyPage()}
    </>
  );
};

export default HomePage;
