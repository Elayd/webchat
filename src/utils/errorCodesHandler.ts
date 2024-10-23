import { ErrorCodes } from "@/enums/errorCodes";
import { AxiosError } from "axios";

export const handleServerError = (error: unknown) => {
  if (error instanceof AxiosError) {
    const errorCode = error.response?.data?.code;
    switch (errorCode) {
      case ErrorCodes.UserNotFound:
        return "User not found. Please check your email.";
      case ErrorCodes.InvalidCredentials:
        return "Invalid credentials. Please try again.";
      case ErrorCodes.UserAlreadyExists:
        return "User already exists. Please use a different email.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  }
};
