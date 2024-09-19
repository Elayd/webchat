import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ICsrfStore {
  csrfToken: string;
  setCsrfToken: (token: string) => void;
}

const useCsrfStore = create(
  devtools<ICsrfStore>((set) => ({
    csrfToken: "",
    setCsrfToken: (token) => set({ csrfToken: token }),
  }))
);

export default useCsrfStore;
