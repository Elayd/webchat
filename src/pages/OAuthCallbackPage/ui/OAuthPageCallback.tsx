import { axiosInstance } from "@/shared/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore, {
  isAuthSelector,
  setAuthSelector,
} from "@/app/store/AuthSlice/auth";
import { ITokenResponse } from "@/shared/types/tokens";

const OAuthPageCallback = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore(setAuthSelector);
  const isAuth = useAuthStore(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      navigate("/chat");
      return;
    }

    axiosInstance
      .get<ITokenResponse>(`/oauth/token${window.location.search}`)
      .then((response) => {
        const tokens = response.data;
        const { accessToken, refreshToken } = tokens;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setAuth(true);
        navigate("/chat");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isAuth, navigate, setAuth]);
  return <></>;
};

export default OAuthPageCallback;
