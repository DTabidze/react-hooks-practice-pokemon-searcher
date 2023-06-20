import React from "react";

function Search({handleSearch,search}) {
  console.log (search)
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"  value={search} onChange={(e) => handleSearch(e)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
