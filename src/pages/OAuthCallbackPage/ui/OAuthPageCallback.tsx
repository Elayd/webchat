import { axiosInstance } from "@/shared/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore, {
  getUserInfoSelector,
  isAuthSelector,
} from "@/app/store/UserSlice/user";
import { ITokenResponse } from "@/shared/types/tokens";
import { captureException } from "@sentry/react";

const OAuthPageCallback = () => {
  const navigate = useNavigate();
  const getUserInfo = useUserStore(getUserInfoSelector);
  const isAuth = useUserStore(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      navigate("/chat");
      return;
    }

    axiosInstance
      .get<ITokenResponse>(`/v1/oauth/${window.location.search}`)
      .then((response) => {
        const { accessToken, refreshToken, userId } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("userId", userId);
      })
      .then(() => {
        return getUserInfo();
      })
      .then(() => {
        navigate("/chat");
      })
      .catch((error) => {
        captureException(error);
      });
  }, [isAuth, navigate, getUserInfo]);
  return <></>;
};

export default OAuthPageCallback;
