import { Button, Label, Modal, Textarea } from "flowbite-react";
import { incidentsKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";
import useUserInformation from "../../auth/hooks/useUserInformation";
import useCreateNewIncidents from "../hooks/incidents/useCreateNewIncidents";
import useDataIncidents from "../hooks/incidents/useDataIncidents";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Spinner from "../../common/components/Spinner";
import { IncidentResponse } from "../models/incidents/incident-response";

const formTexts = {
  title: incidentsKPI.title,
  subtitle: "Incidentes registrados",
  button: "Enviar Incidente",
  questionTitle: "¿Hubo un incidente en el turno?",
};

type FormInputs = {
  incidentComment: string;
};

const formShortName = "Incidentes";

interface Props {
  show?: boolean;
  onModalClose: (formShortName: string, isSuccess: boolean) => void;
}

const AddShiftIncidentsModal = ({ show, onModalClose }: Props) => {
  const [sendingData, setSendingData] = useState(false);
  const [loadingIncident, setLoadingIncident] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [incidentData, setIncidentData] = useState<
    IncidentResponse | undefined
  >(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const createNewIncident = useCreateNewIncidents();
  const getIncident = useDataIncidents();
  const { shiftId } = useUserInformation();

  useEffect(() => {
    const fetchIncident = async () => {
      setLoadingIncident(true);
      if (!show) return;
      const incident = await getIncident();
      if (incident) setIncidentData(incident);

      setLoadingIncident(false);
    };
    fetchIncident();
  }, [show]);

  if (!show) return null;

  const handleClose = () => {
    onModalClose(formShortName, false);
  };

  const onSubmit = async (data: FormInputs) => {
    setSendingData(true);
    try {
      await createNewIncident("1", {
        comment: data.incidentComment,
        shiftId,
      });
      onModalClose(formShortName, true);
      setErrorMessage(undefined);
    } catch (err) {
      console.error(err);
      setErrorMessage("Ya se ha ingresado un comentario en este turno");
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
          {incidentData && (
            <>
              <h4 className="text-2xl mb-1">{formTexts.subtitle}</h4>
              {loadingIncident ? (
                <div className="flex justify-center my-5">
                  <Spinner />
                </div>
              ) : (
                <div className="my-5 text-lg">
                  {incidentData ? (
                    <div className="flex items-center gap-5">
                      <p>
                        <span className="font-bold">Comentario: </span>
                        {incidentData.comment}
                      </p>
                      <p>
                        <span className="font-bold">Realizada el: </span>
                        {incidentData.createdAt.toLocaleString("es-CL", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm">
                      No se han realizado auditorías en este turno todavía
                    </p>
                  )}
                </div>
              )}
            </>
          )}
          {!incidentData && (
            <>
              <h4 className="text-center mt-5 text-xl text-aqcl-500 font-semibold">
                {formTexts.questionTitle}
              </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="w-full flex justify-between px-16 mt-5"></fieldset>
                <div className="mb-2 block mt-10">
                  <Label
                    htmlFor="incident-comment"
                    value="Comentario o Apreciación"
                  />
                </div>
                <Textarea
                  rows={4}
                  id="incident-comment"
                  placeholder="Ej: Hubo aplastamiento de extremidades al descargar un maxisaco..."
                  color="enterprise"
                  {...register("incidentComment", {
                    required: "Debes ingresar un comentario",
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
                {errors.incidentComment && (
                  <p className="text-red-500">
                    {errors.incidentComment.message}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-500 text-center my-5">
                    {errorMessage}
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
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddShiftIncidentsModal;
