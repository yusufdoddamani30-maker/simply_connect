import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, MOCK_USERS } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  onboard: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('campusnet_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email: string) => {
    // Mock login logic
    const foundUser = MOCK_USERS.find(u => u.email === email) || MOCK_USERS[0];
    setUser(foundUser);
    localStorage.setItem('campusnet_user', JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('campusnet_user');
  };

  const onboard = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('campusnet_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, onboard }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
