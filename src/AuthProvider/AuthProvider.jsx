/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";

export const AuthContext = createContext(null)
const auth = getAuth(app)


export const AuthProvider = ({children}) => {

      const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithEmailPass = (email, password) => {

    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

    const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }



    const authInfo = {
       createUserWithEmailPass,
       signIn,
       loading,
       user,
       setUser,
       logOut
    }

     useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

return (<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>)
} 