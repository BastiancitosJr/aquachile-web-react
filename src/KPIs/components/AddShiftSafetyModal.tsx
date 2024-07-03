import { Button, Label, Modal, Textarea } from "flowbite-react";
import { safetyKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useUserInformation from "../../auth/hooks/useUserInformation";
import Spinner from "../../common/components/Spinner";
import useListAllObservations from "../hooks/safety/useListAllObservations";
import useCreateNewObservation from "../hooks/safety/useCreateNewObservation";
import { ObservationResponse } from "../models/safety/observation-response";

const formTexts = {
  title: safetyKPI.title,
  subtitle: "Observaciones realizadas",
  subtitleTwo: "Agregar nueva observación",
  button: "Enviar Observación",
  questionTitle: "¿Hubo una conversación de seguridad en el equipo?",
};

type FormInputs = {
  observationComment: string;
};

const formShortName = "Observaciones";

interface Props {
  show?: boolean;
  onModalClose: (formShortName: string, isSuccess: boolean) => void;
}

const AddShiftSafetyModal = ({ show, onModalClose }: Props) => {
  const [sendingData, setSendingData] = useState(false);
  const [loadingObservations, setLoadingObservations] = useState(true);
  const [observationsData, setObservationsData] = useState<
    ObservationResponse[]
  >([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const { shiftId } = useUserInformation();

  const createNewObservation = useCreateNewObservation();
  const listAllObservations = useListAllObservations();

  useEffect(() => {
    const fetchObservations = async () => {
      setLoadingObservations(true);
      if (!show) return null;

      try {
        const observations = await listAllObservations();
        setObservationsData(observations);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingObservations(false);
      }
    };

    fetchObservations();
  }, [listAllObservations, show]);

  if (!show) return null;

  const handleClose = () => {
    onModalClose(formShortName, false);
  };

  const onSubmit = async (data: FormInputs) => {
    setSendingData(true);
    try {
      createNewObservation("1", {
        isDone: true,
        comment: data.observationComment,
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
          {loadingObservations && (
            <div className="flex justify-center my-5">
              <Spinner />
            </div>
          )}
          {!loadingObservations && (
            <div className="my-5 text-lg">
              {observationsData.length === 0 ? (
                <p className="text-sm">
                  No se han realizado observaciones entre pares este turno
                  todavía
                </p>
              ) : (
                observationsData.map((observation) => (
                  <div
                    key={observation.id}
                    className="grid grid-cols-2 items-start gap-5"
                  >
                    <p>
                      <span className="font-bold">Comentario: </span>
                      {observation.comment}
                    </p>
                    <p>
                      <span className="font-bold">Realizado el: </span>
                      {observation.createdAt.toLocaleString("es-CL", {
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
          <Divider className="my-5" />
          <h4 className="text-2xl mb-1">{formTexts.subtitleTwo}</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 block mt-10">
              <Label htmlFor="audit-comment" value="Comentario o Apreciación" />
            </div>
            <Textarea
              rows={4}
              id="audit-comment"
              placeholder="Ej: Se realizó una observación de uso de casco..."
              color="enterprise"
              {...register("observationComment", {
                required: {
                  value: true,
                  message: "Debes ingresar un comentario",
                },
                minLength: {
                  value: 5,
                  message: "El comentario debe tener al menos 5 caracteres",
                },
                maxLength: {
                  value: 200,
                  message: "El comentario no puede tener más de 200 caracteres",
                },
              })}
            />
            {errors.observationComment && (
              <p className="text-red-500">
                {errors.observationComment?.message}
              </p>
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
export default AddShiftSafetyModal;
