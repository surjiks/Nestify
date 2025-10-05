import React, { useEffect, useState } from "react";
import Table from "./Table";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";

const FeedbackTable = () => {
  const [feedback, setFeedback] = useState([]);
  const [error, setError] = useState("");
  const [refresh,setRefresh] = useState(false)
  
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch("/api/AFeedback");
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.msg || "Something went wrong !");
        }
        setFeedback(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchFeedback();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/DeleteFeedback/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.msg || "Failed to delete feedback");
      }
      alert(data.msg);
      setRefresh(prev=>!prev)

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Table
      Error={error}
      title="Feedback"
      columns={["Name", "Email", "Feedback"]}
      data={feedback}
      renderAction={(details) => (
        <ActionButton 
        action="Delete" 
        onClick={() => handleDelete(details._id)} 
        />
      )}
    />
  );
};

export default FeedbackTable;
