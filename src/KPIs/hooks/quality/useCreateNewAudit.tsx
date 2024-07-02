import useAxios from "../../../api/hooks/useAxios";
import { CreateQualityDto } from "../../dtos/quality/create-quality-dto";
import { CreateQualityToCreateCleaningAPIDto } from "../../../home/services/home-mapper";

const useCreateNewAudit = () => {
  const { post } = useAxios();

  const createNew = async (lineId: string, form: CreateQualityDto) => {
    const mappedBody = CreateQualityToCreateCleaningAPIDto(form);
    const response = await post(`labeling-qualities/${lineId}`, mappedBody);
  };

  return createNew;
};

export default useCreateNewAudit;
