import React from "react";

const Table = ({ title, columns, data, renderAction, Error }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl bg-white shadow-2xl space-y-3 mt-15 text-lg text-center max-md:w-[100%] pb-10">
      <span className="text-2xl font-bold mt-3">{title}</span>
      {Error && <p className="text-red-500">{Error}</p>}
      <table className="w-[90%] table-fixed">
        <thead>
          <tr className="border-b border-black/30 bg-[#ECF0F1] h-[50px]">
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {Array.isArray(data) && data.length > 0 ? (
    data.map((details) => (
      <tr key={details._id} className="border-b border-black/30">
        {columns.map((col) => (
          <td key={`${details._id}-${col}`} className="py-3">
            {details[col]}
          </td>
        ))}
        <td>{renderAction && renderAction(details)}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={columns.length + 1} className="py-5 text-gray-500">
        No data available
      </td>
    </tr>
  )}
</tbody>
      </table>
    </div>
  );
};

export default Table;
