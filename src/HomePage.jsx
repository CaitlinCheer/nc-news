import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { getAllArticles } from "../API";
import "./css files/HomePage.css";

export default function HomePage() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setAllArticles(articles);
    });
  });

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

      <ul className="articles-list">
        {allArticles.map((articles) => {
          return (
            <li>
              <section className="articles-info">
                <h3>{articles.title}</h3>
                <h5>By: {articles.author}</h5>
                <p>Votes: {articles.votes}</p>
              </section>
              <img src={articles.article_img_url} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
