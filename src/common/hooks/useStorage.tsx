import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StorageState {
  token?: string;
  role?: string;
  roleId?: string;
  setAuthentication: (
    newToken: string,
    newRole: string,
    newRoleId: string
  ) => void;
  removeAuthentication: () => void;
}

const defaultState = {
  token: undefined,
  role: undefined,
  roleId: undefined,
};

const useStorage = create<StorageState>()(
  persist(
    (set) => ({
      ...defaultState,
      setAuthentication: (newToken, newRole, newRoleId) =>
        set({ token: newToken, role: newRole, roleId: newRoleId }),
      removeAuthentication: () => set(defaultState),
    }),
    {
      name: "aquachile-storage",
      partialize: (state) => ({
        token: state.token,
        role: state.role,
        roleId: state.roleId,
      }),
    }
  )
);

export default useStorage;
