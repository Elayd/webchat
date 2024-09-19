import { Button } from "@/components/shared/button";
import { useLogoutMutation } from "./query/useLogoutMutation";

export function LogoutButton() {
  const { mutate: logout } = useLogoutMutation();
  return <Button onClick={() => logout()}>Logout</Button>;
}
