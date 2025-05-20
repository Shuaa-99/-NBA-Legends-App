import React from "react";
import TextField from "@mui/material/TextField";

function SearchBar({ setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <TextField
      label="Search by name"
      variant="outlined"
      fullWidth
      onChange={handleChange}
    />
  );
}

export default SearchBar;
