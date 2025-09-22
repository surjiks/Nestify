import React, { useEffect, useState } from "react";
import img from "../../images/wishlist.webp";
import PropertyCard from "../../components/user/PropertyCard";
import { Link } from "react-router-dom";

const wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch("/api/Wishlist");
        const data = await res.json();
        if (!res.ok) {
          throw new Error("Wishlist not Found");
        }
        setWishlist(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWishlist();
  }, []);

  const handleToggleWishlist = (propertyId, status, propertyData) => {
    if (status === "removed") {
      setWishlist((prev) =>
        prev.filter((item) => item.Property._id !== propertyId)
      );
    } else if (status === "added") {
      setWishlist((prev) => [...prev, { Property: propertyData }]);
    }
  };

  return (
    <div className="grid md:grid-cols-5 grid-cols-1 justify-around gap-5 p-6 w-[80%] ml-[260px]">
      {wishlist.length > 0 ? (
        wishlist.map((item) => (
          <PropertyCard
            key={item._id}
            property={item.Property}
            handleToggleWishlist={handleToggleWishlist}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center gap-5  w-[70vw]">
          <img src={img} alt="" className="mx-auto" />
          <p className="font-bold text-3xl">You haven't liked any ads yet</p>
          <p className="text-xl">
            Like ads and share <br />
            them with the world
          </p>
          <Link to={'/buy'}
            className="text-2xl text-[#095B15] w-[300px] p-2 h-[50px] text-center border-2 border-[#095B15] rounded-md mt-3"
          >
            Discover
          </Link>
        </div>
      )}
    </div>
  );
};

export default wishlist;
