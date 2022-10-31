import { TOKEN_LABEL } from "@/constants/token_label";

export const authService = {
  isSignedIn() {
    const { USER_ID } = TOKEN_LABEL;
    if (typeof window !== "undefined") {
      return localStorage.getItem(USER_ID) != null;
    }
  },

  login(userId: string) {
    const { USER_ID } = TOKEN_LABEL;
    localStorage.setItem(USER_ID, userId);
  },
};
