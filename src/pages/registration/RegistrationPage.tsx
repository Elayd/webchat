import { FormEvent, useRef } from "react";
import { useRegMutation } from "./query/useRegMutation";
import { Button } from "@/components/shared/button";

export const RegistrationPage = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { mutate } = useRegMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const data = {
      email: emailRef?.current?.value ?? "",
      password: passwordRef?.current?.value ?? "",
    };
    event.preventDefault();
    mutate(data);
  };

  return (
    <div className="h-full w-full bg-gray-800 flex justify-center">
      <div className="h-2/4 w-2/6 mt-10 border-2 border-solid border-gray-500 rounded-3xl flex flex-col items-center">
        <h1 className="text-gray-400 flex mt-6 mb-6">SIGN UP</h1>
        <form
          onSubmit={handleSubmit}
          className="w-3/6 h-56 flex items-center bg-gray-700 rounded-xl flex-col p-6"
        >
          <div className="flex flex-col h-14 w-full items-start pl-6 mb-4 pb-2 border-b border-solid border-gray-500">
            <span className="text-white">Email</span>
            <input
              ref={emailRef}
              type="text"
              className="bg-gray-700 text-blue-500 w-full border-none outline-none"
            />
          </div>
          <div className="flex flex-col h-14 w-full items-start pl-6 mb-4 pb-2 border-b border-solid border-gray-500">
            <span className="text-white">Password</span>
            <input
              ref={passwordRef}
              type="text"
              className="bg-gray-700 text-blue-500 w-full border-none outline-none"
            />
          </div>
          <Button
            size="lg"
            type="submit"
            className=" bg-gray-800 border-b border-solid border-gray-500"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
};
