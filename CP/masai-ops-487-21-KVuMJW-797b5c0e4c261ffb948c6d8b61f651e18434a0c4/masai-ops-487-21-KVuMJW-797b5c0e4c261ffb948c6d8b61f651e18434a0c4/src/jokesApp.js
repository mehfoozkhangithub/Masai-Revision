


function setJokes(data) {
  // get the joke-container div
  
    document.getElementById("joke-container").innerHTML=null;
    let div=document.getElementById("joke-container");
    // craete a div and add a p tag in it with class as joke-text
    // console.log(data)
  
      let div1=document.createElement("div");
      let p=document.createElement("p");
      p.setAttribute("class", "joke-text");
      p.textContent=data.value;
  
      div1.append(p)
      div.append(div1)
  
   
    
  }

  

  // append the div to joke-container div


let getRandomJoke = async () => {
  // fetch request to get a random joke
  try {
    let res= await fetch(`https://api.chucknorris.io/jokes/random`)
    let data= await res.json()
    return data
  } catch (error) {
    return "something went wrong";;
  }
  // return the data on a successfull request
  // return error text on failure
};


let getJokeByCategory = async (event) => {
  
  //  fetch request to get a random joke by category
  let category_name=event.target.value
  try {
    let res= await fetch(`https://api.chucknorris.io/jokes/random?category=${category_name}`)
    let data= await res.json()
    return(data)
  } catch (error) {
    return "something went wrong";;
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
