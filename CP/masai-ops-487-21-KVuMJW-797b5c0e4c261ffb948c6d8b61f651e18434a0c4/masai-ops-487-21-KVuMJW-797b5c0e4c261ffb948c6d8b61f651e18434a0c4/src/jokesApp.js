


function setJokes(data) {
  // get the joke-container div
  document.getElementById("joke-container").innerHTML=null;
  let div=document.getElementById("joke-container");
  // craete a div and add a p tag in it with class as joke-text
  // console.log(data)

    let div1=document.createElement("div");
    div1.setAttribute("class", "joke-text");
    let p=document.createElement("p");
    p.innerText=data.value;

    div1.append(p)
    div.append(div1)

  

  // append the div to joke-container div
}

let getRandomJoke = async () => {
  // fetch request to get a random joke
  try {
    let res= await fetch(`https://api.chucknorris.io/jokes/random`)
    let data= await res.json()
    setJokes(data)
  } catch (error) {
    console.log(error);
  }
  // return the data on a successfull request
  // return error text on failure
};
getRandomJoke()


let getJokeByCategory = async (event) => {
  event.preventDefault();
  let info=document.getElementById("get-category").value
  // console.log(info)
  //  fetch request to get a random joke by category
  try {
    let res= await fetch(`https://api.chucknorris.io/jokes/random?category=${info}`)
    let data= await res.json()
    setJokes(data)
  } catch (error) {
    console.log(error);
  }
  // return the data ona successfull request
  // return error text on failure
};
window.onload = function () {
  // add click event to button
  document.getElementById("get-jokes-data").addEventListener("click", getRandomJoke)

  // add change event to select tag
 document.getElementById("get-category").addEventListener("change",getJokeByCategory);
 
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
