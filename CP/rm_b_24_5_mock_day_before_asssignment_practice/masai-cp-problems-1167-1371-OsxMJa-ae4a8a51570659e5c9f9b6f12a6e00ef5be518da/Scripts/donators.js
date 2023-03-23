// Write code related to Donators Page

let dataOfLocalStorage = JSON.parse(localStorage.getItem("Helpers")) || [];

let DataOfDonar = []; //! here we have all the data of donar

for (let i = 0; i < dataOfLocalStorage.length; i++) {
  const element = dataOfLocalStorage[i];
  if (element.type === "Donator") {
    DataOfDonar.push(element);
  }
}

// localStorage.setItem("donar", JSON.stringify(DataOfDonar));

append(DataOfDonar);

function append(data) {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = null;

  data.forEach(function (elem, i) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = elem.name;

    let td2 = document.createElement("td");
    td2.innerText = elem.number;

    let td3 = document.createElement("td");
    td3.innerText = elem.email;

    let td4 = document.createElement("td");
    td4.innerText = elem.category;

    let btn = document.createElement("button");
    btn.setAttribute("class", "delete_btn");
    btn.innerText = "Delete";
    btn.addEventListener("click", () => {
      deleteData(i);
    });

    tr.append(td1, td2, td3, td4, btn);
    document.querySelector("tbody").append(tr);
  });
}
console.log("This is before delete btn", DataOfDonar);

// let donarLs = JSON.parse(localStorage.getItem("donar")) || [];

function deleteData(index) {
  // here we have to apply delete functionality
  console.log(index);

  DataOfDonar = DataOfDonar.splice(index, 1);
  append(DataOfDonar);
}
