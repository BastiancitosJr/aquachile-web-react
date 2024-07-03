import useAxios from "../../../api/hooks/useAxios";
import { CreateIncidentsDtoToCreateIncidentsAPIDto } from "../../../home/services/home-mapper";
import { CreateIncidentsDto } from "../../dtos/incidents/create-incidents-dto";

const useCreateNewIncidents = () => {
  const { post } = useAxios();

  const createNew = async (lineId: string, form: CreateIncidentsDto) => {
    const mappedBody = CreateIncidentsDtoToCreateIncidentsAPIDto(form);
    await post(`securities/${lineId}`, mappedBody);
  };

  return createNew;
};

export default useCreateNewIncidents;
