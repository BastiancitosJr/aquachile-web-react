import { Button, Label, Modal, Textarea } from "flowbite-react";
import { cleaningKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";
import { useForm } from "react-hook-form";
import useCreateNewCleanliness from "../hooks/cleaning/useCreateNewCleanliness";
import { useEffect, useState } from "react";
import useListAllAudits from "../hooks/quality/useListAllAudits";
import useUserInformation from "../../auth/hooks/useUserInformation";
import Spinner from "../../common/components/Spinner";
import { ObservationResponse } from "../models/safety/observation-response";

const formTexts = {
  title: cleaningKPI.title,
  subtitle: "Limpieza realizada",
  subtitleTwo: "Agregar nueva limpieza",
  button: "Enviar Revisión",
  questionTitle: "¿El lugar de trabajo se encuentra limpio al recibirlo?",
};

type FormInputs = {
  observationComment: string;
};

const formShortName = "Limpieza";

interface Props {
  show?: boolean;
  onModalClose: (formShortName: string, isSuccess: boolean) => void;
}

const AddShiftCleanModal = ({ show, onModalClose }: Props) => {
  const [sendingData, setSendingData] = useState(false);
  const [loadingObservation, setLoadingObservation] = useState(true);
  const [observationData, setObservationData] =
    useState<ObservationResponse | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const { shiftId } = useUserInformation();

  const createNewCleanliness = useCreateNewCleanliness();
  const getCleaningAudit = useListAllAudits();

  useEffect(() => {
    console.log("Shift ID:", shiftId);
    const fetchAudit = async () => {
      setLoadingObservation(true);
      if (!show) return;
      try {
        const audit = await getCleaningAudit();
        console.log("AUDITORIA", audit);
        setObservationData(audit);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingObservation(false);
      }
    };

    fetchAudit();
  }, [show]);

  if (!show) return null;

  const handleClose = () => {
    onModalClose(formShortName, false);
  };

  const onSubmit = async (data: FormInputs) => {
    setSendingData(true);
    try {
      await createNewCleanliness("1", {
        isDone: true,
        comment: data.observationComment,
        shiftId,
      });
      onModalClose(formShortName, true);
    } catch (err) {
      console.error(err);
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
          {loadingObservation ? (
            <div className="flex justify-center my-5">
              <Spinner />
            </div>
          ) : (
            observationData && (
              <div className="grid grid-cols-2 items-start gap-5">
                <p>
                  <span className="font-bold">Limpieza: </span>
                  {observationData.comment}
                </p>
                <p>
                  <span className="font-bold">Realizada el: </span>
                  {observationData.createdAt.toLocaleString("es-CL", {
                    month: "2-digit",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
              </div>
            )
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
              placeholder="Ej: Se realizó una limpieza efectiva..."
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
                {errors.observationComment.message}
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

export default AddShiftCleanModal;
