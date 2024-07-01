import { toast, ToastContainer, ToastOptions } from "react-toastify";
import AddShiftAuditModal from "../../KPIs/components/AddShiftAuditModal";
import AddShiftCleanModal from "../../KPIs/components/AddShiftCleanModal";
import AddShiftIncidentsModal from "../../KPIs/components/AddShiftIncidentsModal";
import AddShiftProductivityModal from "../../KPIs/components/AddShiftProductivityModal";
import AddShiftSafetyModal from "../../KPIs/components/AddShiftSafetyModal";
import { getKPIsShowState } from "../utils/get-kpis-show-state";

const toastifyPayload: ToastOptions = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

interface Props {
  shiftId: string;
  formId: string | undefined;
  onModalClose: () => void;
}

const FormsManager = ({ shiftId, formId, onModalClose }: Props) => {
  //TODO: ELIMINE EL monthlyProgress porque no estaba siendo usado
  const { productivity, audit, cleaning, safety, incidents } =
    getKPIsShowState(formId);

  const onClose = (formShortName: string, isSuccess: boolean) => {
    onModalClose();

    if (isSuccess) {
      toast.success(`${formShortName} agregado correctamente`, toastifyPayload);
    }
  };

  return (
    <>
      <ToastContainer />
      <AddShiftProductivityModal show={productivity} onModalClose={onClose} />
      <AddShiftAuditModal show={audit} onModalClose={onClose} />
      <AddShiftCleanModal
        shiftId={shiftId}
        show={cleaning}
        onModalClose={onClose}
      />
      <AddShiftSafetyModal show={safety} onModalClose={onClose} />
      <AddShiftIncidentsModal show={incidents} onModalClose={onClose} />
    </>
  );
};

export default FormsManager;
