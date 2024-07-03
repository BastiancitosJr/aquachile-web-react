import { Button } from "flowbite-react";
import useOpenShift from "../hooks/useOpenShift";

interface Props {
  onShiftOpen: () => void;
}

const StartShiftMenu = ({ onShiftOpen }: Props) => {
  const openShift = useOpenShift();

  const initializeShift = async () => {
    const { wasCreated } = await openShift();

    if (wasCreated) {
      onShiftOpen();
    }
  };

  return (
    <>
      <p className="text-xl font-semibold mb-3">
        Debes comenzar un turno antes de continuar...
      </p>
      <Button className="w-full max-w-md" color="enterpriseOrange" size="lg" onClick={initializeShift}>
        Iniciar turno
      </Button>
    </>
  );
};

export default StartShiftMenu;
