import useAxios from "../../../api/hooks/useAxios";
import { CreateProductivityDto } from "../../dtos/productivity/create-productivity-dto";
import { mapCreateProductivityDtoToCreateProductivityAPIDto } from "../../services/kpis-mapper";

const useCreateNewProductivity = () => {
  const { post } = useAxios();

  const createNew = async (lineId: string, form: CreateProductivityDto) => {
    const mappedBody = mapCreateProductivityDtoToCreateProductivityAPIDto(form);
    await post(`productivities/${lineId}`, mappedBody);
  };

  return createNew;
};

export default useCreateNewProductivity;
