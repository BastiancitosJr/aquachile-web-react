import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetIncidentsResponseDto } from "../../dtos/incidents/get-incidents-response-dto";

const useDataIncidents = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getIncidentsAudit = async (): Promise<GetIncidentsResponseDto> => {
    try {
      const audit: GetIncidentsResponseDto = await get(
        `securities-shift/${shiftId}`
      );
      return audit;
    } catch (err) {
      return {
        id: 0,
        comment: "",
        created_at: new Date(),
        updated_at: new Date(),
      };
    }
  };

  return getIncidentsAudit;
};

export default useDataIncidents;
