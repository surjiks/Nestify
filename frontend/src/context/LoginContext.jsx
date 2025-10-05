import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    
  const [loginDetails, setLoginDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (username,password) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ UserName: username, Password: password  }),
      });
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.msg || 'Login Failed')
      }
      const data = await res.json();
      setLoginDetails(data);
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/profile", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Not logged in");
      }

      const data = await res.json();
      console.log("Profile:", data);
      setLoginDetails(data);
    } catch (error) {
      console.log("Profile fetch failed:", error.message);
      setLoginDetails(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);


  return (
    <LoginContext.Provider value={{ loginDetails, login, loading }}>
      {children}
    </LoginContext.Provider>
  );
};