import useAxios from "../../../api/hooks/useAxios";

const useUpdateMonthlyGoal = () => {
  const { put } = useAxios();

  const updateOne = async (id: number, form: { monthly_order: number }) => {
    await put(`monthly-pps/${id}`, form);
  };

  return updateOne;
};

export default useUpdateMonthlyGoal;
