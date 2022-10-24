import { initializeApp } from "firebase/app";
import { apiKey, authDomain, projectId, storageKey, messagingSenderId, appId, mesurementId } from "../constants/env";
import {getFirestore} from "@firebase/firestore";

const config = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageKey,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: mesurementId,
};

export const app = initializeApp(config);
export const db = getFirestore(app);