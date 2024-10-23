import { forwardRef } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  error?: string;
  onBlur: () => void;
  onFocus: () => void;
  ref: React.Ref<HTMLInputElement>;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type, error, onBlur, onFocus }, ref) => (
    <div className="flex flex-col mb-4">
      <label className="text-white">{label}:</label>
      <input
        ref={ref}
        type={type}
        onBlur={onBlur}
        onFocus={onFocus}
        className="bg-gray-600 text-blue-500 w-full border-none outline-none p-2 rounded"
      />
      <span className="text-red-500 mt-1 h-[20px]">{error}</span>
    </div>
  )
);

export default InputField;
