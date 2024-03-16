// AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import { RootStackParamList } from "../screens/AppNavigator"; // Ensure this import path is correct
import { StackNavigationProp } from "@react-navigation/stack";

// Define the shape of the context's data
interface AuthContextData {
  isLoggedIn: boolean;
  login: () => void; // Define additional parameters as needed
  logout: () => void;
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// Define a hook to use the AuthContext, this will make it easier to consume
export const useAuth = () => useContext(AuthContext);
interface AuthProviderProps {
  children: ReactNode;
}
// Define the AuthProvider component which provides the context to its children
export const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
