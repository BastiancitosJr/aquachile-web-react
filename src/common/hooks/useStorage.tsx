import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ShiftStorage {
  shiftId: string;
  setShift: (newShiftId: string) => void;
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
  shiftId: "",
};

const useStorage = create<StorageState>()(
  persist(
    (set) => ({
      ...defaultState,
      setAuthentication: (newToken, newRole, newRoleId) =>
        set({ token: newToken, role: newRole, roleId: newRoleId }),
      removeAuthentication: () => set(defaultState),
      setShift: (newShiftId) => set({ shiftId: newShiftId }),
    }),
    {
      name: "aquachile-storage",
      partialize: (state) => ({
        token: state.token,
        role: state.role,
        roleId: state.roleId,
        shiftId: state.shiftId,
      }),
    }
  )
);

export default useStorage;
