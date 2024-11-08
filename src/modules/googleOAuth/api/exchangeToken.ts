import {axiosInstance} from "@/common/api";
import {ITokenResponse} from "@/common/types/tokens.ts";

export const exchangeTokenApi = async () => {
   return axiosInstance
        .get<ITokenResponse>(
            `${import.meta.env.VITE_AUTH_SERVICE_PATH}/oauth/${
                window.location.search
            }`
        )
}
