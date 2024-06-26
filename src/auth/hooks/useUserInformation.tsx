import useStorage from "../../common/hooks/useStorage";

const useUserInformation = () => {
  const { username, token } = useStorage();

  return {
    username,
    token,
  };
};

export default useUserInformation;
