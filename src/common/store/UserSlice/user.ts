import { captureException } from "@sentry/react";
import { create } from "zustand";

import { getUserInfo } from "@/common/store/UserSlice/api/getUserInfo.ts";

import {User} from '../../types/user.ts'

interface UserState {
  isAuth: boolean;
  isLoading: boolean;
  setAuth: (isAuth: boolean) => void;
  user: User;
  setIsLoading: (isLoading: boolean) => void;
  getUserInfo: () => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  isAuth: false,
  isLoading: true,
  user: {
    userId: "",
    email: "",
    firstName: "",
    secondName: "",
    fullName: "",
    picture: "",
  },
  setAuth: (isAuth) => set({ isAuth }),
  setIsLoading: (isLoading) => set({ isLoading }),

  getUserInfo: async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) return;
      const userId = localStorage.getItem("userId");
      if (!userId) return;
      const user = await getUserInfo(userId);
      set({ user });
      set({ isAuth: true });
    } catch (error) {
      set({ isAuth: false });
      captureException(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUserStore;

export const isAuthSelector = (state: UserState) => state.isAuth;
export const setAuthSelector = (state: UserState) => state.setAuth;
export const isLoadingGetUserInfoSelector = (state: UserState) =>
  state.isLoading;
export const getUserInfoSelector = (state: UserState) => state.getUserInfo;
export const userInfoSelector = (state: UserState) => state.user;
