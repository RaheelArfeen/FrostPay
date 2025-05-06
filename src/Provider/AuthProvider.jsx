import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

// ✅ Helper to load balance safely
const getInitialBalance = () => {
  const stored = localStorage.getItem("userBalance");
  return stored !== null && !isNaN(parseFloat(stored)) ? parseFloat(stored) : 0;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userBalance, setUserBalance] = useState(getInitialBalance); // ✅ safe init

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async (updatedData) => {
    try {
      await updateProfile(auth.currentUser, updatedData);
      const { displayName, email, photoURL, uid } = auth.currentUser;
      const updatedUser = { displayName, email, photoURL, uid };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const signInWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("userBalance");
    return signOut(auth);
  };

  // ✅ Watch auth state and sync user to localStorage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName, email, photoURL, uid } = currentUser;
        const userData = { displayName, email, photoURL, uid };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Persist balance to localStorage on change
  useEffect(() => {
    localStorage.setItem("userBalance", userBalance.toString());
  }, [userBalance]);

  const authData = {
    user,
    loading,
    userBalance,
    setUserBalance,
    createUser,
    signIn,
    updateUser,
    logOut,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
