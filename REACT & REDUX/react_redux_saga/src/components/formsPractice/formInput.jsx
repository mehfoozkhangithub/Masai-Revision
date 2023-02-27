import React from "react";
import "./formInput.module.css";
const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onchange} />
    </div>
  );
};

export default FormInput;
