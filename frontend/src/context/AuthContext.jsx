import { createContext, useCallback, useContext, useMemo, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    //fetch profile 
    const [profile,setProfile] = useState(null);
    const [loading,setLoading] = useState(true);

    const fetchProfile = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/profile',{ credentials: 'include' });
           if (!res.ok) throw new Error("Failed to fetch profile");
                const data = await res.json();
                setProfile(data);
        } catch (error) {
            setProfile(null)
        }finally{
            setLoading(false)   
        }
    },[]);

    useEffect(()=> {fetchProfile();},[fetchProfile]);


    const login = useCallback(async(username,password)=>{
        const res = await fetch('/api/Login',{
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({ UserName: username, Password: password }),
            });
            if(!res.ok){
                const errorData = await res.json()
                throw new Error(errorData.msg || 'Login Failed')
            }
            // console.log(role);
            await fetchProfile();
            await fetchProperties()
    },[fetchProfile])

    const logout = useCallback(async () => {
    await fetch("/api/logout", { method: "POST", credentials: "include" });
    setProfile(null);
  }, []);


     // Revalidate on BFCache restore (Back/Forward Cache)
  useEffect(() => {
    const onPageShow = (e) => { if (e.persisted) fetchProfile(); };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [fetchProfile]);

  const value = useMemo(()=>({
    profile,
    loading,
    login,
    logout,
    refresh: fetchProfile,
    isAdmin: profile?.userRole === "admin",
  }),[profile, loading, login, logout, fetchProfile]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}