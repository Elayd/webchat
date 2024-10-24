import { memo } from "react";
import {
  FieldError,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: string;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
}

const InputField = <T extends FieldValues>({
  label,
  type,
  error,
  register,
  name,
}: InputFieldProps<T>) => (
  <div className="flex flex-col mb-4">
    <label className="text-white">{label}:</label>
    <input
      type={type}
      className="bg-gray-600 text-blue-500 w-full border-none outline-none p-2 rounded"
      {...register(name)}
    />
    {error && (
      <span className="text-red-500 mt-1 h-[20px]">{error.message}</span>
    )}
  </div>
);

export default memo(InputField) as typeof InputField;
