/**
** this is my api url -> https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME

*? this is my api key ->  live_ZNQf09iC2gudTcUkr6eh1U0i5IR7LIQSty7X7tMSUBxHyrhQgEXHr7oWy6RP7dVU


*/

let api_key =
  "live_ZNQf09iC2gudTcUkr6eh1U0i5IR7LIQSty7X7tMSUBxHyrhQgEXHr7oWy6RP7dVU";

let page = 1;

let imgDataArr = [];

let catPageLocalStorage = [];

// ! this is for getting image we crete function start

const getImgData = () => {
  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${api_key}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.forEach((element, i) => {
        if (i < 5) imgDataArr.push(element.url);
        else return;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
getImgData();

// ! this is for getting image we crete function end

const dataFetch = (page) => {
  fetch(`http://api.thecatapi.com/v1/breeds?page=${page}&&limit=5`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // console.log(res);
      appendData(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
dataFetch();

// ? Pagination code is below

let getPage = document.getElementById("pageDisplay");

getPage.innerText = page;

let pre = document.getElementById("pre");
pre.addEventListener("click", () => {
  console.log("i am invoking prev");
  if (page > 1) {
    page--;
    dataFetch(page);
    getPage.innerText = page;
  }
});

let next = document.getElementById("next");
next.addEventListener("click", () => {
  console.log("i am invoking next");

  if (page < 1) {
    page++;
    dataFetch(page);
    getPage.innerText = page;
  }
});

const appendData = (data) => {
  let mainContainer = document.getElementById("container");
  mainContainer.innerHTML = "";

  let div = document.createElement("div");
  div.setAttribute("class", "card");

  data.map((el, i) => {
    let img = document.createElement("img");

    img.src = imgDataArr[i];

    let name = document.createElement("h1");
    name.innerText = el.name;

    let description = document.createElement("p");
    description.innerText = el.description;

    let origin = document.createElement("h3");
    origin.innerText = "Origin :" + el.origin;

    let span = document.createElement("h3");
    span.innerText = "Life Span :" + el.weight.imperial;

    let wikipedia = document.createElement("button");
    wikipedia.innerText = "Read More :" + "wikipedia";

    wikipedia.addEventListener("click", () => {
      window.location.href = el.wikipedia_url;
    });

    let viewImageBtn = document.createElement("button");
    viewImageBtn.innerText = "view button";
    viewImageBtn.setAttribute("class", "view_btn");
    viewImageBtn.addEventListener("click", () => {
      myFun(el.id, el);
    });

    let div_sec = document.createElement("div");
    div_sec.setAttribute("class", "card-inner");

    div_sec.append(
      img,
      name,
      description,
      origin,
      span,
      wikipedia,
      viewImageBtn
    );
    div.append(div_sec);
    mainContainer.append(div);
  });
};

// * this for cat page all 10 image of same breed

const getCatPageImg = (id, el) => {
  fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.forEach((element, i) => {
        catPageLocalStorage.push(element.url);
      });

      localStorage.setItem("catData", JSON.stringify(catPageLocalStorage));

      localStorage.setItem("carDataAndInformation", JSON.stringify(el));
    })
    .catch((err) => {
      console.log(err);
    });
};

console.log("this is id image", catPageLocalStorage);

// * this for cat page all 10 image of same breed

const myFun = (id, el) => {
  getCatPageImg(id, el);
};
