import useStorage from "../../common/hooks/useStorage";

const useUserInformation = () => {
  const { username } = useStorage();

  return {
    username,
  };
};

export default useUserInformation;
