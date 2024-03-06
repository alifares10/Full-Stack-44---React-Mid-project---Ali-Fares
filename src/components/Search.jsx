import React from "react";

const Search = (props) => {
  const handleSearch = (event) => {
    props.filterUsers(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid white",
        margin: "10px",
        padding: "10px",
      }}
    >
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={handleSearch} />
    </div>
  );
};

export default Search;
