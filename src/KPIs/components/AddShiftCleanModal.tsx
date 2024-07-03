import { Button, Label, Modal, Textarea } from "flowbite-react";
import { cleaningKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";
import { useForm } from "react-hook-form";
import useCreateNewCleanliness from "../hooks/cleaning/useCreateNewCleanliness";
import { useEffect, useState } from "react";
import useUserInformation from "../../auth/hooks/useUserInformation";
import Spinner from "../../common/components/Spinner";
import useDataCleaning from "../hooks/cleaning/useDataCleaning";
import { GetUniqueAuditResponseDto } from "../dtos/cleaning/get-unique-audit-response-dto";

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
    useState<GetUniqueAuditResponseDto | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const createNewCleanliness = useCreateNewCleanliness();
  const getCleaningAudit = useDataCleaning();
  const { shiftId } = useUserInformation();

  useEffect(() => {
    const fetchAudit = async () => {
      setLoadingObservation(true);
      if (!show) return;
      try {
        const audit = await getCleaningAudit();
        console.log("Desde el modal", audit);
        if (audit) {
          setObservationData({
            ...audit,
            created_at: new Date(audit.created_at),
            updated_at: new Date(audit.updated_at),
          });
        }
      } catch (err) {
        console.error("Error fetching audit in component:", err);
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
                  {observationData.created_at.toLocaleString()}
                </p>
              </div>
            )
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="observationComment">
              {formTexts.questionTitle}
            </Label>
            <Textarea
              id="observationComment"
              {...register("observationComment", { required: true })}
              rows={4}
              className="my-2"
            />
            {errors.observationComment && (
              <span className="text-red-600">Este campo es requerido</span>
            )}
            <div className="flex justify-end gap-4 mt-4">
              <Button type="button" onClick={handleClose} color="gray">
                Cancelar
              </Button>
              <Button type="submit" color="blue" disabled={sendingData}>
                {sendingData ? "Enviando..." : formTexts.button}
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddShiftCleanModal;
