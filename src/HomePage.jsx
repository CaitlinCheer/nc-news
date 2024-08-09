import { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent.jsx";
import { getAllArticles } from "../API";
import "./cssFiles/HomePage.css";
import ArticleCard from "./ArticlePages/ArticleCard";
import SideBarA from "./SideBarA.jsx";
import SearchForTopics from "./SearchForTopics.jsx";
import SideBarT from "./SideBarT.jsx";

export default function HomePage() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((articles) => {
      setAllArticles(articles);
      setIsLoading(false);
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
      <SideBarA allArticles={allArticles} />
      <SideBarT setAllArticles={setAllArticles}/>
      <div className="home-page-mini-header">
        <SearchForTopics
          allArticles={allArticles}
          setAllArticles={setAllArticles}
        />
        <h2>Filter</h2>
      </div>
      <h4>Check out our latest articles...</h4>

      {isLoading ? (
        <LoadingComponent />
      ) : (
        <ul className="articles-list">{listItems}</ul>
      )}
    </section>
  );
}
