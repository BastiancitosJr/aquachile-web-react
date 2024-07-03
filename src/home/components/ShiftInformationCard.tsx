import { Button, Card } from "flowbite-react";
import { ShiftInformation } from "../models/shift-information";
import useCloseShift from "../hooks/useCloseShift";

interface Props {
  shiftInformation: ShiftInformation;
  className?: string;
}

const ShiftInformationCard = ({ shiftInformation, className }: Props) => {
  const { id, shiftName, createdAt } = shiftInformation;
  const closeShift = useCloseShift();

  const onShiftButtonClick = () => {
    closeShift();
    location.reload();
  };

  return (
    <Card className={`max-w-lg mx-auto text-start ${className}`}>
      <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Turno: {shiftName}
      </h4>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Identificador</span>: {id}
      </p>
      <p>
        <span className="font-bold">Iniciado el:</span>{" "}
        {createdAt.toLocaleString("es-CL", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </p>
      <Button color="enterpriseOrange" outline onClick={onShiftButtonClick}>
        Cerrar turno
      </Button>
    </Card>
  );
};

export default ShiftInformationCard;
