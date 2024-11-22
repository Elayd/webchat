import { captureException } from "@sentry/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useUserStore, {
  getUserInfoSelector,
  isAuthSelector,
} from "@/common/store/UserSlice/user.ts";

import { exchangeTokenApi } from "../api/exchangeToken.ts";

const OAuthPageCallback = () => {
  const navigate = useNavigate();
  const getUserInfo = useUserStore(getUserInfoSelector);
  const isAuth = useUserStore(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      navigate("/chat");
      return;
    }

    const id = toast.loading("Loading user info...", {
      position: "top-center",
    });
    exchangeTokenApi()
      .then((response) => {
        const { accessToken, refreshToken, userId } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("userId", userId);
      })
      .then(() => {
        getUserInfo();
      })
      .then(() => {
        toast.update(id, {
          render: "Successfully logged in",
          type: "success",
          isLoading: false,
          autoClose: 1000,
          position: "top-center",
        });
        navigate("/chat");
      })
      .catch((error: unknown) => {
        captureException(error);
      });
  }, [isAuth, navigate, getUserInfo]);
  return <></>;
};

export default OAuthPageCallback;
