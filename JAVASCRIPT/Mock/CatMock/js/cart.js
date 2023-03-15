let dataLs = JSON.parse(localStorage.getItem("catData")) || [];

let elementCatData =
  JSON.parse(localStorage.getItem("carDataAndInformation")) || "";

const appendData = () => {
  let mainContainer = document.getElementById("container");
  mainContainer.innerHTML = "";

  let div = document.createElement("div");
  div.setAttribute("class", "card");

  dataLs.map((el, i) => {
    let id = document.createElement("h3");
    id.innerText = elementCatData.id;

    let img = document.createElement("img");

    img.src = dataLs[i];

    let name = document.createElement("h1");
    name.innerText = elementCatData.name;

    let origin = document.createElement("h3");
    origin.innerText = "Origin :" + elementCatData.origin;

    let span = document.createElement("h3");
    span.innerText = "Life Span :" + elementCatData.weight.imperial;

    let favorite = document.createElement("button");
    favorite.innerText = "💓";

    favorite.addEventListener("click", () => {
      myFunc(elementCatData);
    });

    let div_sec = document.createElement("div");
    div_sec.setAttribute("class", "card-inner");

    div_sec.append(img, name, origin, span, favorite);
    div.append(div_sec);
    mainContainer.append(div);
  });
};
appendData();

let favoriteArr = [];

const myFunc = (el) => {
  console.log("i am invoked");
  favoriteArr.push(el);
  localStorage.setItem("favorite", JSON.stringify(favoriteArr));
  alert("Your item is add 💓");
};
