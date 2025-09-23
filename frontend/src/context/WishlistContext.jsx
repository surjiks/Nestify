// context/WishlistContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const {profile} = useAuth()

  // Fetch wishlist from API
  const fetchWishlist = async () => {
    try {
      const res = await fetch("/api/Wishlist");
      const data = await res.json();
      if (!res.ok) throw new Error("Wishlist not found");
      setWishlist(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleWishlist = (propertyId, status, propertyData) => {
    if (status === "removed") {
      setWishlist((prev) =>
        prev.filter((item) => item.Property._id !== propertyId)
      );
    } else if (status === "added") {
      setWishlist((prev) => [...prev, { Property: propertyData }]);
    }
  };

  // Fetch wishlist once on mount
  useEffect(() => {
    if(!profile)return
    fetchWishlist();
  }, [profile]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist, handleToggleWishlist, fetchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
