// fill in javascript code here

document.querySelector("form").addEventListener("submit",myFunc);

function myFunc(event){
    event.preventDefault();
    // console.log("vhj")

    var Ename = document.querySelector("#name").value;
    var Eid  =  document.querySelector("#employeeID").value;
    var department = document.querySelector("#department").value;
    var  experience = document.querySelector("#exp").value;
    var  Email = document.querySelector("#email").value;
    var mobile = document.querySelector("#mbl").value;
    // console.log(Ename,Eid,department,Experience,Email,mobile)


    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = Ename;
    
    var td2 = document.createElement("td")
    td2.innerText = Eid;

    var td3 = document.createElement("td")
    td3.innerText = department;

    var td4 = document.createElement("td")
    td4.innerText = experience;

    var td5 = document.createElement("td")
    td5.innerText = Email;

    var td6 = document.createElement("td")
    td6.innerText = mobile;

    var td7 = document.createElement("td")
    if(experience > 5 ){
        td7.innerText = "Senior"
    }else if(experience>=2 && experience<=5){
       td7.innerText = "Junior"
    }else if (experience>=1){
        td7.innerText = "Fresher"
    }

    var td8 = document.createElement("td");
    td8.innerText = "DELETE";
    td8.style.backgroundColor = "red";
    td8.style.cursor = "pointer";
    td8.addEventListener("click",del)


    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr)

}

function del (event){
    event.target.parentNode.remove();
}