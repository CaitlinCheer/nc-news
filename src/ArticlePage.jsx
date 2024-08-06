import { useLocation } from "react-router-dom";
import { getArticleById } from "../API";
import { useEffect, useState } from "react";
import "./cssFiles/ArticlePage.css";

export default function ArticlePage() {
  const location = useLocation();
  const { id } = location.state;
  const [individualArticle, setIndividualArticle] = useState([]);

  function formatDate(isoString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    if (id) {
      getArticleById(id).then((article) => {
        setIndividualArticle(article);
      });
    }
  }, []);

  return (
    <section className="article">
      <img
        src={individualArticle.article_img_url}
      />
      <div className="body-content">
        <h1>{individualArticle.title}</h1>
        <h2>By {individualArticle.author}</h2>
        <b>{individualArticle.body}</b>
        <h3>{individualArticle.created_at ? formatDate(individualArticle.created_at) : ''}</h3>
        <button>Upvote</button>
      </div>
    </section>
  );
}
