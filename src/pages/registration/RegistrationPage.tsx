import { FormEvent, useRef, useState } from "react";
import { useRegMutation } from "./query/useRegMutation";
import { Button } from "@/components/shared/button";
import { Link } from "react-router-dom";
import { UserRegistrationSchema } from "./schema/schema";
import { z } from "zod";
import { zodErrorsMapper } from "@/utils/zodErrorsMapper";

interface ValidationRegErrors {
  email: string;
  password: string;
}

export const RegistrationPage = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [validationErrors, setValidationErrors] =
    useState<ValidationRegErrors | null>(null);

  const { mutate: registration } = useRegMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      email: emailRef?.current?.value ?? "",
      password: passwordRef?.current?.value ?? "",
    };

    try {
      const validatedUserData = UserRegistrationSchema.parse(data);
      registration(validatedUserData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = zodErrorsMapper<keyof ValidationRegErrors>(
          error.formErrors.fieldErrors
        );
        setValidationErrors(errors);
      } else {
        console.log("Unexpected error: ", error);
      }
    }
  };

  return (
    <div className="h-full w-full bg-gray-800 flex justify-center">
      <div className="h-2/4 w-2/6 mt-10 border-2 border-solid border-gray-500 rounded-3xl flex flex-col items-center">
        <h1 className="text-gray-400 flex mt-6 mb-6">SIGN UP</h1>
        <form
          onSubmit={handleSubmit}
          className="w-3/6 h-auto flex flex-col bg-gray-700 rounded-xl p-6"
        >
          <div className="flex flex-col h-14 w-full items-start pl-6 mb-4 pb-2 border-b border-solid border-gray-500">
            <span className="text-white">Email</span>
            <input
              ref={emailRef}
              type="text"
              className="bg-gray-700 text-blue-500 w-full border-none outline-none"
            />
          </div>
          {validationErrors?.email && (
            <span className="text-red-500 mb-5">{validationErrors.email}</span>
          )}

          <div className="flex flex-col h-14 w-full items-start pl-6 mb-4 pb-2 border-b border-solid border-gray-500">
            <span className="text-white">Password</span>
            <input
              ref={passwordRef}
              type="text"
              className="bg-gray-700 text-blue-500 w-full border-none outline-none"
            />
          </div>
          {validationErrors?.password && (
            <span className="text-red-500 mb-5">
              {validationErrors.password}
            </span>
          )}
          <div className="mt-auto flex justify-center">
            <Button
              size="lg"
              type="submit"
              className="bg-gray-800 border-b border-solid border-gray-500"
            >
              SUBMIT
            </Button>
          </div>
        </form>
        <Link to="/auth" className="mt-10 ">
          If you have an account, please sign in here
        </Link>
      </div>
    </div>
  );
};
