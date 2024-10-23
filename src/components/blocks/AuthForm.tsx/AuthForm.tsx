// AuthForm.tsx
import { FormEvent, useCallback, useRef, useState } from "react";
import { Button } from "@/components/shared/button";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodErrorsMapper } from "@/utils/zodErrorsMapper";
import InputField from "@/components/elements/InputField";

interface AuthSchema {
  email: string;
  password: string;
}

interface AuthFormProps {
  title: string;
  onSubmit: (data: { email: string; password: string }) => void;
  validationSchema: z.ZodSchema<AuthSchema>;
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
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    };

    try {
      const validatedUserData = validationSchema.parse(data);
      onSubmit(validatedUserData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = zodErrorsMapper<keyof AuthSchema>(
          error.formErrors.fieldErrors
        );
        setValidationErrors(errors);
      } else {
        console.log("Unexpected error: ", error);
      }
    }
  };
  // мб разделить useState на два и мемоизировать handleBlur и handleFocus
  const handleBlur = (field: keyof typeof validationErrors) => {
    try {
      const data = {
        email: emailRef.current?.value ?? "",
        password: passwordRef.current?.value ?? "",
      };
      if (validationSchema instanceof z.ZodObject) {
        validationSchema.shape[field].parse(data[field]);
        setValidationErrors((prev) => ({ ...prev, [field]: "" }));
      }
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.formErrors.formErrors[0];
        setValidationErrors((prev) => ({ ...prev, [field]: errorMessage }));
      }
    }
  };

  const handleFocus = (field: keyof typeof validationErrors) => {
    setValidationErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleGoogleOAuth = useCallback(() => {
    window.location.assign(import.meta.env.VITE_GOOGLE_URL);
  }, []);

  return (
    <div className="h-full w-full bg-gray-800 flex justify-center items-center">
      <div className="w-2/6 border-2 border-solid border-gray-500 rounded-3xl flex flex-col p-6 bg-gray-700">
        <h1 className="text-gray-400 text-center mb-6">{title}</h1>

        {/* Фиксированное место для сообщения об ошибке */}
        <span className="text-red-500 mb-10 h-[20px]">
          {errorMessage || " "}
        </span>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <InputField
            label="Email"
            type="text"
            ref={emailRef}
            onBlur={() => handleBlur("email")}
            onFocus={() => handleFocus("email")}
            error={validationErrors.email}
          />
          <InputField
            label="Password"
            type="password"
            ref={passwordRef}
            onBlur={() => handleBlur("password")}
            onFocus={() => handleFocus("password")}
            error={validationErrors.password}
          />
          <Button
            size="lg"
            type="submit"
            className="mt-4 bg-gray-800 border-b border-solid border-gray-500 w-full"
          >
            SUBMIT
          </Button>
          {showGoogleLogin && (
            <Button
              type="button"
              size="lg"
              className="mt-4 bg-gray-800 border-b border-solid border-gray-500 w-full"
              onClick={handleGoogleOAuth}
            >
              LOGIN BY GOOGLE
            </Button>
          )}
        </form>
        <Link to={link.to} className="text-gray-300 mt-6 text-center">
          {link.text}
        </Link>
      </div>
    </div>
  );
};
