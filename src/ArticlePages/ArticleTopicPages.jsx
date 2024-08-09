import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles } from "../../API";
import ArticleCard from "./ArticleCard";
import "../cssFiles/ArticlesByTopic.scss";

export default function ArticleTopicPages() {
  const { topic } = useParams();
  const [articlesByTopic, setArticlesByTopic] = useState([]);

  useEffect(() => {
    if (topic) {
      getAllArticles({ topic }).then((articles) => {
        setArticlesByTopic(articles);
      });
    }
  });

  return (
    <div className="articles-by-topic-page">
      <h2>{topic}</h2>
      {articlesByTopic.map((article) => {
        return (
          <li key={article.article_id}>
            <ArticleCard article={article} />
          </li>
        );
      })}
    </div>
  );
}
