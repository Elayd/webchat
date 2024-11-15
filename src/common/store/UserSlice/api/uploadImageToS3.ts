import axios from "axios";

export const uploadImageToS3 = async (url: string, file: File) => {
  return await axios.put(url, file, {
    headers: {
      "Content-Type": file.type,
    },
  });
};
