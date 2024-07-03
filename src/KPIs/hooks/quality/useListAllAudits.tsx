import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetUniqueAuditResponseDto } from "../../dtos/cleaning/get-unique-audit-response-dto";
import { ObservationResponse } from "../../models/safety/observation-response";
import { mapUniqueCleaningResponseDtoToAuditResponse } from "../../services/kpis-mapper";

const useListAllAudits = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getCleaningAudit = async (): Promise<ObservationResponse> => {
    try {
      const uniqueAudit: GetUniqueAuditResponseDto = await get(
        `cleanlinesses-shift/${shiftId}`
      );
      console.log("Raw audit data:", uniqueAudit); // Verifica los datos crudos aquí
      const mappedAudit =
        mapUniqueCleaningResponseDtoToAuditResponse(uniqueAudit);
      console.log("Mapped audit data:", mappedAudit); // Verifica los datos mapeados aquí
      return mappedAudit;
    } catch (err) {
      console.error("Error fetching audit:", err);
      throw err;
    }
  };

  return getCleaningAudit;

  return getCleaningAudit;
};

export default useListAllAudits;
