import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function SearchForTopics({ allArticles, setFilteredArticles }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    setFilteredArticles(
      allArticles.filter((article) => article.topic === inputValue)
    )
   
  }

  return (
    <>
      <TextField
        className="search-for-topics"
        onChange={handleChange}
        id="outlined-basic"
        label="Search for Topics"
        variant="outlined"
      />
      <button onClick={handleClick}>Search</button>
    </>
  );
}
