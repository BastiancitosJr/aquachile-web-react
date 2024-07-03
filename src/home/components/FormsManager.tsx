import { toast, ToastOptions } from "react-toastify";
import AddShiftAuditModal from "../../KPIs/components/AddShiftAuditModal";
import AddShiftCleanModal from "../../KPIs/components/AddShiftCleanModal";
import AddShiftIncidentsModal from "../../KPIs/components/AddShiftIncidentsModal";
import AddShiftProductivityModal from "../../KPIs/components/AddShiftProductivityModal";
import AddShiftSafetyModal from "../../KPIs/components/AddShiftSafetyModal";
import { getKPIsShowState } from "../utils/get-kpis-show-state";
import AddMonthlyExpectedTons from "../../KPIs/components/AddMonthlyExpectedTons";

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
  formId: string | undefined;
  onModalClose: () => void;
}

const FormsManager = ({ formId, onModalClose }: Props) => {
  const { productivity, audit, cleaning, safety, incidents, monthlyProgress } =
    getKPIsShowState(formId);

  const onClose = (formShortName: string, isSuccess: boolean) => {
    onModalClose();

    if (isSuccess) {
      toast.success(`${formShortName} agregado correctamente`, toastifyPayload);
    }
  };

  return (
    <>
      <AddShiftProductivityModal show={productivity} onModalClose={onClose} />
      <AddShiftAuditModal show={audit} onModalClose={onClose} />
      <AddShiftCleanModal show={cleaning} onModalClose={onClose} />
      <AddShiftSafetyModal show={safety} onModalClose={onClose} />
      <AddShiftIncidentsModal show={incidents} onModalClose={onClose} />
      <AddMonthlyExpectedTons show={monthlyProgress} onModalClose={onClose} />
    </>
  );
};

export default FormsManager;
