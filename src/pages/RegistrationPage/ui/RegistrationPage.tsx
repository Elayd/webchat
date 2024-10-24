import { handleServerError } from "@/shared/utils/errorCodesHandler";

import { AuthForm } from "@/widgets/AuthForm";
import { useRegMutation } from "../model/query/useRegMutation";
import { UserRegistrationSchema } from "../model/schema/schema";

const RegistrationPage = () => {
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

export default RegistrationPage;
