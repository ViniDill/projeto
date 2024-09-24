import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthStateProps {
  token: string | null;
  user: {
    name: string | null;
    email: string | null;
    email_verified_at: string | null;
  };
  setToken: (token: string | null) => void;
  logOut: () => void;
  setUser: (name: string, email: string, email_verified_at: string) => void;
}

const useAuthStore = create<AuthStateProps>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: { name: null, email: null, email_verified_at: null },
        setToken: (value) => set(() => ({ token: value })),
        logOut: () =>
          set(() => ({
            token: null,
            user: { name: null, email: null, email_verified_at: null },
          })),
        setUser: (name, email, email_verified_at) =>
          set(() => ({ user: { name, email, email_verified_at } })),
      }),
      { name: "authStore" }
    )
  )
);

export default useAuthStore;
