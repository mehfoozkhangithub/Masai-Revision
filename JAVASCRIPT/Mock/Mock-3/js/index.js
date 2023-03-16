let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let object = {
    brandOfCar: document.getElementById("brand_of_car").value,
    manual_or_automatic: document.getElementById("manual_or_automatic").value,
    year: document.getElementById("year").value,
    kilometer: document.getElementById("kilometer").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price"),
  };
});
