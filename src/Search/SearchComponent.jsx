import userEvent from "@testing-library/user-event";
import React from "react";

const SearchComponent = ({ callback }) => {
  const handleInputChange = (e) => {
    callback(e.target.value);
  };

  return (
    <div>
      Search: <input type="text" onChange={handleInputChange} />
      <br/>

    
    </div>
  );
};

export default SearchComponent;
