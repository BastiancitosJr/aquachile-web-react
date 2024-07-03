import useAxios from "../../api/hooks/useAxios";
import useStorage from "../../common/hooks/useStorage";

const useCloseShift = () => {
  const { setShift } = useStorage();
  const { post } = useAxios();

  const closeShift = async () => {
    try {
      const response = await post("shifts/close");
      console.log(response);
      setShift("");
    } catch (err) {}
  };

  return closeShift;
};

export default useCloseShift;
