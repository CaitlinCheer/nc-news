import { useLocation } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../API";
import { useEffect, useState } from "react";
import Comments from "./Comments";
// import Upvoting from "./Upvoting";
import "./cssFiles/ArticlePage.css";
import ArticleBody from "./ArticleBody";

export default function ArticlePage() {
  const location = useLocation();
  const { id } = location.state;
  const [individualArticle, setIndividualArticle] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      getArticleById(id).then((article) => {
        setIndividualArticle(article);
      });
      getCommentsByArticleId(id).then((articleComments) => {
        setComments(articleComments);
      });
    }
  }, [id]);


  return (
    <section className="article-body">
      <ArticleBody individualArticle={individualArticle}/>
      <Comments comments={comments} individualArticle={individualArticle} />
    </section>
  );
}
