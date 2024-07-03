import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetUniqueAuditResponseDto } from "../../dtos/cleaning/get-unique-audit-response-dto";
import { ObservationResponse } from "../../models/safety/observation-response";
import { mapUniqueCleaningResponseDtoToAuditResponse } from "../../services/kpis-mapper";

const useListAllAudits = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getCleaning = async (): Promise<ObservationResponse> => {
    try {
      const uniqueAudit: GetUniqueAuditResponseDto = await get(
        `cleanlinesses-shift/${shiftId}`
      );
      const mappedAudits =
        mapUniqueCleaningResponseDtoToAuditResponse(uniqueAudit);

      return mappedAudits;
    } catch (err) {
      return {
        id: 0,
        isDone: false,
        comment: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  };

  return getCleaning;
};

export default useListAllAudits;
