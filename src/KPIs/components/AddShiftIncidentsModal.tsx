import { Button, Label, Modal, Textarea } from "flowbite-react";
import { incidentsKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";
import { GetIncidentsResponseDto } from "../dtos/incidents/get-incidents-response-dto";
import useUserInformation from "../../auth/hooks/useUserInformation";

const formTexts = {
  title: incidentsKPI.title,
  subtitle: "Incidentes registrados",
  subtitleTwo: "Agregar nuevo incidente",
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
  const [loadingObservation, setLoadingObservation] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [observationData, setObservationData] =
    useState<GetIncidentsResponseDto> | (null > null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  // const createNewIncident = useCreateNewIncident();
  // const getIncidents = useDataIncidents();
  // const { shiftId } = useUserInformation();

  if (!show) return null;

  const handleClose = () => {
    onModalClose(formShortName, false);
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
          <form>
            <fieldset className="w-full flex justify-between px-16 mt-5">
              <legend className="text-center my-5 text-xl text-aqcl-500 font-semibold">
                {formTexts.questionTitle}
              </legend>
            </fieldset>
            <div className="mb-2 block mt-10">
              <Label htmlFor="audit-comment" value="Comentario o Apreciación" />
            </div>
            <Textarea
              rows={4}
              id="audit-comment"
              placeholder="Ej: Hubo aplastamiento de extremidades al descargar un maxisaco..."
              color="enterprise"
            />
            <Button className="w-full mt-5" type="submit" color="enterprise">
              {formTexts.button}
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default AddShiftIncidentsModal;
