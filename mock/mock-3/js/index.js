let page = 1;

let main = document.getElementById("container");
let data;

const getData = async (page) => {
  try {
    let res = await fetch(
      `https:api.thecatapi.com/v1/breeds?page=${page}&&limit=5`
    );

    data = await res.json();
    console.log(data);
    // data = data[0].breeds

    appendData(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
let page_w = document.getElementById("page");
page_w.innerText = page;

let pre = document.getElementById("pre");
pre.addEventListener("click", function () {
  if (page > 1) {
    page--;
    getData(page);
    page_w.innerText = page;
  }
});

let next = document.getElementById("next");

next.addEventListener("click", function () {
  if (page < 4) {
    page++;
    getData(page);
    page_w.innerText = page;
  }
});

const appendData = (data) => {
  // console.log(data)

  main.innerHTML = "";
  data.map((ele, index) => {
    console.log(ele);
    let div = document.createElement("div");
    div.setAttribute("class", "alldatadiv");

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");
    let img = document.createElement("img");
    img.src =
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg";
    imgDiv.append(img);

    let breed = document.createElement("h1");
    breed.textContent = ele.name;

    let des = document.createElement("p");
    des.textContent = ele.description;

    let origin = document.createElement("p");
    origin.textContent = "Origin :" + ele.origin;

    let temp = document.createElement("p");
    temp.textContent = ele.temperament;

    let life = document.createElement("p");
    life.innerText = "Life Spain :" + ele.weight.metric;

    let wiki = document.createElement("button");
    wiki.innerText = "wikipedia_url";
    wiki.href = ele.wikipedia_url;

    let wish = document.createElement("p");
    wish.textContent = "❤";
    wish.onclick = () => {
      favrouitesItem(ele);
    };

    let divCat = document.createElement("div");
    divCat.setAttribute("class", "divCat");
    divCat.append(breed, des, origin, temp.life, wiki, wish);

    div.append(imgDiv, divCat);
    main.append(div);
  });
};

const favrouitesItem = (item) => {
  let wish = JSON.parse(localStorage.getItem("favrouites")) || [];
  console.log(wish);

  wish.push(item);

  localStorage.setItem("favrouites", JSON.stringify(wish));
  alert("Item added to favrouite");
};
