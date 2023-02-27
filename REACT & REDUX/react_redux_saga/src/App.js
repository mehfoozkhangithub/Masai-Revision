import React, { useState } from "react";
import FormInput from "./components/formsPractice/formInput";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    fullName: "",
    MobileNumber: "",
  });

  const input = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "User Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't connect with special characters",
      label: "User Name ",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "User email",
      errorMessage: "It should be a valid email address!",
      required: true,
      label: "User email ",
    },
    {
      id: 3,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "enter full name properly",
      label: "Full Name ",
    },
    {
      id: 4,
      name: "MobileNumber",
      type: "number",
      placeholder: "mobile Number",
      errorMessage: "enter 10 digit number",
      required: true,
      label: "Mobile Number ",
    },
    {
      id: 4,
      name: "Password",
      type: "text",
      placeholder: "Password",
      errorMessage: "enter 10 digit number",
      required: true,
      label: "Password",
      pattern:
        "(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",

      /*  if  i want to confirm password filed want copy all password obj and just add on pattern value.password come from state data store */
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); // this is handling the refreshing multi[le pages
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }); // this is for setting the value
  };
  console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {input.map((inputs) => (
          <FormInput
            key={inputs.id} // this will handle for react id
            {...inputs} // this is for our all data
            value={values[inputs.name]} //
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
