import { useEffect, useState } from "react";
import { getAllArticles } from "../../API";
import "../cssFiles/RelatedArticles.css";

export default function RelatedArticles({ topic, id }) {
  const [topicalArticle, setTopicalArticle] = useState([]);

  useEffect(() => {
    if (topic) {
      getAllArticles({ topic }).then((articles) => {
        const filteredArticles = articles.filter(
          (article) => article.article_id !== id
        );
        setTopicalArticle(filteredArticles.slice(0, 4));
      });
    }
  }, [topic, id]);

  return (
    <section className="related-body">
      <h1>Related Articles</h1>
      <ul>
        {topicalArticle.map((article) => {
          return (
            <li key={article.article_id}>
              <b>{article.title}</b>
              <img src={article.article_img_url} />
              <b>{article.votes}</b> votes
            </li>
          );
        })}
      </ul>
    </section>
  );
}
