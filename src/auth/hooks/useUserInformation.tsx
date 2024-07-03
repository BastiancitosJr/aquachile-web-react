import useStorage from "../../common/hooks/useStorage";

const useUserInformation = () => {
  const { token, role, roleId, shiftId } = useStorage();

  return {
    token,
    role,
    roleId,
    shiftId,
  };
};

export default useUserInformation;
