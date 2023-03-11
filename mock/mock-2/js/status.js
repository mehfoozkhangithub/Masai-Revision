let DataLs = JSON.parse(localStorage.getItem("detail"));

let grantArr = JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejectArr = JSON.parse(localStorage.getItem("admission-rejected")) || [];

displayTable(DataLs);

function displayTable(DataLs) {
  console.log("data", DataLs);
  DataLs.forEach(function (elem) {
    let s = new Date(elem.leaveStartDate);

    let e = new Date(elem.leaveEndDate);

    var diff = e.getTime() - s.getTime();

    var dayDiff = diff / (1000 * 60 * 60 * 24);

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");

    td1.innerText = elem.id;

    let td2 = document.createElement("td");

    td2.innerText = elem.name;

    let td3 = document.createElement("td");

    td3.innerText = dayDiff + "Days";

    let td4 = document.createElement("td");
    td4.innerText = elem.position;

    let td5 = document.createElement("td");
    td5.innerText = "Granted";
    td5.style.backgroundColor = "green";

    tr.append(td1, td2, td3, td4, td5);
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
