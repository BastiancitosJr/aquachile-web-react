import useAxios from "../../../api/hooks/useAxios";

const useCreateNewIncidents = () => {
  const { post } = useAxios();

  const createNew = async (lineId: string, form: CreateIncidentsDto) => {
    const mappedBody = CreateIncidentsDtoToCreateIncidentsAPIDto(form);
    await post(`incidents/${lineId}`, mappedBody);
  };

  return createNew;
};

export default useCreateNewIncidents;
