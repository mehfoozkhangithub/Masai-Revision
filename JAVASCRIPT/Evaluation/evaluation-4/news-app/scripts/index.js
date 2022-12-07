/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let ls=JSON.parse(localStorage.getItem("user"))||[];

function data(p,n,e,c){


    this.image=p;
    this.name=n;
    this.email=e;
    this.country=c;

}

let signup=()=>{


let pic=document.getElementById("image").value;
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let country=document.getElementById("country").value;


let x=new data(pic,name,email,country)
ls.push(x);

localStorage.setItem("user",JSON.stringify(ls));

document.getElementById("image").value=null;
document.getElementById("name").value=null;
document.getElementById("email").value=null;
document.getElementById("country").value=null;


}