let Ls = JSON.parse(localStorage.getItem("favrouites"));
let main = document.getElementById("container");

const appendData = (ls) => {
  main.innerHTML = "";
  ls.map((ele, index) => {
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

appendData(Ls);
