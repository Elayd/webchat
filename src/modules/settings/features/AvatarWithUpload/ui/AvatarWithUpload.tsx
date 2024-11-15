import axios from "axios";

import { Avatar } from "@/common/components/Avatar/Avatar";

import { changeUserAvatar } from "../api/changeUserAvatar";
import { getUploadAvatarLink } from "../api/getUploadAvatarLink";

interface AvatarWithUploadProps {
  userId: string;
  width: number;
  height: number;
  picture: string;
}

export function AvatarWithUpload(props: AvatarWithUploadProps) {
  const { picture, userId, width, height } = props;

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const { data } = await getUploadAvatarLink(userId, file?.type);

    const { url, key } = data;

    await axios.put(url, file, {
      headers: {
        "Content-Type": file.type,
      },
    });

    const avatarUrl = `${import.meta.env.VITE_S3_URL}/${key}`;
    await changeUserAvatar(userId, avatarUrl);
  };

  return (
    <>
      <label className="cursor-pointer" htmlFor="avatar">
        <Avatar picture={picture} width={width} height={height} />
      </label>

      <input
        type="file"
        onChange={handleChange}
        id="avatar"
        accept="image/*"
        name="avatar"
        className="hidden"
      />
    </>
  );
}
