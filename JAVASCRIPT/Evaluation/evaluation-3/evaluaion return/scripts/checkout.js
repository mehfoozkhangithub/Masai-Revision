// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let wal_LS=JSON.parse(localStorage.getItem("amount"))||0;  //walle ls 

let wal=document.getElementById("wallet");

wal.innerText=wal_LS;


// console.log(wal_LS);


let ls=JSON.parse(localStorage.getItem("movie"));  // movie ls where we select paticular movie user select ;

let container=document.getElementById("movie");
container.innerHTML=null;


ls.forEach((el)=>{

    let div=document.createElement("div");

    let name=document.createElement("p");
    name.innerText=el.Title;

    let pic=document.createElement("img");
    pic.src=el.Poster


    let year=document.createElement("p");
    year.innerText=el.Year




    div.append(name,pic,year);

    container.append(div);

})


// console.log(wal_LS);
// console.log(wal);
// console.log(ls);



let con=()=>{

let num=document.getElementById("num").value;

let x=document.getElementById("wallet").innerText;

let y=100*num;


if(x>y){


    document.getElementById("wallet").innerText=x-y;
    alert("Booking SucssesFully .")
}
else{

    alert("Insufficent Balance !")
}

}