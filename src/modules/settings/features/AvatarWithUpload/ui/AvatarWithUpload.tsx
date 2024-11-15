import { FC, memo } from "react";

import { Avatar } from "@/common/components/Avatar/Avatar";
import { cn } from "@/common/utils/cn";

interface AvatarWithUploadProps {
  picture: string;
  handleChangeAvatar: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const AvatarWithUpload: FC<AvatarWithUploadProps> = memo(
  ({ picture, handleChangeAvatar, className }) => {
    return (
      <>
        <label className="cursor-pointer" htmlFor="avatar">
          <Avatar picture={picture} className={cn(className)} />
        </label>

        <input
          type="file"
          onChange={handleChangeAvatar}
          id="avatar"
          accept="image/*"
          name="avatar"
          className="hidden"
        />
      </>
    );
  }
);
