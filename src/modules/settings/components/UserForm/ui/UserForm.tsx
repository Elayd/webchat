import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserData } from "../../../types/userData.ts";
import { useEditableToggle } from "../../../hooks/useEditableToggle.tsx";
import InputField from "@/common/components/InputField/InputField.tsx";
import {Button} from "@/common/ui/Button/Button.tsx";

interface UserFormProps {
  title: string;
  onSubmit: (data: UserData) => void;
  validationSchema: z.ZodSchema<UserData>;
  defaultValues: UserData;
}

export const UserForm: React.FC<UserFormProps> = ({
  title,
  onSubmit,
  validationSchema,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    values: defaultValues,
  });

  const { toggleEditable, buttonText, editable } = useEditableToggle();

  return (
    <div className="bg-gray-800 flex justify-center items-center py-4">
      <div className="w-full max-w-md p-6 bg-gray-700 rounded-3xl border-2 border-gray-500">
        <h1 className="text-gray-400 text-center text-2xl mb-6">{title}</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            error={errors.firstName}
            register={register}
            disabled={!editable}
          />
          <InputField
            label="Last Name"
            type="text"
            name="secondName"
            error={errors.secondName}
            register={register}
            disabled={!editable}
          />
          <Button
            size="lg"
            type="submit"
            onClick={toggleEditable}
            className="w-full rounded-xl transition-all duration-300 ease-in-out"
          >
            {buttonText}
          </Button>
        </form>
      </div>
    </div>
  );
};
