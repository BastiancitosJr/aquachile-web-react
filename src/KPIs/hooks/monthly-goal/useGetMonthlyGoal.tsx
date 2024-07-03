import useAxios from "../../../api/hooks/useAxios";
import useUserInformation from "../../../auth/hooks/useUserInformation";
import { MonthlyGoalResponseDto } from "../../dtos/monthly-goal/get-monthly-goal-response-dto";
import { MonthlyGoal } from "../../models/monthly-goal/monthly-goal-response";
import { mapMonthlyGoalResponseDtoToMonthlyGoal } from "../../services/kpis-mapper";

const useGetMonthlyGoal = () => {
  const { get } = useAxios();
  const { shiftId } = useUserInformation();
  const getCleaningAudit = async (): Promise<MonthlyGoal | undefined> => {
    try {
      const response: MonthlyGoalResponseDto[] = await get(
        `monthly-pps-shift/${shiftId}`
      );
      const mappedData = mapMonthlyGoalResponseDtoToMonthlyGoal(
        response[response.length - 1]
      );

      return mappedData;
    } catch {
      return undefined;
    }
  };

  return getCleaningAudit;
};

export default useGetMonthlyGoal;
