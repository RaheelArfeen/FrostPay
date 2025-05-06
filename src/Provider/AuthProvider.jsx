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

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userBalance, setUserBalance] = useState(10000);

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
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedBalance = parseFloat(localStorage.getItem("userBalance"));
    if (storedUser) setUser(storedUser);
    if (!isNaN(storedBalance)) setUserBalance(storedBalance);
  }, []);

  useEffect(() => {
    localStorage.setItem("userBalance", userBalance);
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
