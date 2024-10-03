import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  setAuth: (isAuth: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  setAuth: (isAuth) => set({ isAuth }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useAuthStore;

export const isAuthSelector = (state: AuthState) => state.isAuth;
export const setAuthSelector = (state: AuthState) => state.setAuth;
export const isLoadingCheckAuthSelector = (state: AuthState) => state.isLoading;
export const setIsLoadingCheckAuthSelector = (state: AuthState) =>
  state.setIsLoading;
