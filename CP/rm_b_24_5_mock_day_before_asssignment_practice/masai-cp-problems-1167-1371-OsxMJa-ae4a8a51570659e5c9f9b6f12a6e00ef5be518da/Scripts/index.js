// Write code related to Home Page

let form = document.querySelector("form");

let data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let object = {
    name: form.name.value,
    number: form.phone.value,
    email: form.email.value,
    category: form.category.value,
    type: form.type.value,
  };
  data.push(object);
  localStorage.setItem("Helpers", JSON.stringify(data));
  form.reset();
  alert("Your data is add...");
});
