import { Button, Label, Modal, TextInput } from "flowbite-react";
import { monthlyGoalKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useUserInformation from "../../auth/hooks/useUserInformation";
import useCreateNewMonthlyGoal from "../hooks/monthly-goal/useCreateNewMonthlyGoal";

const formTexts = {
  title: monthlyGoalKPI.title,
  subtitle: "Pedido mensual",
  subtitleTwo: "Agregar pedido mensual",
  button: "Agregar Pedido",
};

type FormInputs = {
  monthlyGoal: number;
};

const formShortName = "Pedido mensual";

interface Props {
  show?: boolean;
  onModalClose: (formShortName: string, isSuccess: boolean) => void;
}

const AddMonthlyExpectedTons = ({ show, onModalClose }: Props) => {
  const [sendingData, setSendingData] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const { shiftId } = useUserInformation();
  const createProductivity = useCreateNewMonthlyGoal();

  if (!show) return null;

  const handleClose = () => {
    onModalClose(formShortName, false);
  };

  const onSubmit = async (data: FormInputs) => {
    setSendingData(true);
    try {
      // TODO: Send data to API
      createProductivity("1", {
        tons: data.monthlyGoal,
        shiftId,
      });
      onModalClose(formShortName, true);
    } catch (err) {
      console.log(err);
    } finally {
      setSendingData(false);
    }
  };

  return (
    <Modal show={show} popup onClose={handleClose} className="h-dvh">
      <Modal.Header />
      <Modal.Body>
        <div>
          <h3 className="text-3xl text-center font-medium uppercase">
            {formTexts.title}
          </h3>
          <Divider className="my-5" />
          <h4 className="text-2xl mb-1">{formTexts.subtitle}</h4>
          <Divider className="my-5" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-2xl mb-1">{formTexts.subtitleTwo}</h4>
            <div className="mb-2 block mt-10">
              <Label htmlFor="tons-produced" value="Pedido mensual" />
            </div>
            <TextInput
              id="tons-produced"
              {...register("monthlyGoal", {
                required: "Este campo es requerido",
                min: { value: 0, message: "El valor mínimo es 0" },
                max: { value: 50000, message: "El valor máximo es 1000" },
              })}
              placeholder="Ej: 250"
              type="number"
              color="enterprise"
            />
            {errors.monthlyGoal && (
              <p className="text-red-500">{errors.monthlyGoal?.message}</p>
            )}
            <Button
              className="w-full mt-5"
              type="submit"
              color="enterprise"
              isProcessing={sendingData}
            >
              {formTexts.button}
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddMonthlyExpectedTons;
