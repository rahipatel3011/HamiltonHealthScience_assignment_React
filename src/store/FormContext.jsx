import React, { useState } from "react";
import { createContext } from "react";


export const FormContext  = createContext();

function FormProvider ({children}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [hcn, setHcn] = useState("");
  const [gender, setGender] = useState("");

  return (
    <FormContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        dob,
        setDob,
        hcn,
        setHcn,
        gender,
        setGender
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider ;
