import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetallAuditResponseDto } from "../../dtos/cleaning/get-all-audit-response-dto";
import { ObservationResponse } from "../../models/safety/observation-response";
import { mapGetallAuditResponseDtoToAuditResponse } from "../../services/kpis-mapper";

const useListAllAudits = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getAll = async (): Promise<ObservationResponse[]> => {
    try {
      const allObservations: GetallAuditResponseDto[] = await get(
        `cleanliness/${shiftId}`
      );
      const mappedObservations =
        mapGetallAuditResponseDtoToAuditResponse(allObservations);
      return mappedObservations;
    } catch (err) {
      return [];
    }
  };
  return getAll;
};

export default useListAllAudits;
