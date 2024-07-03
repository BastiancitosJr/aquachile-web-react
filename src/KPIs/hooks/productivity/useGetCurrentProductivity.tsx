import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetOneProductivityResponseDto } from "../../dtos/productivity/get-one-productivity-response-dto";
import { ProductivityResponse } from "../../models/productivity/productivity-response";
import { mapGetOneProductivityResponseDtoToProductivityResponse } from "../../services/kpis-mapper";

const useGetCurrentProductivity = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getOne = async (): Promise<ProductivityResponse | undefined> => {
    try {
      const allAudits: GetOneProductivityResponseDto = await get(
        `productivities-shift/${shiftId}`
      );
      const mappedAudits =
        mapGetOneProductivityResponseDtoToProductivityResponse(allAudits);

      return mappedAudits;
    } catch (err) {
      return undefined;
    }
  };

  return getOne;
};

export default useGetCurrentProductivity;
