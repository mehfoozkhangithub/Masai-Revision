//import navbar from "../component/navbar.js";
//document.querySelector("#navbar").innerHTML=navbar();
document.querySelector("form").addEventListener("submit",main);
function main(event)
{
  event.preventDefault();
  let query=document.getElementById("search_box").value;
  getdata(query);
}
let getdata=async(query)=>
{
  const url=`https://masai-mock-api-2.herokuapp.com/news?q=${query}`;
  let res=await fetch(url);
  let data=await res.json();
 console.log(data);
  kuku(data.articles);
}
let kuku=(data)=>
{
//console.log(data);
let container=document.getElementById("news_result");
 container.innerHTML=null;
data.forEach(element => {
 let div=document.createElement("div");
 div.setAttribute("class","news");
 div.addEventListener("click",function()
 {
    book(element);
 }
 )
 let img=document.createElement("img");
 img.src=element.urlToImage;
 let title=document.createElement("p");
 title.innerText=element.title;
 let author=document.createElement("p");
 author.innerText=element.author;
 div.append(img,title,author);
 container.append(div);
});
}
let india=async()=>

{
const url=`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`
let res=await fetch(url);
let data=await res.json();
dada(data.articles);
}
let usa=async()=>

{
const url=`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`
let res=await fetch(url);
let data=await res.json();
dada(data.articles);
}

let china=async()=>

{
const url=`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`
let res=await fetch(url);
let data=await res.json();
dada(data.articles);
}

let uk=async()=>

{
const url=`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`
let res=await fetch(url);
let data=await res.json();
dada(data.articles);
}

let newz=async()=>

{
const url=`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`
let res=await fetch(url);
let data=await res.json();
dada(data.articles);
}

let dada=(data)=>
{
// console.log(data);
let container=document.getElementById("news_result");
container.innerHTML=null;
data.forEach(element => {
  console.log(element);
 let div=document.createElement("div");
 div.setAttribute("class","news");
 div.addEventListener("click",function()
 {
    book(element);
 }
 )
 let img=document.createElement("img");
 img.src=element.urlToImage;
 let title=document.createElement("p");
 title.innerText=element.title;
 let author=document.createElement("p");
 author.innerText=element.author;
 div.append(img,title,author);
 container.append(div);
});  
}
let dataarry=JSON.parse(localStorage.getItem("user"))||[];
let side=document.getElementById("sidebar");
dataarry.forEach(function(element)
{
  let div=document.createElement("div");
 div.setAttribute("class","news");

 let img=document.createElement("img");
 img.src=element.pic;
 let title=document.createElement("p");
 title.innerText=element.name;
 let author=document.createElement("p");
 author.innerText=element.country;

 div.append(img,title,author);
 side.append(div);
})
let data=[]
let book=(element)=>
{
 console.log(element);

 
 localStorage.setItem("data",JSON.stringify(element));
 window.location.href="news.html";
}