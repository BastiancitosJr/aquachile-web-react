import useAxios from "../../../api/hooks/useAxios";
import { CreateCleaningDtoToCreateCleaningAPIDto } from "../../../home/services/home-mapper";
import { CreateCleaningDto } from "../../dtos/cleaning/create-cleaning-dto";

const useCreateNewCleanliness = () => {
  const { post } = useAxios();

  const createNew = async (lineId: string, form: CreateCleaningDto) => {
    const mappedBody = CreateCleaningDtoToCreateCleaningAPIDto(form);
    const response = await post(`cleanlinesses/${lineId}`, mappedBody);
  };

  return createNew;
};

export default useCreateNewCleanliness;
