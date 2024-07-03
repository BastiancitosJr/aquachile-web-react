import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { productivityKPI } from "../../home/constants/kpi-data";
import { useForm } from "react-hook-form";
import useUserInformation from "../../auth/hooks/useUserInformation";
import useCreateNewProductivity from "../hooks/productivity/useCreateNewProductivity";
import useGetCurrentProductivity from "../hooks/productivity/useGetCurrentProductivity";
import { ProductivityResponse } from "../models/productivity/productivity-response";
import Divider from "../../common/components/Divider";
import Spinner from "../../common/components/Spinner";

const formTexts = {
  title: productivityKPI.title,
  subtitle: "Productividad Ingresada",
  subtitleTwo: "Agregar nueva productividad",
  tonsProdLabel: "Toneladas Producidas",
  packedTonsLabel: "Toneladas Envasadas",
  button: "Agregar Productividad",
};

type FormInputs = {
  packedTons: number;
  prodTons: number;
};

const formShortName = "Productividad";

interface Props {
  show?: boolean;
  onModalClose: (formShortName: string, isSuccess: boolean) => void;
}

const AddShiftProductivityModal = ({ show, onModalClose }: Props) => {
  const [sendingData, setSendingData] = useState(false);
  const [loadingProductivity, setLoadingProductivity] = useState(true);
  const [productivityData, setProductivityData] = useState<
    ProductivityResponse | undefined
  >(undefined);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const { shiftId } = useUserInformation();
  const createNewProductivity = useCreateNewProductivity();
  const getCurrentProductivity = useGetCurrentProductivity();

  useEffect(() => {
    const fetchProductivity = async () => {
      setLoadingProductivity(true);
      if (!show) return null;

      const productivity = await getCurrentProductivity();
      if (productivity) setProductivityData(productivity);

      setLoadingProductivity(false);
    };

    fetchProductivity();
  }, [show]);

  if (!show) return null;

  const handleClose = () => {
    onModalClose(formShortName, false);
  };

  const onSubmit = async (data: FormInputs) => {
    setSendingData(true);
    try {
      createNewProductivity("1", {
        packedTons: data.packedTons,
        producedTons: data.prodTons,
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
    <Modal show={show} size="md" popup onClose={handleClose}>
      <Modal.Header />
      <Modal.Body>
        <h3 className="text-2xl text-center font-medium text-gray-900 uppercase">
          {formTexts.title}
        </h3>
        <Divider className="my-5" />
        {productivityData && (
          <h4 className="text-2xl mb-3">{formTexts.subtitle}</h4>
        )}
        {loadingProductivity && (
          <>
            <div className="flex justify-center my-5">
              <Spinner />
            </div>
          </>
        )}
        {productivityData && (
          <div>
            <p>
              <span className="font-bold">Toneladas Producidas: </span>
              {productivityData.producedTons}
            </p>
            <p>
              <span className="font-bold">Toneladas Empacadas: </span>
              {productivityData.packedTons}
            </p>
            <p>
              <span className="font-bold">Ingresada el: </span>
              {productivityData.createdAt.toLocaleString("es-CL", {
                month: "2-digit",
                day: "2-digit",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>
        )}
        {!productivityData && (
          <>
            <h4 className="text-2xl mb-1">{formTexts.subtitleTwo}</h4>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="tons-produced"
                    value={formTexts.tonsProdLabel}
                  />
                </div>
                <TextInput
                  id="tons-produced"
                  {...register("prodTons", {
                    required: "Este campo es requerido",
                    min: { value: 0, message: "El valor mínimo es 0" },
                    max: { value: 3000, message: "El valor máximo es 1000" },
                  })}
                  placeholder="Ej: 250"
                  type="number"
                  color="enterprise"
                />
                {errors.prodTons && (
                  <p className="text-red-500">{errors.prodTons?.message}</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="tons-packaged"
                    value={formTexts.packedTonsLabel}
                  />
                </div>
                <TextInput
                  id="tons-packaged"
                  {...register("packedTons", {
                    required: "Este campo es requerido",
                    min: { value: 0, message: "El valor mínimo es 0" },
                    max: { value: 3000, message: "El valor máximo es 1000" },
                  })}
                  placeholder="Ej: 220"
                  type="number"
                  color="enterprise"
                />
                {errors.packedTons && (
                  <p className="text-red-500">{errors.packedTons?.message}</p>
                )}
              </div>
              <Button
                className="w-full"
                type="submit"
                color="enterprise"
                isProcessing={sendingData}
              >
                {formTexts.button}
              </Button>
            </form>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AddShiftProductivityModal;
