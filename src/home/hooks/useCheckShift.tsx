import useAxios from "../../api/hooks/useAxios";
import useStorage from "../../common/hooks/useStorage";
import { GetShiftDto } from "../dtos/get-shift-dto";
import { ShiftInformation } from "../models/shift-information";
import { mapGetShiftDtoToShiftInformation } from "../services/home-mapper";

interface CheckShiftResponse {
  isShiftOpen: boolean;
  shiftInformation?: ShiftInformation;
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
      const response: GetShiftDto = await get(`shifts/${shiftId}`);
      const mappedShift = mapGetShiftDtoToShiftInformation(response);

      return {
        isShiftOpen: true,
        shiftInformation: mappedShift,
      };
    } catch (err) {
      setShift("");
      return shiftNotOpenPayload;
    }
  };

  return isShiftOpen;
};

export default useCheckShift;
