import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProperty = () => {
  const [selectedBHK, setSelectedBHK] = useState("");
  const [selectedBathroom, setSelectedBathroom] = useState("");
  const [projectarea, setProjectArea] = useState("");
  const [projectName, setProjectname] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPinCode] = useState("");
  const [price, setPrice] = useState("");
  const [propertyImage, setPropertyImage] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`/api/getProperty/${id}`);
        
        if (!res.ok) {
          throw new Error("Failed to Update Details!");
        }
        const data = await res.json();
        if (!data || !data._id) {
          throw new Error("Property Not found!");
        }
        setSelectedBHK(data.BHK);
        setSelectedBathroom(data.Bathrooms);
        setProjectArea(data.PArea);
        setProjectname(data.ProjectName);
        setTitle(data.Title);
        setDescription(data.Description);
        setArea(data.area);
        setCity(data.city);
        setState(data.state);
        setPinCode(data.pincode);
        setPrice(data.Price);
      } catch (error) {console.log(error);
      }
    };
    fetchProperty();
  },[]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedProeprty = {
        BHK : selectedBHK,
        Bathrooms : selectedBathroom,
        PArea : projectarea,
        ProjectName :projectName,
        Title : title,
        Description : description,
        area : area,
        city : city,
        state :state,
        pincode : pincode,
        Price : price
      }

      const res = await fetch(`/api/EditProperty/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(updatedProeprty),
      });
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.msg || "Failed to Add property");
      }
      alert("Details Updated Sucessfully !");
      navigate("/myproperty");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="pb-10 pt-10">
      <div className="outline md:w-[60%] m-auto p-5">
        <form onSubmit={handleUpdate}>
          <div className="text-center">
            <span className="font-bold text-2xl text-center">
              UPDATE PROPERTY
            </span>
          </div>

          {/* property info  */}

          <span className="font-bold text-xl">PROPERTY INFO</span>

          {/* BHK  */}

          <div className="text-xl pl-5 mt-8">
            <label className="text-lg">BHK *</label>
            <div className="ml-10 mt-4 space-x-1">
              {["1", "2", "3", "4", "4+"].map((BHK) => (
                <button
                  key={BHK}
                  type="button"
                  onClick={(e) => setSelectedBHK(BHK)}
                  className={`outline w-[50px] h-[35px] rounded-lg focus:bg-[#DBEED6] ${
                    selectedBHK == BHK ? "bg-[#DBEED6]" : ""
                  }`}
                >
                  {BHK}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms  */}

          <div className="text-xl pl-5 mt-8">
            <label className="text-lg">Bathrooms *</label>
            <div className="ml-10 mt-4 space-x-1">
              {["1", "2", "3", "4", "4+"].map((bathroom) => (
                <button
                  key={bathroom}
                  type="button"
                  onClick={(e) => setSelectedBathroom(bathroom)}
                  className={`outline w-[50px] h-[35px] rounded-lg focus:bg-[#DBEED6] ${
                    selectedBathroom == bathroom ? "bg-[#DBEED6]" : ""
                  }`}
                >
                  {bathroom}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xl pl-5 mt-8">
            <label className="text-lg">Plot / Builtup area sqft*</label>
            <div className="ml-10 mt-4">
              <input
                className="outline w-[70%] pl-4 rounded-lg h-10"
                type="text"
                value={projectarea}
                onChange={(e) => setProjectArea(e.target.value)}
              />
            </div>
          </div>

          <div className="text-xl pl-5 mt-8">
            <label className="text-lg">Project Name</label>
            <div className="ml-10 mt-4">
              <input
                className="outline w-[70%] pl-4 rounded-lg h-10"
                type="text"
                value={projectName}
                onChange={(e) => setProjectname(e.target.value)}
              />
              <br />
              <span className="ml-[66%] text-sm">0/70</span>
            </div>
          </div>

          <div className="text-xl pl-5 mt-2">
            <label className="text-lg">Ad title *</label>
            <div className="ml-10 mt-4">
              <input
                className="outline w-[70%] pl-4 rounded-lg h-10"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <span className="text-sm ml-[30px]">
                Mention the key features of your item
              </span>
            </div>
          </div>

          <div className="text-xl pl-5 mt-2">
            <label className="text-lg">Description*</label>
            <div className="ml-10 mt-4">
              <textarea
                className="outline w-[70%] rounded-lg pl-5"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <br />
              <span className="text-sm ml-[30px]">
                Mention the key features of your item (e.g. brand, model, age,
                type)
              </span>{" "}
              <span className="text-sm ml-[24%]">0/4096</span>
            </div>
          </div>

          <div className="text-xl pl-5 mt-2 pb-5">
            <label className="text-lg">Address</label>
            <div className="flex gap-5 justify-evenly w-[70%]">
              <div className="flex flex-col">
                Area :{" "}
                <input
                  className="outline rounded-lg h-8 pl-5"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  type="text"
                />
                City :{" "}
                <input
                  className="outline rounded-lg h-8 pl-5"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                State :{" "}
                <input
                  className="outline rounded-lg h-8 pl-5"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                />
                Pin :{" "}
                <input
                  className="outline rounded-lg h-8 pl-5"
                  value={pincode}
                  onChange={(e) => setPinCode(e.target.value)}
                  type="number"
                />
              </div>
            </div>
          </div>

          <div className="border-b-1 mt-3 mb-6"></div>

          <span className="font-bold text-xl">SET A PRICE</span>

          <div className="ml-10 mt-4 text-xl pl-5 mt-2 relative">
            <i className="fa-solid fa-dollar-sign absolute top-3 left-10"></i>
            <input
              className="outline w-[70%] pl-15 rounded-lg h-10"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="border-b-1 mt-10 mb-6"></div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="text-2xl bg-[#095B15] w-[300px] p-2 h-[50px] text-center text-white rounded-full "
            >
              Update Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;
