import AddShiftAuditModal from "../../KPIs/components/AddShiftAuditModal";
import AddShiftCleanModal from "../../KPIs/components/AddShiftCleanModal";
import AddShiftIncidentsModal from "../../KPIs/components/AddShiftIncidentsModal";
import AddShiftProductivityModal from "../../KPIs/components/AddShiftProductivityModal";
import AddShiftSafetyModal from "../../KPIs/components/AddShiftSafetyModal";
import { getKPIsShowState } from "../utils/get-kpis-show-state";

interface Props {
  formId: string | undefined;
  onModalClose: () => void;
}

const FormsManager = ({ formId, onModalClose }: Props) => {
  const { productivity, audit, cleaning, safety, incidents, monthlyProgress } =
    getKPIsShowState(formId);

  return (
    <>
      <AddShiftProductivityModal
        show={productivity}
        onModalClose={onModalClose}
      />
      <AddShiftAuditModal show={audit} onModalClose={onModalClose} />
      <AddShiftCleanModal show={cleaning} onModalClose={onModalClose} />
      <AddShiftSafetyModal show={safety} onModalClose={onModalClose} />
      <AddShiftIncidentsModal show={incidents} onModalClose={onModalClose} />
    </>
  );
};

export default FormsManager;
