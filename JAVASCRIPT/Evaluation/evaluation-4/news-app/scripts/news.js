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
let hii=JSON.parse(localStorage.getItem("data"))||[];
console.log(hii);
let container=document.getElementById("detail_news");
//container.innerHTML=null;

 // console.log(element);
 let div=document.createElement("div");
 div.setAttribute("class","news");

 
 let img=document.createElement("img");
 img.src=hii.urlToImage;
 let title=document.createElement("p");
 title.innerText=hii.title;
 let author=document.createElement("p");
 author.innerText=hii.author;
 div.append(img,title,author);
 container.append(div);
