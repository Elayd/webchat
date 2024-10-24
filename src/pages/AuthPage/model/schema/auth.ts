import { z } from "zod";

const invalid_type_error = "Check your provided data";
const required_error = "Field is required";
export const UserAuthSchema = z.object({
  email: z
    .string({ invalid_type_error, required_error })
    .min(1, { message: required_error })
    .email("Email is not valid"),
  password: z
    .string({ invalid_type_error, required_error })
    .min(1, { message: required_error }),
});
