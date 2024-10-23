import { handleServerError } from "@/utils/errorCodesHandler";
import { useAuthMutation } from "./query/useAuthMutation";
import { UserAuthSchema } from "./schema/schema";
import { AuthForm } from "@/components/blocks/AuthForm.tsx/AuthForm";

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
