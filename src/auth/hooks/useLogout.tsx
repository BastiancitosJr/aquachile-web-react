import useStorage from "../../common/hooks/useStorage";

const useLogout = () => {
  const { setToken, setUsername } = useStorage();

  const logout = () => {
    setToken("");
    setUsername("Default");
  };

  return {
    logout,
  };
};

export default useLogout;
