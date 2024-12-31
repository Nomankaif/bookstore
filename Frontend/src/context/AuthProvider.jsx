import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Initialize auth state from localStorage
  const initialAuthUser = localStorage.getItem("user");
  const [Auth, setAuth] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[Auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use Auth context
export const useAuth = () => useContext(AuthContext);
