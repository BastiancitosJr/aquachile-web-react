import { Button, Label, Modal, Radio, Textarea } from "flowbite-react";
import { incidentsKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";

const formTexts = {
  title: incidentsKPI.title,
  button: "Enviar Incidente",
  questionTitle: "¿Hubo un incidente en el turno?",
};

const formShortName = "Incidentes";

interface Props {
  show?: boolean;
  onModalClose: (formShortName: string, isSuccess: boolean) => void;
}

const AddShiftIncidentsModal = ({ show, onModalClose }: Props) => {
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
              <div className="flex items-center gap-2">
                <Radio id="no-option" name="audit-options" value="NO" />
                <Label htmlFor="no-option" className="uppercase text-xl">
                  NO
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="yes-options"
                  name="audit-options"
                  value="SI"
                  defaultChecked
                />
                <Label htmlFor="yes-options" className="uppercase text-xl">
                  SI
                </Label>
              </div>
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
