import { useLocation, useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../../API.js";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments.jsx";
import "../cssFiles/ArticlePage.css";
import ArticleBody from "./ArticleBody.jsx";
import LoadingComponent from "../LoadingComponent.jsx";
import RelatedArticles from "./RelatedArticles.jsx";

export default function ArticlePage() {
  const location = useLocation();
  const { article_id } = useParams();
  const [individualArticle, setIndividualArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (article_id) {
      getArticleById(article_id).then((article) => {
        setIndividualArticle(article);
      });
      getCommentsByArticleId(article_id).then((articleComments) => {
        setComments(articleComments);
        setIsLoading(false);
      });
    }
  }, [article_id]);

  return (
    <section className="article-page">
      <section className="article-body">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <section>
            <ArticleBody individualArticle={individualArticle} />
            <Comments
              comments={comments}
              individualArticle={individualArticle}
              setComments={setComments}
            />
          </section>
        )}
      </section>
      <RelatedArticles
        topic={individualArticle.topic}
        id={individualArticle.article_id}
      />
    </section>
  );
}
