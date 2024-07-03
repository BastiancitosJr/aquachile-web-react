import { useEffect, useState } from "react";
import HomeOptions from "../components/HomeOptions";
import StartShiftMenu from "../components/StartShiftMenu";
import useCheckShift from "../hooks/useCheckShift";
import Spinner from "../../common/components/Spinner";
import { toast } from "react-toastify";
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
      setIsDataFetching(false);

      setShiftInformation(shiftInformation);

      setIsShiftOpen(isShiftOpen);
    };

    fetchData();
  }, [checkShift]);

  const onShiftOpen = (shiftInformation?: ShiftInformation) => {
    if (!shiftInformation) {
      toast.error("Hubo un error al iniciar el turno", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setIsShiftOpen(true);
    setShiftInformation(shiftInformation);
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

    if (isShiftOpen) {
      return (
        <HomeOptions shiftInformation={shiftInformation as ShiftInformation} />
      );
    }
    return <StartShiftMenu onShiftOpen={onShiftOpen} />;
  };

  return (
    <>
      <h1 className="text-6xl md:text-7xl">Bienvenido</h1>
      <h2 className="text-xl md:text-2xl mt-1 mb-5 text-aqclOrange-500 uppercase font-semibold">
        Gerenciamiento diario AquaChile
      </h2>
      {getBodyPage()}
    </>
  );
};

export default HomePage;
