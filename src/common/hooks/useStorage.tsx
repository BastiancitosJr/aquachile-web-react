import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StorageState {
  token?: string;
  username?: string;
  setToken: (newToken: string) => void;
  setUsername: (newUsername: string) => void;
  removeToken: () => void;
}

const defaultState = {
  token: undefined,
  role: -1,
  username: "Desconocid@",
  workerRuts: [],
};

const useStorage = create<StorageState>()(
  persist(
    (set) => ({
      ...defaultState,
      setToken: (newToken: string) => set({ token: newToken }),
      setUsername: (newUsername: string) => set({ username: newUsername }),
      removeToken: () => set({ token: undefined }),
    }),
    {
      name: "storage",
      partialize: (state) => ({
        token: state.token,
        username: state.username,
      }),
    }
  )
);

export default useStorage;
