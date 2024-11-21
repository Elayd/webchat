import { FC, memo, useState } from "react";

import { Avatar } from "@/common/components/Avatar/Avatar";
import { cn } from "@/common/utils/cn";

import downloadIcon from "../../../assets/download.png";
interface AvatarWithUploadProps {
  picture: string;
  handleChangeAvatar: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const AvatarWithUpload: FC<AvatarWithUploadProps> = memo(
  ({ picture, handleChangeAvatar, className }) => {
    const [showDownloadIcon, setShowDownloadIcon] = useState(false);

    const hasNoPicture = !picture;

    const handleMouseOver = () => {
      if (!hasNoPicture) setShowDownloadIcon(true);
    };

    const handleMouseLeave = () => {
      if (!hasNoPicture) setShowDownloadIcon(false);
    };

    return (
      <>
        <label
          className="cursor-pointer relative"
          htmlFor="avatar"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {(hasNoPicture || showDownloadIcon) && (
            <div className="absolute z-10 flex items-center justify-center w-[100%] h-[100%] rounded-full bg-white shadow-lg opacity-20">
              <img
                src={downloadIcon}
                alt="Download icon"
                className="w-[60%] h-[60%]"
              />
            </div>
          )}
          <Avatar picture={picture} className={cn(className)} />
        </label>

        <input
          type="file"
          onChange={handleChangeAvatar}
          id="avatar"
          accept="image/jpeg, image/png, image/webp, image/jpg"
          name="avatar"
          className="hidden"
        />
      </>
    );
  }
);
