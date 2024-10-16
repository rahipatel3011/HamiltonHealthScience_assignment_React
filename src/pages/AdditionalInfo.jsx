import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import FormCard from "../components/FormCard.jsx";
import { Form, Link, useNavigate } from "react-router-dom";
import { FormContext } from "../store/FormContext.jsx";

function AdditionalInfo() {
  const { dob, hcn, gender, setDob, setHcn, setGender } =
    useContext(FormContext);

  const [dobError, setDobError] = useState(false);
  const [hcnError, setHcnError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const navigate = useNavigate();
  const submitForm = (event) => {
    setDobError("");
    setHcnError("");
    setGender("");
    event.preventDefault();
    const formData = new FormData(event.target);
    const dob = formData.get("dob");
    const hcn = formData.get("hcn");
    const gender = formData.get("gender");
    if (
      dob.trim().length === 0 ||
      hcn.trim().length === 0 ||
      gender.trim().length === 0
    ) {
      if (dob.trim().length === 0) {
        setDobError("Please set Date of birth");
      }

      if (hcn.trim().length === 0) {
        setHcnError("Please set Healthcard Number");
      }

      if (gender.trim().length === 0) {
        setGender("Please set gender");
      }
      return;
    }
    setDob(dob);
    setHcn(hcn);
    setGender(gender);
    navigate("/summary");
  };
  return (
    <FormCard>
      <h1 className="text-xl font-bold mb-4 text-center">
        Additional Information
      </h1>
      <Form onSubmit={submitForm}>
        <FormInput
          label="Date of birth"
          id="dob"
          type="date"
          name="dob"
          defaultValue={dob}
          error={dobError || ""}
        />

        <FormInput
          label="HealthCard Number"
          id="hcn"
          type="number"
          name="hcn"
          defaultValue={hcn}
          error={hcnError || ""}
        />
        <FormInput
          label="Gender"
          id="gender"
          type="select"
          name="gender"
          defaultValue={gender}
          options={["Male", "Female", "Other"]}
          error={genderError || ""}
        />
        <div className="flex justify-center gap-5">
          <Link
          to="/personal-info"
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 hover:text-gray-700"
          >
            Previous
          </Link>

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

export default AdditionalInfo;
