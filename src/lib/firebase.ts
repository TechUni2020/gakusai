import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { apiKey, authDomain, projectId, storageKey, messagingSenderId, appId } from "@/constants/env";

const config = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageKey,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

export const app = initializeApp(config);
export const db = getFirestore(app);
export const auth = getAuth(app);
auth.languageCode = "ja";
