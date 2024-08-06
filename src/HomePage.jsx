import { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import { getAllArticles } from "../API";
import "./cssFiles/HomePage.css";
import ArticleCard from "./ArticleCard";

export default function HomePage() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setAllArticles(articles);
    });
  }, []);

  const listItems = [];
  for (let i = 0; i < Math.min(5, allArticles.length); i++) {
    listItems.push(
      <li key={allArticles[i].article_id} id={allArticles[i].article_id}>
        <ArticleCard article={allArticles[i]} />
      </li>
    );
  }

  return (
    <section className="articles">
      <div className="home-page-mini-header">
        <TextField
          id="outlined-basic"
          label="Search for Topics"
          variant="outlined"
        />
        <button>Filter</button>
      </div>
      <h4>Check out our latest articles...</h4>

      <ul className="articles-list">{listItems}</ul>
    </section>
  );
}
