import React from "react";

function FormCard({children}) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
        {children}
      </div>
    </div>
  );
}

export default FormCard;
