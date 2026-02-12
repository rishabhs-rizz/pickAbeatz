import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AccessToken = {
  accessToken: string;
  SetAccessToken: (value: string) => void;
};

type IsuserReady = {
  ready: boolean;
  SetUserIsReady: () => void;
};

//Access Token's state
export const useAccessTokenStore = create<AccessToken>()(
  devtools((set) => ({
    accessToken: "",
    SetAccessToken: (value) => set({ accessToken: value }),
  })),
);

//User's Readyness to listen music
export const useIsUserReadyStore = create<IsuserReady>()(
  devtools((set) => ({
    ready: false,
    SetUserIsReady: () => {
      set((state) => ({ ready: !state.ready }));
    },
  })),
);
