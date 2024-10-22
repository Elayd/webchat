import { FormEvent, useRef, useState } from "react";
import { useAuthMutation } from "./query/useAuthMutation";
import { Button } from "@/components/shared/button";
import { Link } from "react-router-dom";
import { UserAuthSchema } from "./schema/schema";
import { zodErrorsMapper } from "@/utils/zodErrorsMapper";
import { z } from "zod";

interface ValidationAuthErrors {
  email: string;
  password: string;
}

export const AuthPage = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [validationErrors, setValidationErrors] =
    useState<ValidationAuthErrors | null>(null);

  const { mutate: authUser } = useAuthMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const data = {
      email: emailRef?.current?.value ?? "",
      password: passwordRef?.current?.value ?? "",
    };
    event.preventDefault();

    try {
      const validatedUserData = UserAuthSchema.parse(data);
      authUser(validatedUserData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = zodErrorsMapper<keyof ValidationAuthErrors>(
          error.formErrors.fieldErrors
        );
        setValidationErrors(errors);
      } else {
        console.log("Unexpected error: ", error);
      }
    }
  };

  const handleGoogleOAuth = () => {
    window.location.assign(
      "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=801555540524-pp7o09fa92uf4otba0ei7vp9ccpspsoe.apps.googleusercontent.com&prompt=consent&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth%2Fcallback&response_type=code&scope=openid%20profile%20email&state=standard_oauth"
    );
  };

  return (
    <div className="h-full w-full bg-gray-800 flex justify-center">
      <div className="h-2/4 w-2/6 mt-10 border-2 border-solid border-gray-500 rounded-3xl flex flex-col items-center">
        <h1 className="text-gray-400 flex mt-6 mb-6">SIGN IN</h1>
        <form
          className="w-3/6 h-auto flex flex-col bg-gray-700 rounded-xl p-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col h-14 w-full items-start pl-6 mb-4 pb-2 border-b border-solid border-gray-500">
            <span className="text-white">Email</span>
            <input
              ref={emailRef}
              type="email"
              className="bg-gray-700 text-blue-500 w-full border-none outline-none"
              placeholder="Enter your email"
            />
          </div>
          {validationErrors?.email && (
            <span className="text-red-500 mb-5">{validationErrors.email}</span>
          )}

          <div className="flex flex-col h-14 w-full items-start pl-6 mb-4 pb-2 border-b border-solid border-gray-500">
            <span className="text-white">Password</span>
            <input
              ref={passwordRef}
              type="password"
              className="bg-gray-700 text-blue-500 w-full border-none outline-none"
              placeholder="Enter your password"
            />
          </div>
          {validationErrors?.password && (
            <span className="text-red-500 mb-5">
              {validationErrors.password}
            </span>
          )}

          <div className="mt-auto flex flex-col gap-2">
            <Button
              size="lg"
              type="submit"
              className="bg-gray-800 border-b border-solid border-gray-500 h-12 flex items-center justify-center"
            >
              SUBMIT
            </Button>

            <Button
              type="button"
              size="lg"
              className="bg-gray-800 border-b border-solid border-gray-500 h-12 flex items-center justify-center"
              onClick={handleGoogleOAuth}
            >
              LOGIN BY GOOGLE
            </Button>
          </div>
        </form>
        <Link to="/registration" className="mt-2">
          If you don't have an account, please sign up here
        </Link>
      </div>
    </div>
  );
};
