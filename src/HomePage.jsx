import { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent.jsx";
import { getAllArticles } from "../API";
import "./cssFiles/HomePage.css";
import ArticleCard from "./ArticlePages/ArticleCard";
import SideBarA from "./SideBarA.jsx";
import SearchForTopics from "./SearchForTopics.jsx";
import SideBarT from "./SideBarT.jsx";
import Filter from "./Filter.jsx";

export default function HomePage() {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterInput, setFilterInput] = useState("created_at");
  const [sortInput, setSortInput] = useState("desc");

  useEffect(() => {
    setIsLoading(true);
    getAllArticles({ sort_by: filterInput, order: sortInput }).then(
      (articles) => {
        setAllArticles(articles);
        setFilteredArticles(articles.slice(0, 5));
        setIsLoading(false);
      }
    );
  }, [filterInput, sortInput]);

  function handleChange({ sort_by, order }) {
    setFilterInput(sort_by || filterInput);
    setSortInput(order || sortInput);
  }

  function loadMore() {
    setFilteredArticles(allArticles);
  }


  return (
    <section className="articles">
      <SideBarA allArticles={allArticles} />
      <SideBarT setAllArticles={setAllArticles} />
      <div className="home-page-mini-header">
        <SearchForTopics
          allArticles={allArticles}
          setAllArticles={setAllArticles}
        />
        <Filter onFilterChange={handleChange} />
      </div>
      <h4>Check out our latest articles...</h4>

      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <ul className="articles-list">
            {filteredArticles.map((article) => (
              <li key={article.article_id}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>

          {allArticles.length > 5 && (
            <button onClick={loadMore}>Load More</button>
          )}
        </>
      )}
    </section>
  );
}
