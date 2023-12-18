import { createContext, useContext, useEffect, useState } from "react";
import { onUserState, googleLogin, logout } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [unSubScribe, setUnSubScribe] = useState();

  useEffect(() => {
    const userCange = (newUser) => {
      console.log(newUser);
      setUser(newUser);
    };

    const unSubScribeFunc = onUserState(userCange);
    setUnSubScribe(() => unSubScribeFunc);

    return () => {
      if (unSubScribeFunc) {
        unSubScribeFunc();
      }
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, googleLogin, logout, uid: user && user.uid }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
