document.querySelector("form").addEventListener("submit", func);

let array=JSON.parse(localStorage.getItem("sign")) || {}

let obj;

async function func(e) {
  e.preventDefault();

  obj = {
    username: form1.username.value,
    email: form1.email.value,
    password: form1.password.value,
  };
  console.log(obj);
   
  localStorage.setItem("sign",JSON.stringify(obj))
  alert("signup succesfull")
  window.location.href="userLogin.html"
}
