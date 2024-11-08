import {useNavigate} from "react-router-dom";
import useUserStore, {getUserInfoSelector, isAuthSelector} from "@/common/store/UserSlice/user.ts";
import {useEffect} from "react";
import {captureException} from "@sentry/react";
import {exchangeTokenApi} from "../api/exchangeToken.ts";


const OAuthPageCallback = () => {
  const navigate = useNavigate();
  const getUserInfo = useUserStore(getUserInfoSelector);
  const isAuth = useUserStore(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      navigate("/chat");
      return;
    }

    exchangeTokenApi().then((response) => {
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
      .catch((error: unknown) => {
        captureException(error);
      });
  }, [isAuth, navigate, getUserInfo]);
  return <></>;
};

export default OAuthPageCallback;
