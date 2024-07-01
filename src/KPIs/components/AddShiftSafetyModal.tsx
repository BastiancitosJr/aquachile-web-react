import { Button, Label, Modal, Radio, Textarea } from "flowbite-react";
import { safetyKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";

const formTexts = {
  title: safetyKPI.title,
  button: "Enviar Observación",
  questionTitle: "¿Hubo una conversación de seguridad en el equipo?",
};

const formShortName = "Limpieza";

interface Props {
  show?: boolean;
  onModalClose: (formShortName: string, isSuccess: boolean) => void;
}

const AddShiftSafetyModal = ({ show, onModalClose }: Props) => {
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
              placeholder="Ej: Se realizó una observación de uso de casco..."
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
export default AddShiftSafetyModal;
