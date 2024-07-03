import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { GetUniqueAuditResponseDto } from "../../dtos/cleaning/get-unique-audit-response-dto";

const useDataCleaning = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();

  const getCleaningAudit = async (): Promise<GetUniqueAuditResponseDto> => {
    try {
      const audit: GetUniqueAuditResponseDto = await get(
        `cleanlinesses-shift/${shiftId}`
      );
      console.log("Desde el hook", audit);
      return audit;
    } catch (err) {
      return {
        id: 0,
        is_done: false,
        comment: "",
        created_at: new Date(),
        updated_at: new Date(),
      };
    }
  };

  return getCleaningAudit;
};

export default useDataCleaning;
