import { axiosInstance } from "@/axios";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../AuthWrapper/privateCheck/query";
import useAuthStore, { setAuthSelector } from "@/store/auth";
import { ITokenResponse } from "@/types";

export const OAuthPageCallback = () => {
  const called = useRef(false);
  const navigate = useNavigate();
  const { isSuccess } = useAuthCheck();
  const setAuth = useAuthStore(setAuthSelector);

  useEffect(() => {
    (async () => {
      if (isSuccess === false) {
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
      } else if (isSuccess === true) {
        navigate("/chat");
      }
    })();
  }, [isSuccess, navigate, setAuth]);
  return <></>;
};
