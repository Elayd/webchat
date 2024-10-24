import { Button } from "@/shared/ui/Button/button";
import { Link } from "react-router-dom";
import { z } from "zod";
import InputField from "@/shared/ui/InputField/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthData } from "../model";
import { GoogleButton } from "@/features/GoogleButton";

interface AuthFormProps {
  title: string;
  onSubmit: (data: AuthData) => void;
  validationSchema: z.ZodSchema<AuthData>;
  link: { to: string; text: string };
  showGoogleLogin?: boolean;
  errorMessage?: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  validationSchema,
  link,
  showGoogleLogin,
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
    <div className="h-full w-full bg-gray-800 flex justify-center items-center">
      <div className="w-2/6 border-2 border-solid border-gray-500 rounded-3xl flex flex-col p-6 bg-gray-700">
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
          <Button
            size="lg"
            type="submit"
            className="mt-4 bg-gray-800 border-b border-solid border-gray-500 w-full"
          >
            SUBMIT
          </Button>
          {showGoogleLogin && <GoogleButton />}
        </form>
        <Link to={link.to} className="text-gray-300 mt-6 text-center">
          {link.text}
        </Link>
      </div>
    </div>
  );
};
