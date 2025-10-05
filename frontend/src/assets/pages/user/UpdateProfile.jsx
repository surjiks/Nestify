import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { profile } = useAuth();

  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phone2, setPhone2] = useState("");
  const [address, setAddress] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserProfile = async () => {
      const res = await fetch(`/api/ViewProfile?userName=${profile?.userName}`);

      if (!res.ok) {
        throw new Error("Something went wrong in fetching profile");
      }
      const data = await res.json();
      setUserName(data.userName);
      setPhone(data.phone);
      setEmail(data.email);
      setPhone2(data.phone2);
      setAddress(data.address);
    };
    if (profile?.userName) {
      fetchUserProfile();
    }
  }, [profile?.userName]);

  const handleProfileUpdate = async(e) => {
    e.preventDefault()
    try {
        const UpdatedProfile = {
            UserName : userName,
            Email : email,
            Phone : phone,
            Phone2 : phone2,
            Address : address,
        }
        const res = await fetch('/api/updateProfile',{
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(UpdatedProfile),
    })
        const data = await res.json()
      if (!res.ok) {
        throw new Error(data.msg || "Failed to update profile");
      }
      alert("Profile Updated Sucessfully !");
      navigate("/dashboard");
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="md:flex grid">
      <div className="absolute top-30 left-90 w-[70%] h-[80%]">
        <div>
          <span className="text-2xl font-bold">My Profile</span>
          <p className="text-lg">
            Fill in the details that appear to be accurate, not misleading or
            imitative.
          </p>
        </div>
        <form onSubmit={handleProfileUpdate}>
            <div className="flex justify-center mt-20 bg-[#E8FEE4] w-[90%] h-[65%] space-x-15 rounded-lg shadow-2xl">
          <div className=" w-[70%] p-5">
            <span className="font-bold text-2xl">Contact information</span>
            <div className="flex space-x-15 mt-8">
              <div className="w-[40%] space-y-3">
                <p>User Name</p>
                <input
                  className="outline bg-white w-[100%] h-[35px] rounded-lg pl-3 font-bold"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter User Name"
                />
                <p>Email</p>
                <input
                  className="outline bg-gray-100 w-[100%] h-[35px] rounded-lg pl-3 font-bold"
                  type="email"
                  placeholder="Enter Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-[40%] space-y-3">
                <p>Mobile number</p>
                <input
                  className="outline bg-gray-100 w-[100%] h-[35px] rounded-lg pl-3 font-bold"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <p>Mobile 2(optional)</p>
                <input
                  className="outline bg-white w-[100%] h-[35px] rounded-lg pl-3 font-bold"
                  type="number"
                  value={phone2}
                  onChange={(e) => setPhone2(e.target.value)}
                />
              </div>
            </div>
            <p>
              <br />
              Full Address
            </p>
            <textarea
              className="outline w-[680px] h-[100px] rounded-lg bg-gray-100 pl-3 font-bold"
              type="text"
              value={address}
                  onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="w-[200px] flex flex-col justify-center items-center">
            {/* <img
              className="h-[140px] w-[140px] rounded-full outline"
              src="image/user.jpeg"
              alt=""
            />
            <p className="text-sm">*Maximum file size : 500KB</p> */}
            <div className="grid  w-[80%] text-center font-bold space-y-5 mt-10 ">
              <button
              type="submit"
                className="bg-[#095B15] text-white p-2 rounded-lg"
              >
                Update Profile
              </button>
              <Link to={'/dashboard'}
                className="bg-[#C50909] text-white p-2 rounded-lg"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
