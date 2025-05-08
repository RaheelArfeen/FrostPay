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

const getInitialBalance = () => {
  const stored = localStorage.getItem("userBalance");
  return stored !== null && !isNaN(parseFloat(stored)) ? parseFloat(stored) : 10000;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const initialBalance = getInitialBalance();
  const [userBalance, setUserBalance] = useState(initialBalance);

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

    setUserBalance(10000);

    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("bill_") && key.endsWith("_paid")) {
        localStorage.removeItem(key);
      }
    });

    return signOut(auth);
  };

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

  console.log(user);

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
