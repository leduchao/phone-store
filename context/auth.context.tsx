"use client";

import { UserApis } from "@/apis/user";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
  isAdmin: boolean;
  firstName?: string;
  profilePicture?: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (user: User) => setUser(user);
  const signOut = () => setUser(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await UserApis.getUserBasicInfo();
        if (resp.ok) {
          const user = await resp.json();
          console.log("Fetched user info:", user);
          setUser(user.data);
        }
      } catch (err) {
        console.error("Error fetching user info", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
