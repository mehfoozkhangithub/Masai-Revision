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
      label: "User Name ",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "User email",
      label: "User email ",
    },
    {
      id: 3,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name ",
    },
    {
      id: 4,
      name: "MobileNumber",
      type: "number",
      placeholder: "mobile Number",
      label: "Mobile Number ",
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
        {input.map((inputs) => (
          <FormInput
            key={inputs.id} // this will handle for react id
            {...input} // this is for our all data
            value={values[inputs.name]} //
            onChange={onChange} // this will handle event change on form
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
