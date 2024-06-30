import { Button } from "flowbite-react";

const StartShiftMenu = () => {
  return (
    <>
      <p className="text-xl font-semibold mb-3">
        Debes comenzar un turno antes de continuar...
      </p>
      <Button color="enterpriseOrange" size="lg">
        Iniciar turno
      </Button>
    </>
  );
};

export default StartShiftMenu;
