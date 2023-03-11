document.querySelector("form").addEventListener("submit", func);
let storeData = [];
let data;
function func(e) {
  e.preventDefault();
  data = {
    id: "id" + Math.random().toString(6).slice(2),
    name: form_1.name.value,
    regionLeave: form_1.leaveResion.value,
    designation: form_1.select_desig.value,
    leaveStartDate: form_1.start_date.value,
    leaveEndDate: form_1.end_date.value,
    position: form_1.position.value,
    status: "",
  };
  storeData.push(data);
  localStorage.setItem("detail", JSON.stringify(storeData));
}
