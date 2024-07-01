import useAxios from "../../api/hooks/useAxios";
import useStorage from "../../common/hooks/useStorage";
import { CreateShiftResponseDto } from "../dtos/create-shift-response-dto";
import { ShiftInformation } from "../models/shift-information";
import { createShiftResponseDto } from "../services/home-mapper";

interface OpenShiftResponse {
  wasCreated: boolean;
  shiftInformation?: ShiftInformation;
}

const useOpenShift = () => {
  const { setShift } = useStorage();
  const { post } = useAxios();

  const initializeShift = async (): Promise<OpenShiftResponse> => {
    try {
      const response: CreateShiftResponseDto = await post("shifts/open");
      const mappedResponse = createShiftResponseDto(response);
      setShift(mappedResponse.id);

      return {
        wasCreated: true,
        shiftInformation: mappedResponse,
      };
    } catch (err) {
      setShift("");
      return {
        wasCreated: false,
        shiftInformation: undefined,
      };
    }
  };

  return initializeShift;
};

export default useOpenShift;
