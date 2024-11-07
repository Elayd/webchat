import { LogoutFromAllOtherDevicesButton } from "@/features/LogoutFromAllOtherDevicesButton";
import { UserForm } from "@/widgets/UserForm";
import { UserDataSchema } from "../model/schema/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/Avatar/Avatar";
import useUserStore, { userInfoSelector } from "@/app/store/UserSlice/user";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button/Button";

const SettingsPage = () => {
  const handleSubmit = () => {
    console.log("hello");
  };

  const user = useUserStore(userInfoSelector);
  const defaultValues = {
    firstName: user.firstName,
    secondName: user.secondName,
  };

  return (
    <div className="h-full w-full bg-gray-800 flex justify-center py-8 px-4">
      <Link to="/chat">
        <Button className="absolute top-4 left-4 px-4 py-2 ">BACK</Button>
      </Link>

      <div className="max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.picture} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <UserForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          validationSchema={UserDataSchema}
          title="Settings"
        />

        <div className="mt-6 flex justify-center">
          <LogoutFromAllOtherDevicesButton />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
