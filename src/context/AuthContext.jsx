import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

//create context
const AuthContext = createContext();

//provide context

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //sign up
  const signUp = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(userCredential.user, { displayName: name });
    return userCredential.user;
  };

  //sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signOut
  const logout = () => {
    return signOut(auth);
  };

  //check if user is logged in or not

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = { user, signIn, signUp, logout };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

//use context
export const UseAuthContext = () => {
  return useContext(AuthContext);
};
