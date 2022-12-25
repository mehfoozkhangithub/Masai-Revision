document.querySelector("form").addEventListener("submit", func);
// let cost=document.getElementById("cost").value;
// console.log(cost)


let obj;

async function func(e) {
  e.preventDefault();

  obj = {
    image: form1.image.value,
    name: form1.name.value,
    author: form1.author.value,
    genere: form1.genere.value,
    edition: form1.edition.value,
    publish: form1.publish.value,
    cost: Number(form1.cost.value),
    borrow: JSON.parse(form1.borrow.value),
  };
  console.log(obj);
  let res = await fetch(`https://live-api.onrender.com/data`, {
    method: "POST", // in thise we send body
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // window.location.reload();
}

