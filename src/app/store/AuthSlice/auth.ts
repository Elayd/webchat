import { create } from "zustand";
import { fetchAuthStatus } from "./api/checkAuth";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  setAuth: (isAuth: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  checkAuth: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  isLoading: true,
  setAuth: (isAuth) => set({ isAuth }),
  setIsLoading: (isLoading) => set({ isLoading }),
  checkAuth: async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) throw new Error("No access token found");
      await fetchAuthStatus();
      set({ isAuth: true });
    } catch (error) {
      set({ isAuth: false });
      console.error("Failed to fetch auth status", error);
    } finally {
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
export const checkAuthSelector = (state: AuthState) => state.checkAuth;
