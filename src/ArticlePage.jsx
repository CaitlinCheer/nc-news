import { useLocation } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../API";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import "./cssFiles/ArticlePage.css";
import ArticleBody from "./ArticleBody";
import LoadingComponent from "./LoadingComponent.jsx";

export default function ArticlePage() {
  const location = useLocation();
  const { id } = location.state;
  const [individualArticle, setIndividualArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

console.log(comments, "<<")

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getArticleById(id).then((article) => {
        setIndividualArticle(article);
      });
      getCommentsByArticleId(id).then((articleComments) => {
        setComments(articleComments);
        setIsLoading(false);
      });
    }
  }, [id]);

  return (
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
  );
}
