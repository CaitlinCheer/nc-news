import React from "react";

export default function Filter({ onFilterChange }) {
  function handleSort(e) {
    onFilterChange({ order: e.target.value });
  }
  function handleInput(e) {
    onFilterChange({ sort_by: e.target.value });
  }

  return (
    <label className="filter-button">
      Filter By
      <select onChange={handleInput}>
        <option value="created_at">Date</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="topic">Topic</option>
        Sort By
      </select>
      <select onChange={handleSort}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </label>
  );
}
