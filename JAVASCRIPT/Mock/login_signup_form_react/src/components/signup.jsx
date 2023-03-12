import React from "react";
import style from "./signup.module.css";

function Signup() {
  const [input, setInput] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value, // -> this for our data will come form user ist will set in the use state
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and confirmPassword dose not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter the Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "password and confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <div className={style.app}>
      <h4>Password and Confirm Password validation in React</h4>
      <form className={style.form}>
        <input
          type="text"
          name="username"
          placeholder="Enter UserName"
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {/* here we are give error code below input tag  */}
        {error.username && <span className={style.err}>{error.username}</span>}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {/* here we are give error code below input tag  */}
        {error.password && <span className={style.err}>{error.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter confirmPassword"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {/* here we are give error code below input tag  */}
        {error.confirmPassword && (
          <span className={style.err}>{error.confirmPassword}</span>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
