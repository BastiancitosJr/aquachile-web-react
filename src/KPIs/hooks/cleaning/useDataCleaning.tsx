import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetUniqueAuditResponseDto } from "../../dtos/cleaning/get-unique-audit-response-dto";
import { CleaningResponse } from "../../models/cleaning/cleaning-response";
import { mapGetUniqueAuditResponseDtoToCleaningResponse } from "../../services/kpis-mapper";

const useDataCleaning = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getCleaningAudit = async (): Promise<CleaningResponse | undefined> => {
    try {
      const response: GetUniqueAuditResponseDto = await get(
        `cleanlinesses-shift/${shiftId}`
      );
      const mappedData =
        mapGetUniqueAuditResponseDtoToCleaningResponse(response);

      return mappedData;
    } catch (err) {
      return undefined;
    }
  };

  return getCleaningAudit;
};

export default useDataCleaning;
