import useStorage from "../../common/hooks/useStorage";

const useUserInformation = () => {
  const { token, role, roleId } = useStorage();

  return {
    token,
    role,
    roleId,
  };
};

export default useUserInformation;
