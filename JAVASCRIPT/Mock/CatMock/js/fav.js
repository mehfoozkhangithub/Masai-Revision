let dataLs = JSON.parse(localStorage.getItem("catData")) || [];

let favDataLs = JSON.parse(localStorage.getItem("favorite")) || [];

const appendData = () => {
  let mainContainer = document.getElementById("container");
  mainContainer.innerHTML = "";

  let div = document.createElement("div");
  div.setAttribute("class", "card");

  favDataLs.map((el, i) => {
    let id = document.createElement("h3");
    id.innerText = el.id;

    let img = document.createElement("img");

    img.src = dataLs[i];

    let name = document.createElement("h1");
    name.innerText = el.name;

    let origin = document.createElement("h3");
    origin.innerText = "Origin :" + el.origin;

    let span = document.createElement("h3");
    span.innerText = "Life Span :" + el.weight.imperial;

    let favorite = document.createElement("button");
    favorite.innerText = "Delete";

    favorite.addEventListener("click", () => {
      myFunc(i);
    });

    let div_sec = document.createElement("div");
    div_sec.setAttribute("class", "card-inner");

    div_sec.append(img, name, origin, span, favorite);
    div.append(div_sec);
    mainContainer.append(div);
  });
};
appendData();

const myFunc = (i) => {
  console.log("this is  index", i);
  favDataLs.splice(i, 1);
  localStorage.key("favorite");
  appendData();
};
