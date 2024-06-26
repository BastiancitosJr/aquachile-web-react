import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useRef } from "react";
import { productivityKPI } from "../../home/constants/kpi-data";

const formTexts = {
  title: productivityKPI.title,
  button: "Agregar Productividad",
};

interface Props {
  show?: boolean;
  onModalClose: () => void;
}

const AddShiftProductivityModal = ({ show, onModalClose }: Props) => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  if (!show) return null;

  const handleClose = () => {
    onModalClose();
  };

  return (
    <Modal
      show={show}
      size="md"
      popup
      onClose={handleClose}
      initialFocus={emailInputRef}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-2xl text-center font-medium text-gray-900 uppercase">
            {formTexts.title}
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="tons-produced" value="Toneladas Producidas" />
            </div>
            <TextInput
              id="tons-produced"
              ref={emailInputRef}
              placeholder="Ej: 250"
              type="number"
              color="enterprise"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="tons-packaged" value="Toneladas Envasadas" />
            </div>
            <TextInput
              id="tons-packaged"
              placeholder="Ej: 220"
              type="number"
              color="enterprise"
            />
          </div>
          <Button className="w-full" type="submit" color="enterprise">
            {formTexts.button}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddShiftProductivityModal;
