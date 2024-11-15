import { captureException } from "@sentry/react";
import { create } from "zustand";

import { getUserInfo } from "@/common/store/UserSlice/api/getUserInfo.ts";

import { User } from "../../types/user.ts";
import { changeUserInfo } from "./api/changeUserInfo.ts";

interface UserState {
  isAuth: boolean;
  isLoading: boolean;
  setAuth: (isAuth: boolean) => void;
  user: User;
  setIsLoading: (isLoading: boolean) => void;
  getUserInfo: () => Promise<void>;
  changeUser: ({
    firstName,
    secondName,
  }: {
    firstName: string;
    secondName: string;
  }) => Promise<void>;
}

const useUserStore = create<UserState>((set, get) => ({
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
  changeUser: async ({ firstName, secondName }) => {
    const currentUser = get().user;
    try {
      if (
        currentUser.firstName === firstName &&
        currentUser.secondName === secondName
      ) {
        return;
      }

      set({
        user: {
          ...currentUser,
          firstName,
          secondName,
        },
      });

      await changeUserInfo(currentUser.userId, firstName, secondName);
    } catch (error) {
      set({
        user: currentUser,
      });
      captureException(error);
    } finally {
      await get().getUserInfo();
    }
  },
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

export const changeUserInfoSelector = (state: UserState) => state.changeUser;
