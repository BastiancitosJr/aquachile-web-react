import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetallObservationResponseDto } from "../../dtos/safety/get-all-observation-response-dto";
import { ObservationResponse } from "../../models/safety/observation-response";
import { mapGetallObservationResponseDtoToAuditResponse } from "../../services/kpis-mapper";

const useListAllObservations = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getAll = async (): Promise<ObservationResponse[]> => {
    try {
      const allObservations: GetallObservationResponseDto[] = await get(
        `peer-observations-shift/${shiftId}`
      );
      const mappedObservations =
        mapGetallObservationResponseDtoToAuditResponse(allObservations);

      return mappedObservations;
    } catch (err) {
      return [];
    }
  };

  return getAll;
};

export default useListAllObservations;
