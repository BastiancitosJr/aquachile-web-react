import AddShiftAuditModal from "../../KPIs/components/AddShiftAuditModal";
import AddShiftCleanModal from "../../KPIs/components/AddShiftCleanModal";
import AddShiftIncidentsModal from "../../KPIs/components/AddShiftIncidentsModal";
import AddShiftProductivityModal from "../../KPIs/components/AddShiftProductivityModal";
import AddShiftSafetyModal from "../../KPIs/components/AddShiftSafetyModal";
import { getKPIsShowState } from "../utils/get-kpis-show-state";

interface Props {
  shiftId: string;
  formId: string | undefined;
  onModalClose: () => void;
}

const FormsManager = ({ shiftId, formId, onModalClose }: Props) => {
  //TODO: ELIMINE EL monthlyProgress porque no estaba siendo usado
  const { productivity, audit, cleaning, safety, incidents } =
    getKPIsShowState(formId);

  return (
    <>
      <AddShiftProductivityModal
        show={productivity}
        onModalClose={onModalClose}
      />
      <AddShiftAuditModal show={audit} onModalClose={onModalClose} />
      <AddShiftCleanModal
        shiftId={shiftId}
        show={cleaning}
        onModalClose={onModalClose}
      />
      <AddShiftSafetyModal show={safety} onModalClose={onModalClose} />
      <AddShiftIncidentsModal show={incidents} onModalClose={onModalClose} />
    </>
  );
};

export default FormsManager;
