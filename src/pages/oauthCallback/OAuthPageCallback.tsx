import { axiosInstance } from "@/axios";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore, { isAuthSelector, setAuthSelector } from "@/store/auth";
import { ITokenResponse } from "@/types";

export const OAuthPageCallback = () => {
  const called = useRef(false);
  const navigate = useNavigate();
  const setAuth = useAuthStore(setAuthSelector);
  const isAuth = useAuthStore(isAuthSelector);

  useEffect(() => {
    (async () => {
      if (isAuth === false) {
        try {
          if (called.current) return;
          called.current = true;
          const response = await axiosInstance.get<ITokenResponse>(
            `/oauth/token${window.location.search}`
          );
          const tokens = response.data;
          const { accessToken, refreshToken } = tokens;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          setAuth(true);
          navigate("/chat");
        } catch (err) {
          console.error(err);
        }
      } else if (isAuth === true) {
        navigate("/chat");
      }
    })();
  }, [navigate, setAuth, isAuth]);
  return <></>;
};
