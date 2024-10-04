import { fetchAuthStatus } from "@/axios/checkAuth";
import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  isInit: boolean;
  setAuth: (isAuth: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  checkAuth: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  isInit: false,
  isLoading: false,
  setAuth: (isAuth) => set({ isAuth }),
  setIsLoading: (isLoading) => set({ isLoading }),
  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) throw new Error("No access token found");
      await fetchAuthStatus();
      set({ isAuth: true });
    } catch (error) {
      set({ isAuth: false });
      console.error("Failed to fetch auth status", error);
    } finally {
      set({ isInit: true });
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;

export const isAuthSelector = (state: AuthState) => state.isAuth;
export const setAuthSelector = (state: AuthState) => state.setAuth;
export const isLoadingCheckAuthSelector = (state: AuthState) => state.isLoading;
export const setIsLoadingCheckAuthSelector = (state: AuthState) =>
  state.setIsLoading;
