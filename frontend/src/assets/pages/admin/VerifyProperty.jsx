import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VerifyProperty = () => {
  const [property, setProperty] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState({});

  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`/api/SelectedProperty/${id}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.msg || "Something went wrong");
        }
        setProperty(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`/api/PropertyImages/${id}`);
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, [id]);


  const handleAction = async(id, action) =>{
    try {
      const res = await fetch(`/api/${action}/${id}`,{
      method: 'POST',
      credentials: 'include'
    })
    const data = await res.json();
    if(res.ok){
      alert(`Property ${action === "ApproveProperty" ? "Approved" : "Rejected"}`)
      navigate('/admin')
    }else{
      alert(data.msg || "Something went wrong")
      navigate('/admin')
    }
    } catch (error) {
      console.log(error);
      
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div class="absolute top-30 md:left-70 md:w-[70%] bg-white md:h-[170vh] max-md:h-[220vh] shadow-2xl p-5 ">
      <span class="text-3xl font-bold pl-5">Property Approval</span>
      <br />
      <span class="pl-5">
        Review the details and documents to proceed with approval.
      </span>
      <div class="w-full h-50 mt-5 p-5">
        <span class="text-xl font-bold md:pl-40">Property Details</span>
        <div class="flex flex-col justify-center items-center mt-10">
          <img
            class="w-[70%] h-[45vh] object-cover rounded-2xl"
            src={`data:image/jpeg;base64,${images.PropertyImage}`}
            alt="Property"
          />
        </div>
        <div class="text-xl md:pl-40 mt-10">
          <span>
            <b>Title:</b> {property.Title}
          </span>
          <br />
          <span>
            <b>Location:</b>
            {property.area}, {property.city}
          </span>
          <br />
          <span>
            <b>Price:</b>
            {property.Price}
          </span>
        </div>
        <div class="border-b mt-5"></div>
        <div class="text-xl md:pl-40 mt-10">
          <span class="font-bold text-2xl">Owner Information</span>
          <br />
          <br />
          <span>
            <b>Name:</b>
            {property.userName}
          </span>
          <br />
          <span>
            <b>Aadhar No:</b>
            {property.AadharNo}
          </span>
          <br />
          <span>
            <b>Phone:</b>
            {property.Phone}
          </span>
        </div>
        <div class="border-b mt-10"></div>
        <div class="text-xl md:pl-40 mt-10">
          <span class="font-bold text-2xl">Documents</span>
          <br />
          <br />
          <div class="md:flex justify-around w-[70%] md:ml-30">
            <div>
              <span>Land Tax Reciept</span>
              <img
                class="h-[200px] mt-5"
                src={`data:image/jpeg;base64,${images.TaxReceipt}`}
                alt="Tax Receipt"
              />
            </div>
            <div>
              <span>Aadhar Card</span>
              <img
                class="h-[200px] mt-5"
                src={`data:image/jpeg;base64,${images.AadharCard}`}
                alt="Aadhar"
              />
            </div>
          </div>
        </div>
        <div class="border-b mt-10"></div>
        <div class="flex justify-center mt-15">
          <div class="text-xl text-white space-x-5">
            
              <button class="bg-red-500 p-1 w-[120px] rounded-lg" onClick={()=>handleAction(id , "RejectProperty")}>
                <i class="fa-solid fa-x text-sm"></i> Reject
              </button>

              <button class="bg-blue-500 p-1 w-[120px] rounded-lg" onClick={()=>handleAction(id , "ApproveProperty")}>
                <i class="fa-solid fa-check text-sm"></i> Approve
              </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyProperty;
