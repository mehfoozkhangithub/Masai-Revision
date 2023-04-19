import React from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ placeholder, data }) => {
  console.log("this is the data in search.jsx", data);
  return (
    <>
      <div className="main">
        <div className="d-flex justify-contents-center aligns-items-center searchInput pt-3 pb-2 ">
          <input
            type="text"
            placeholder={placeholder}
            className="search p-1 w-50 rounded"
          />
          <div className="searchIcons">
            <SearchIcon />
          </div>
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
