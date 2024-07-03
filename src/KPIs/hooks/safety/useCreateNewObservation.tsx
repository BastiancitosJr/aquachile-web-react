import useAxios from "../../../api/hooks/useAxios";
import { CreateObservationDto } from "../../dtos/safety/create-observation-dto";
import { mapCreateObservationDtoToCreateObservationAPIDto } from "../../services/kpis-mapper";

const useCreateNewObservation = () => {
  const { post } = useAxios();

  const createNew = async (lineId: string, form: CreateObservationDto) => {
    const mappedBody = mapCreateObservationDtoToCreateObservationAPIDto(form);
    await post(`peer-observations/${lineId}`, mappedBody);
  };

  return createNew;
};

export default useCreateNewObservation;
