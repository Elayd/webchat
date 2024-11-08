import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import {Button} from "../../../ui/Button/Button.tsx";
import InputField from "../../InputField/InputField.tsx";
import { AuthData } from "../types/authData.ts";

interface AuthFormProps {
  title: string;
  onSubmit: (data: AuthData) => void;
  validationSchema: z.ZodSchema<AuthData>;
  link: { to: string; text: string };
  errorMessage?: string;
}

export const AuthForm: FC<AuthFormProps> = ({
  title,
  onSubmit,
  validationSchema,
  link,
  errorMessage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthData>({
    resolver: zodResolver(validationSchema),
    mode: "all",
  });

  return (
    <div className="w-full bg-gray-800 flex justify-center items-center">
      <div className="w-2/6 border-2 min-w-[300px] border-solid border-gray-500 rounded-3xl flex flex-col p-6 bg-gray-700">
        <h1 className="text-gray-400 text-center mb-6">{title}</h1>
        {errorMessage && (
          <span className="text-red-500 mb-10 h-[20px] text-center">
            {errorMessage}
          </span>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <InputField
            label="Email"
            type="text"
            name="email"
            error={errors.email}
            register={register}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            error={errors.password}
            register={register}
          />
          <Button size="lg" type="submit" className="mt-4 w-full rounded-xl">
            SUBMIT
          </Button>
        </form>
        <Link to={link.to} className="text-gray-300 mt-6 text-center">
          {link.text}
        </Link>
      </div>
    </div>
  );
};
