import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import FormCard from "../components/FormCard.jsx";
import { Form, useNavigate } from "react-router-dom";
import { FormContext } from "../store/FormContext.jsx";

function PersonalInfo() {
  const { firstName, lastName, setFirstName, setLastName } =
    useContext(FormContext);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const navigate = useNavigate();

  // handle form submit
  const submitForm = (event) => {
    event.preventDefault();
    setFirstNameError("");
    setLastNameError("");
    const formData = new FormData(event.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    if(firstName.trim().length === 0 || lastName.trim().length === 0){
      if(firstName.trim().length === 0){
        setFirstNameError("First name required");
      }
      if(lastName.trim().length === 0){
        setLastNameError("Last name required");
      }
      return;
    }

    setFirstName(firstName);
    setLastName(lastName);
    navigate("/additional-info");
  };

  return (
    <FormCard>
      <h1 className="text-xl font-bold mb-4 text-center">
        Personal Information
      </h1>
      <Form onSubmit={submitForm}>
        <FormInput
          label="First Name"
          id="firstName"
          type="text"
          name="firstName"
          defaultValue={firstName}
          error={firstNameError || ""}
        />

        <FormInput
          label="Last Name"
          id="lastName"
          type="text"
          name="lastName"
          defaultValue={lastName}
          error={lastNameError || ""}
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 hover:text-gray-700"
          >
            Next
          </button>
        </div>
      </Form>
    </FormCard>
  );
}

export default PersonalInfo;
