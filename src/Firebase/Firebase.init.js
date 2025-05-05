
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX97l3gzBSy-TjbNMXXaF496CcXSfqsGM",
  authDomain: "assignment-9-c2e1a.firebaseapp.com",
  projectId: "assignment-9-c2e1a",
  storageBucket: "assignment-9-c2e1a.firebasestorage.app",
  messagingSenderId: "480677540995",
  appId: "1:480677540995:web:a94a1d9902ce890f0d57b6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app