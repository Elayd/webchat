import { axiosInstance } from "@/axios";
import { useAuthCheck } from "@/components/router/privateCheck/query";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const OAuthPageCallback = () => {
  const called = useRef(false);
  const navigate = useNavigate();
  const { isSuccess } = useAuthCheck();

  useEffect(() => {
    (async () => {
      if (isSuccess === false) {
        try {
          if (called.current) return;
          called.current = true;
          await axiosInstance.get(`/auth/token${window.location.search}`);
          navigate("/chat");
        } catch (err) {
          console.error(err);
        }
      } else if (isSuccess === true) {
        navigate("/chat");
      }
    })();
  }, [isSuccess, navigate]);
  return <></>;
};
