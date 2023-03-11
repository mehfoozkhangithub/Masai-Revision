import React from "react";

function Signup() {
  const [input, setInput] = React.useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = React.useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
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
          }
      }
    });
  };

  return (
    <div className="app">
      <h4>Password and Confirm Password validation in React</h4>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Enter UserName"
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
