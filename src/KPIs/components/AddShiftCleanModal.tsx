import { Button, Label, Modal, Textarea, Radio } from "flowbite-react";
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
  isClean: string; // Se maneja como string para el radio button
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
    setValue,
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
        setObservationData(audit);
        if (audit) {
          setValue("isClean", audit.is_done ? "SI" : "NO");
          setValue("observationComment", audit.comment || "");
        } else {
          setValue("isClean", "NO");
          setValue("observationComment", "");
        }
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
        isDone: data.isClean === "SI",
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
          <h4 className="text-2xl mb-1 text-center text-green-400">
            {formTexts.subtitle}
          </h4>
          {loadingObservation ? (
            <div className="flex justify-center my-5">
              <Spinner />
            </div>
          ) : observationData ? (
            <div className="my-5 text-lg">
              <div className="flex items-center gap-5">
                <p>
                  <span className="font-bold">Comentario: </span>
                  {observationData.comment}
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm">
                No se han realizado auditorías en este turno todavía
              </p>
              <Divider className="my-5" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className="text-2xl mb-1">{formTexts.subtitleTwo}</h4>
                <fieldset className="w-full flex justify-between px-16 mt-5">
                  <legend className="text-center my-5 text-xl text-aqcl-500 font-semibold">
                    {formTexts.questionTitle}
                  </legend>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="no-option"
                      {...register("isClean", {
                        required: {
                          value: true,
                          message: "Debes seleccionar una opción",
                        },
                      })}
                      name="audit-options"
                      value="NO"
                    />
                    <Label htmlFor="no-option" className="uppercase text-xl">
                      NO
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="yes-option"
                      {...register("isClean", {
                        required: {
                          value: true,
                          message: "Debes seleccionar una opción",
                        },
                      })}
                      name="audit-options"
                      value="SI"
                    />
                    <Label htmlFor="yes-option" className="uppercase text-xl">
                      SI
                    </Label>
                  </div>
                </fieldset>
                {errors.observationComment && (
                  <p className="text-center mt-3 text-red-500">
                    {errors.observationComment?.message}
                  </p>
                )}
                <div className="mb-2 block mt-10">
                  <Label
                    htmlFor="audit-comment"
                    value="Comentario o Apreciación"
                  />
                </div>
                <Textarea
                  rows={4}
                  id="audit-comment"
                  placeholder="Ej: Etiquetado en excelente estado..."
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
                      message:
                        "El comentario no puede tener más de 200 caracteres",
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
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddShiftCleanModal;
