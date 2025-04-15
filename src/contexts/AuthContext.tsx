"use client";
import { AuthContextInterface, RegisterUserData } from "@/types/auth";
import React, { createContext, useContext } from "react";

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const registerUser = (data: RegisterUserData) => {};

  return (
    <AuthContext.Provider value={{ registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
