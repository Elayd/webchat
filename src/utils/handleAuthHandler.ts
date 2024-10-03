import { ITokenResponse } from "@/types";
import { NavigateFunction } from "react-router-dom";

export const handleAuthHandler = (
  tokens: ITokenResponse,
  setAuth: (auth: boolean) => void,
  navigate: NavigateFunction
) => {
  const { accessToken, refreshToken } = tokens;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  setAuth(true);
  navigate("/chat");
};
