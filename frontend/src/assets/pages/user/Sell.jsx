import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const [category, setCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
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
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [aadharno, setAadharNo] = useState("");
  const [taxno, setTaxNo] = useState("");
  const [propertyImage, setPropertyImage] = useState(null);
  const [landtaxImage, setLandtaxImage] = useState(null);
  const [aadharImage, setaadharImage] = useState(null);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(category);
    

    if (!category) return toast.error("Please select a category");
    if (!selectedType) return toast.error("Please select property type");
    if (!selectedBHK) return toast.error("Please select BHK");
    if (!selectedBathroom) return toast.error("Please select number of bathrooms");
    if (!projectarea) return toast.error("Please enter plot/built-up area");
    if (!title) return toast.error("Please enter ad title");
    if (!description) return toast.error("Please enter description");
    if (!area || !city || !state || !pincode) return toast.error("Please complete address details");
    if (!price) return toast.error("Please enter a price");
    if (!aadharno || !aadharImage) return toast.error("Please provide Aadhar number & photo");
    if (!taxno || !landtaxImage) return toast.error("Please provide Land Tax receipt number & photo");
    if (!phone) return toast.error("Please enter phone number");
    if (!propertyImage) return toast.error("Please upload property photo");

    try {
      const formData = new FormData();
      formData.append("Category", category);
      formData.append("Type", selectedType);
      formData.append("BHK", selectedBHK);
      formData.append("Bathrooms", selectedBathroom);
      formData.append("PArea", projectarea);
      formData.append("ProjectName", projectName);
      formData.append("Title", title);
      formData.append("Description", description);
      formData.append("Price", price);
      formData.append("Phone", phone);
      formData.append("AadharNo", aadharno);
      formData.append("TaxNo", taxno);
      formData.append("Area", area);
      formData.append("City", city);
      formData.append("State", state);
      formData.append("Pincode", pincode);

      if (propertyImage) {
        formData.append("PropertyImage", propertyImage);
      }
      if (landtaxImage) {
        formData.append("TaxReceipt", landtaxImage);
      }
      if (aadharImage) {
        formData.append("AadharCard", aadharImage);
      }

      const res = await fetch('/api/SellProperty',{
        method: 'POST',
        credentials: "include",
        body: formData,
      });

      if(!res.ok){
        const errorData = await res.json()
        throw new Error(errorData.msg || "Failed to Add property")
      }
      alert("Property added Sucessfully, wait for admin approval!")
      navigate('/myproperty')
    } catch (error) {
        alert( error.message);
        navigate('/homepage')
    }
  };

  return (
    <div className="pb-10 pt-10">
     
      <div className="outline md:w-[60%] m-auto p-5">
        <form onSubmit={handleSubmit}>
          <span className="font-bold text-2xl">SELECT CATEGORY</span>
          
          <div className="text-2xl pl-10 mt-2 text-center">
            <input type="radio" 
            name="selected" 
            value="sale"
            checked={category == "sale"}
            onChange={(e)=>setCategory(e.target.value)}
            />
            &nbsp;For sale <br className="md:hidden" />
            &nbsp;
            <input type="radio" 
            name="selected" 
            value="rent"
            checked={category == "rent"}
            onChange={(e)=>setCategory(e.target.value)}
            />
            &nbsp;For rent
            <br className="md:hidden" />
          </div>
          <div className="border-b-1 mt-3 mb-6"></div>

          {/* property info  */}

          <span className="font-bold text-2xl">PROPERTY INFO</span>
          <div className="text-xl pl-5 mt-3">
            <label className="text-lg">
              Type *
            </label>
            <div className="ml-10 mt-4 space-x-6">
              {["House", "Appartment", "Land", "Plot"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={(e) => setSelectedType(type)}
                  className={`outline w-[150px] h-[35px] rounded-lg ${
                    selectedType == type ? "bg-[#DBEED6]" : ""
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

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

          <span className="font-bold text-2xl">SET A PRICE</span>

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

          <span className="font-bold text-2xl">UPLOAD PHOTOS</span>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-5 md:w-[50%] mt-10 md:ml-20">
            <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-md h-[100px] w-[120px] hover:bg-gray-100">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setPropertyImage(e.target.files[0]);
                  }
                }}
                className="hidden"
              />
              <i className="fa-solid fa-camera text-2xl"></i>
              <span className="text-md">Add Photo</span>
            </label>
          </div>

          <div className="border-b-1 mt-10 mb-6"></div>

          <span className="font-bold text-2xl">
            UPLOAD PROOFS (for verification)
          </span>
          <div className="text-xl pl-5 mt-8">
            <label className="text-lg">Aadhar number*</label>
            <div className=" flex ml-10 mt-4">
              <input
                className="outline w-[60%] pl-4 rounded-lg h-10"
                type="text"
                value={aadharno}
                onChange={(e) => setAadharNo(e.target.value)}
              />

              <label className="flex items-center justify-center border-2 border-dashed rounded-md h-[40px] w-[120px] hover:bg-gray-100 ml-[10px]">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setaadharImage(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
                <i className="fa-solid fa-camera text-xl"></i>
                <span className="text-sm pl-2">Add Photo</span>
              </label>
            </div>
          </div>
          <div className="text-xl pl-5 mt-8">
            <label className="text-lg">Land Tax reciept number *</label>
            <div className=" flex ml-10 mt-4">
              <input
                className="outline w-[60%] pl-4 rounded-lg h-10"
                type="text"
                value={taxno}
                onChange={(e) => setTaxNo(e.target.value)}
              />

              <label className="flex items-center justify-center border-2 border-dashed rounded-md h-[40px] w-[120px] hover:bg-gray-100 ml-[10px]">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setLandtaxImage(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
                <i className="fa-solid fa-camera text-xl"></i>
                <span className="text-sm pl-2">Add Photo</span>
              </label>
            </div>
          </div>

          <div className="text-xl pl-5 mt-8">
            <label className="text-lg">Phone number *</label>
            <div className=" flex ml-10 mt-4">
              <input
                className="outline w-[30%] pl-4 rounded-lg h-10"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <button
              type="submit"
              className="text-2xl bg-[#095B15] w-[300px] p-2 h-[50px] text-center text-white rounded-full "
            >
              Post Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;
