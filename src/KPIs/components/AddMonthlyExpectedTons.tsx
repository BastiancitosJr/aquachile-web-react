import { Button, Label, Modal, TextInput } from "flowbite-react";
import { monthlyGoalKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useUserInformation from "../../auth/hooks/useUserInformation";
import useCreateNewMonthlyGoal from "../hooks/monthly-goal/useCreateNewMonthlyGoal";
import useGetMonthlyGoal from "../hooks/monthly-goal/useGetMonthlyGoal";
import { MonthlyGoal } from "../models/monthly-goal/monthly-goal-response";
import Spinner from "../../common/components/Spinner";
import useUpdateMonthlyGoal from "../hooks/monthly-goal/useUpdateMonthlyGoal";

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
  const [loadingGoal, setLoadingGoal] = useState(true);
  const [monthlyGoalData, setMonthlyGoalData] = useState<
    MonthlyGoal | undefined
  >(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const { shiftId } = useUserInformation();
  const createMonthlyGoal = useCreateNewMonthlyGoal();
  const getMonthlyGoal = useGetMonthlyGoal();
  const updateMonthlyGoal = useUpdateMonthlyGoal();

  useEffect(() => {
    const fetchCleaning = async () => {
      setLoadingGoal(true);
      if (!show) return;

      const monthlyGoalInfo = await getMonthlyGoal();
      if (monthlyGoalInfo) setMonthlyGoalData(monthlyGoalInfo);

      setLoadingGoal(false);
    };
    fetchCleaning();
  }, [show]);

  if (!show) return null;

  const handleClose = () => {
    onModalClose(formShortName, false);
  };

  const onSubmit = async (data: FormInputs) => {
    setSendingData(true);
    try {
      createMonthlyGoal("1", {
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

  const onUpdate = async (data: FormInputs) => {
    setSendingData(true);
    try {
      updateMonthlyGoal(monthlyGoalData?.id || 0, {
        monthly_order: data.monthlyGoal,
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
          {monthlyGoalData && (
            <>
              <h4 className="text-2xl mb-1">{formTexts.subtitle}</h4>
              {loadingGoal ? (
                <div className="flex justify-center my-5">
                  <Spinner />
                </div>
              ) : (
                <div className="mt-5 text-lg">
                  <div className="flex items-center gap-5">
                    <p>
                      <span className="font-bold">Tonelaje: </span>
                      {monthlyGoalData.monthlyOrder}
                    </p>
                    <p>
                      <span className="font-bold">Realizada el: </span>
                      {monthlyGoalData.createdAt.toLocaleString("es-CL", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </p>
                  </div>
                  <p className="mt-3">
                    <span className="font-semibold">
                      Última actualización:{" "}
                    </span>
                    {monthlyGoalData.updatedAt.toLocaleString("es-CL", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </p>
                  <Divider className="my-5" />
                  <form onSubmit={handleSubmit(onUpdate)}>
                    <h4 className="text-2xl mb-5">Editar pedido mensual</h4>
                    <TextInput
                      id="tons-produced"
                      {...register("monthlyGoal", {
                        required: "Este campo es requerido",
                        min: { value: 0, message: "El valor mínimo es 0" },
                        max: {
                          value: 50000,
                          message: "El valor máximo es 1000",
                        },
                      })}
                      placeholder="Ej: 250"
                      type="number"
                      color="enterprise"
                    />
                    {errors.monthlyGoal && (
                      <p className="text-red-500">
                        {errors.monthlyGoal?.message}
                      </p>
                    )}
                    <Button
                      outline
                      color="enterprise"
                      className="w-full mt-5"
                      type="submit"
                    >
                      EDITAR
                    </Button>
                  </form>
                </div>
              )}
            </>
          )}
          {!monthlyGoalData && (
            <>
              <h4 className="text-2xl mb-1">{formTexts.subtitleTwo}</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
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
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddMonthlyExpectedTons;
