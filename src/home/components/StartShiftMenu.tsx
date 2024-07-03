import { Button } from "flowbite-react";
import useOpenShift from "../hooks/useOpenShift";
import { ShiftInformation } from "../models/shift-information";

interface Props {
  onShiftOpen: (shiftInformation?: ShiftInformation) => void;
}

const StartShiftMenu = ({ onShiftOpen }: Props) => {
  const openShift = useOpenShift();

  const initializeShift = async () => {
    const { wasCreated, shiftInformation } = await openShift();

    if (wasCreated) {
      onShiftOpen(shiftInformation);
    }
  };

  return (
    <>
      <p className="text-xl font-semibold mb-3">
        Debes comenzar un turno antes de continuar...
      </p>
      <Button
        className="w-full max-w-md"
        color="enterpriseOrange"
        size="lg"
        onClick={initializeShift}
      >
        Iniciar turno
      </Button>
    </>
  );
};

export default StartShiftMenu;
