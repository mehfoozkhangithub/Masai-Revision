import React from "react";

async function Search() {
  let key = process.env.REACT_APP_URL;

  try {
    const data = await fetch(key);
    let ans = await data.json();
    console.log(ans);
  } catch (error) {
    console.log(error);
  }

  return <div>Search</div>;
}

export default Search;
