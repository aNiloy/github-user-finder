import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleData }) => {
  const [searchText, setSearchText] = useState("");
  const onSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = () => {
    handleData(searchText);
  };

  return (
    <>
      <div>
        <div className="search d-flex align-items-center justify-content-between">
          <FaSearch />

          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          ></input>

          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
