import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocus(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
