import AddShiftAuditModal from "../../KPIs/components/AddShiftAuditModal";
import AddShiftCleanModal from "../../KPIs/components/AddShiftCleanModal";
import AddShiftProductivityModal from "../../KPIs/components/AddShiftProductivityModal";
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
    </>
  );
};

export default FormsManager;
