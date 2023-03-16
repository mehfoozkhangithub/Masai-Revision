let jaat = JSON.parse(localStorage.getItem("catData")) || "";

let favData = JSON.parse(localStorage.getItem("favorites")) || [];

let container = document.getElementById("container");

const getData = async (page) => {
  try {
    let res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&bread_ids=${bread.id}`
    );

    data = await res.json();
    console.log(data);
    // data = data[0].breeds

    appendData(data);
  } catch (error) {
    console.log(error);
  }
};

const append = (value) => {
  container.innerHTML = "";

  value.forEach(() => {
    let box = document.createElement("div");
    box.setAttribute("class", "box;");

    let img = document.createElement("img");
    img.src = el.url;

    let btn = document.createElement("button");
    btn.innerText = "Add to Favourit";

    btn.addEventListener("click", () => {
      favData.push(el);
      localStorage.setItem("favorite", JSON.stringify(favData));
      alert("Add to Favourites");
    });

    box.append(img, btn);
    container.append(box);
  });
};
