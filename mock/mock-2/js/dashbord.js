let DataLs = JSON.parse(localStorage.getItem("detail"));

let grantArr = JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejectArr = JSON.parse(localStorage.getItem("admission-rejected")) || [];

displayTable(DataLs);

function displayTable(DataLs) {
  DataLs.forEach(function (elem) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");

    td1.innerText = elem.name;

    let td2 = document.createElement("td");
    td2.innerText = elem.regionLeave;

    let td3 = document.createElement("td");

    td3.innerText = elem.designation;

    let td4 = document.createElement("td");

    td4.innerText = elem.leaveStartDate;

    let td5 = document.createElement("td");

    td5.innerText = elem.leaveEndDate;

    let td6 = document.createElement("td");

    td6.innerText = elem.position;

    let btn_1 = document.createElement("button");

    btn_1.innerText = "Grant Leave";
    btn_1.style.backgroundColor = "green";
    btn_1.addEventListener("click", function () {
      grantLeaveFun(elem);
    });

    let btn_2 = document.createElement("button");

    btn_2.innerText = "Reject Leave";
    btn_2.style.backgroundColor = "red";

    btn_2.addEventListener("click", function () {
      rejectLeaveFun(elem);
    });

    tr.append(td1, td2, td3, td4, td5, td6, btn_1, btn_2);
    document.querySelector("tbody").append(tr);
  });

  function grantLeaveFun(elem) {
    grantArr.push(elem);

    localStorage.setItem("admission-accepted", JSON.stringify(grantArr));
  }

  function rejectLeaveFun(elem) {
    rejectArr.push(elem);
    localStorage.setItem("admission-rejected", JSON.stringify(rejectArr));
  }
}
