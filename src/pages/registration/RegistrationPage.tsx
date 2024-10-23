import { handleServerError } from "@/utils/errorCodesHandler";
import { useRegMutation } from "./query/useRegMutation";
import { UserRegistrationSchema } from "./schema/schema";
import { AuthForm } from "@/components/blocks/AuthForm.tsx/AuthForm";

export const RegistrationPage = () => {
  const { mutate: registration, error } = useRegMutation();

  const errorMessage = error ? handleServerError(error) : "";

  const link = {
    to: "/auth",
    text: "If you have an account, please sign in here",
  };

  return (
    <AuthForm
      title="SIGN UP"
      onSubmit={registration}
      validationSchema={UserRegistrationSchema}
      link={link}
      errorMessage={errorMessage}
    />
  );
};
