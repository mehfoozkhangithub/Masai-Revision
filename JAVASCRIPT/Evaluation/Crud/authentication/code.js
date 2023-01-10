let Register = async () => {
  //collect all the data
  let register_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };
  let res = await fetch(
    "https://masai-api-mocker.herokuapp.com/auth/register",
    {
      method: "POST",
      body: JSON.stringify(register_data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data = await res.json();
  console.log("data:", data);
};

let Login = async () => {
  let login_data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",

    body: JSON.stringify(login_data),

    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  //get profile when login is sucessfull
  // let username=login_data.username(normal way)
  let { username } = login_data;
  let { token } = data;
  getProfile(username, token);
  console.log("data:", data);
};

//get  data from server
let getProfile = async (username, token) => {
  //username
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = await res.json();
  let log = document.getElementById("navbar");
  var doo = (log.innerText = `hello mr ${data.name}`);
  console.log("data:", data);
};
