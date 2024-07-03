import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetallAuditResponseDto } from "../../dtos/cleaning/get-all-audit-response-dto";
import { AuditResponse } from "../../models/cleaning/audit-response";
import { mapGetallAuditResponseDtoToAuditResponse } from "../../services/kpis-mapper";

const useListAllAudits = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getAll = async (): Promise<AuditResponse[]> => {
    try {
      const allAudits: GetallAuditResponseDto[] = await get(
        `labeling-qualities-shift/${shiftId}`
      );
      const mappedAudits = mapGetallAuditResponseDtoToAuditResponse(allAudits);

      return mappedAudits;
    } catch (err) {
      return [];
    }
  };

  return getAll;
};

export default useListAllAudits;
