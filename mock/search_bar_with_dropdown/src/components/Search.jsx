import React from "react";
import "../App.css";

const Search = ({ placeholder, data }) => {
  return (
    <>
      <div className="main">
        <div className="searchInput pt-3 pb-2">
          <input
            type="text"
            placeholder={placeholder}
            className="search p-1 w-50 rounded"
          />
        </div>
        <div className="dataInput"></div>
      </div>
      {/* <ul className="list">
        <li className="listItem">Mehfooz</li>
        <li className="listItem">Irfan</li>
        <li className="listItem">khan</li>
      </ul> */}
    </>
  );
};

export default Search;
