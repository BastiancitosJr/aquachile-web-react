import useAxios from "../../../api/hooks/useAxios";
import { CreateMonthlyGoalDto } from "../../dtos/monthly-goal/create-monthly-goal-dto";
import { mapCreateMonthlyGoalDtoToCreateMonthlyGoalAPIDto } from "../../services/kpis-mapper";

const useCreateNewMonthlyGoal = () => {
  const { post } = useAxios();

  const createNew = async (lineId: string, form: CreateMonthlyGoalDto) => {
    const mappedBody = mapCreateMonthlyGoalDtoToCreateMonthlyGoalAPIDto(form);
    await post(`monthly-pps/${lineId}`, mappedBody);
  };

  return createNew;
};

export default useCreateNewMonthlyGoal;
