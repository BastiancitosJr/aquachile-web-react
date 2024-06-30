import useAxios from "../../api/hooks/useAxios";
import useStorage from "../../common/hooks/useStorage";
import { GetShiftDto } from "../dtos/get-shift-dto";

interface CheckShiftResponse {
  isShiftOpen: boolean;
  shiftInformation?: GetShiftDto;
}

const shiftNotOpenPayload = {
  isShiftOpen: false,
  shiftInformation: undefined,
};

const useCheckShift = () => {
  const { shiftId, setShift } = useStorage();
  const { get } = useAxios();

  const isShiftOpen = async (): Promise<CheckShiftResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!shiftId) {
      return shiftNotOpenPayload;
    }

    try {
      const response: GetShiftDto = await get(`shift/${shiftId}`);
      return {
        isShiftOpen: true,
        shiftInformation: response,
      };
    } catch (err) {
      setShift("");
      return shiftNotOpenPayload;
    }
  };

  return isShiftOpen;
};

export default useCheckShift;
