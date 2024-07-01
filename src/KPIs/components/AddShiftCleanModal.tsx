import { Button, Label, Modal, Radio, Textarea } from "flowbite-react";
import { cleaningKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";
import { useForm } from "react-hook-form";
import useCreateNewCleanliness from "../hooks/cleaning/useCreateNewCleanliness";
import { useState } from "react";

const formTexts = {
  title: cleaningKPI.title,
  button: "Enviar Revisión",
  isAuditOk: "¿El lugar de trabajo se encuentra limpio al recibirlo?",
};

type FormInputs = {
  auditOptions: string;
  auditComment: string;
};

interface Props {
  shiftId: string;
  show?: boolean;
  onModalClose: () => void;
}

const AddShiftCleanModal = ({ shiftId, show, onModalClose }: Props) => {
  const [sendingData, setSendingData] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const createNewCleanliness = useCreateNewCleanliness();
  if (!show) return null;

  const handleClose = () => {
    onModalClose();
  };

  const onSubmit = async (data: FormInputs) => {
    setSendingData(true);
    try {
      // TODO: Unhardcode this LineID
      createNewCleanliness("1", {
        isDone: data.auditOptions === "SI",
        comment: data.auditComment,
        shiftId,
      });
      handleClose();
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="w-full flex justify-between px-16 mt-5">
              <legend className="text-center my-5 text-xl text-aqcl-500 font-semibold">
                {formTexts.isAuditOk}
              </legend>
              <div className="flex items-center gap-2">
                <Label htmlFor="no-option" className="uppercase text-xl">
                  NO
                </Label>
                <Radio
                  id="no-option"
                  {...register("auditOptions", {
                    required: {
                      value: true,
                      message: "Debes seleccionar una opción",
                    },
                  })}
                  name="audit-options"
                  value="NO"
                />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="yes-options" className="uppercase text-xl">
                  SI
                </Label>
                <Radio
                  id="yes-options"
                  {...register("auditOptions", {
                    required: {
                      value: true,
                      message: "Debes seleccionar una opción",
                    },
                  })}
                  name="audit-options"
                  value="SI"
                />
              </div>
            </fieldset>
            {errors.auditOptions && (
              <p className="text-center mt-3 text-red-500">
                {errors.auditOptions?.message}
              </p>
            )}
            <div className="mb-2 block mt-10">
              <Label htmlFor="audit-comment" value="Comentario o Apreciación" />
            </div>
            <Textarea
              {...register("auditComment", {
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
              rows={4}
              id="audit-comment"
              placeholder="Ej: El lugar de trabajo estaba limpio y ordenado..."
              color={errors.auditComment?.message ? "failure" : "enterprise"}
            />
            {errors.auditComment && (
              <p className="text-red-500">{errors.auditComment?.message}</p>
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
