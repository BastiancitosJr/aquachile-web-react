import { Button, Label, Modal, Radio, Textarea } from "flowbite-react";
import { auditKPI } from "../../home/constants/kpi-data";
import Divider from "../../common/components/Divider";
import useCreateNewAudit from "../hooks/quality/useCreateNewAudit";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useListAllAudits from "../hooks/quality/useListAllAudits";
import useUserInformation from "../../auth/hooks/useUserInformation";

const formTexts = {
  title: auditKPI.title,
  subtitle: "Agregar nueva auditoría",
  button: "Agregar Auditoría",
  isAuditOk: "¿Cumple con la calidad de etiquetado?",
};

type FormInputs = {
  auditOptions: string;
  auditComment: string;
};

const formShortName = "Auditoría";

interface Props {
  show?: boolean;
  onModalClose: (formShortName: string, isSuccess: boolean) => void;
}

const AddShiftAuditModal = ({ show, onModalClose }: Props) => {
  const [sendingData, setSendingData] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const { shiftId } = useUserInformation();
  const createNewAudit = useCreateNewAudit();
  const listAllAudits = useListAllAudits();

  useEffect(() => {
    const fetchAudits = async () => {
      if (!show) return null;

      try {
        const audits = await listAllAudits();
        console.log(audits);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAudits();
  }, [show]);

  if (!show) return null;

  const handleClose = () => {
    onModalClose(formShortName, false);
  };

  const onSubmit = async (data: FormInputs) => {
    setSendingData(true);
    try {
      createNewAudit("1", {
        isDone: data.auditOptions === "SI",
        comment: data.auditComment,
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-2xl mb-1">{formTexts.subtitle}</h3>
            <fieldset className="w-full flex justify-between px-16 mt-5">
              <legend className="text-center my-5 text-xl text-aqcl-500 font-semibold">
                {formTexts.isAuditOk}
              </legend>
              <div className="flex items-center gap-2">
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
                <Label htmlFor="no-option" className="uppercase text-xl">
                  NO
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="yes-options"
                  {...register("auditOptions", {
                    required: {
                      value: true,
                      message: "Debes seleccionar una opción",
                    },
                  })}
                  value="SI"
                />
                <Label htmlFor="yes-options" className="uppercase text-xl">
                  SI
                </Label>
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
              rows={4}
              id="audit-comment"
              placeholder="Ej: Etiquetado en excelente estado..."
              color="enterprise"
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
export default AddShiftAuditModal;
