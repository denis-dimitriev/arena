import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction, useEffect,
  useState,
} from "react";
import { onAuthStateChangeListener } from "../utils/firebase.auth";

type UserContextType = {
  currentUser: null | {},
  setCurrentUser: Dispatch<SetStateAction<any>>
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {}
});


interface IProvider {
  children: ReactNode;
}

export const UserProvider: React.FC<IProvider> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user: any) => {
      // TODO if user exist create user document
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const contextValue = { currentUser, setCurrentUser };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};