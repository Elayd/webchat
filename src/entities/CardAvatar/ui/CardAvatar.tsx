import { FC } from "react";

export const CardAvatar: FC<{ imgSrc: string }> = ({ imgSrc }) => {
  console.log(imgSrc, "img");
  return (
    <div className="w-1/4 flex justify-center items-center">
      <img
        src={imgSrc}
        alt="Avatar"
        className="w-16 h-16 rounded-full object-cover"
      />
    </div>
  );
};
