import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ShiftStorage {
  shift: string;
  setShift: (newShift: string) => void;
}

interface AuthStorage {
  token: string;
  role: string;
  roleId: string;
  setAuthentication: (
    newToken: string,
    newRole: string,
    newRoleId: string
  ) => void;
  removeAuthentication: () => void;
}

type StorageState = AuthStorage & ShiftStorage;

const defaultState = {
  token: "",
  role: "",
  roleId: "",
  shift: "",
};

const useStorage = create<StorageState>()(
  persist(
    (set) => ({
      ...defaultState,
      setAuthentication: (newToken, newRole, newRoleId) =>
        set({ token: newToken, role: newRole, roleId: newRoleId }),
      removeAuthentication: () => set(defaultState),
      setShift: (newShift) => set({ shift: newShift }),
    }),
    {
      name: "aquachile-storage",
      partialize: (state) => ({
        token: state.token,
        role: state.role,
        roleId: state.roleId,
        shift: state.shift,
      }),
    }
  )
);

export default useStorage;
