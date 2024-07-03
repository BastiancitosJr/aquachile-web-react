import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetIncidentsResponseDto } from "../../dtos/incidents/get-incidents-response-dto";
import { IncidentResponse } from "../../models/incidents/incident-response";
import { mapGetIncidentsResponseDtoToIncidentResponse } from "../../services/kpis-mapper";

const useDataIncidents = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getIncidentsAudit = async (): Promise<IncidentResponse | undefined> => {
    try {
      const audit: GetIncidentsResponseDto = await get(
        `securities-shift/${shiftId}`
      );
      const mappedData = mapGetIncidentsResponseDtoToIncidentResponse(audit);

      return mappedData;
    } catch {
      return undefined;
    }
  };

  return getIncidentsAudit;
};

export default useDataIncidents;
