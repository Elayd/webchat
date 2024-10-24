import { handleServerError } from "@/shared/utils/errorCodesHandler";
import { AuthForm } from "@/widgets/AuthForm";
import { useAuthMutation } from "../model/query/useAuthMutation";
import { UserAuthSchema } from "../model/schema/auth";

export const AuthPage = () => {
  const { mutate: authUser, error } = useAuthMutation();

  const errorMessage = error ? handleServerError(error) : "";

  const link = {
    to: "/registration",
    text: "If you don't have an account, please sign up here",
  };

  return (
    <AuthForm
      title="SIGN IN"
      onSubmit={authUser}
      validationSchema={UserAuthSchema}
      link={link}
      showGoogleLogin
      errorMessage={errorMessage}
    />
  );
};
