import React from "react";

const ActionButton = ({ action, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        action == "View"
          ? "border-2 border-green-500 w-[100px] text-green-500 hover:bg-green-100"
          : "border-2 border-red-500 w-[100px] text-red-500 hover:bg-red-100"
      }
    >
      {action}
    </button>
  );
};

export default ActionButton;
