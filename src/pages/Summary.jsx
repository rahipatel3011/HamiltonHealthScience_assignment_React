import React, { useContext } from "react";
import FormInput from "../components/FormInput";
import FormCard from "../components/FormCard.jsx";
import { Form, Link, useNavigate } from "react-router-dom";
import { FormContext } from "../store/FormContext.jsx";

function Summary() {
  const { dob, hcn, gender, firstName, lastName } =
    useContext(FormContext);

  return (
    <FormCard>
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Personal Information</h1>
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <label className="block text-gray-700 font-medium">First Name:</label>
            <p className="text-lg font-semibold text-gray-900">{firstName }</p>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <label className="block text-gray-700 font-medium">Last Name:</label>
            <p className="text-lg font-semibold text-gray-900">{ lastName }</p>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <label className="block text-gray-700 font-medium">Date of Birth:</label>
            <p className="text-lg font-semibold text-gray-900">{dob}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <label className="block text-gray-700 font-medium">Health Card Number:</label>
            <p className="text-lg font-semibold text-gray-900">{ hcn }</p>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <label className="block text-gray-700 font-medium">Gender:</label>
            <p className="text-lg font-semibold text-gray-900">{ gender }</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/personal-info" className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 hover:text-gray-700">
            Edit Information
          </Link>
        </div>
      </FormCard>
  )
}

export default Summary