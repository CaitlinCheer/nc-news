import { useLocation } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../API";
import { useEffect, useState } from "react";
import "./cssFiles/ArticlePage.css";

export default function ArticlePage() {
  const location = useLocation();
  const { id } = location.state;
  const [individualArticle, setIndividualArticle] = useState([]);
  const [comments, setComments] = useState([]);

  function formatDate(isoString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoString).toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    if (id) {
      getArticleById(id).then((article) => {
        setIndividualArticle(article);
      });
      getCommentsByArticleId(id).then((articleComments) => {
        console.log(articleComments, "<<<");
        setComments(articleComments);
      });
    }
  }, [id]);
  console.log(comments);

  return (
    <section className="article-body">
      <section className="article">
        <img src={individualArticle.article_img_url} />
        <div className="body-content">
          <h1>{individualArticle.title}</h1>
          <h2>By {individualArticle.author}</h2>
          <b>{individualArticle.body}</b>
          <h3>
            {individualArticle.created_at
              ? formatDate(individualArticle.created_at)
              : ""}
          </h3>
          <button>Upvote</button>
        </div>
      </section>

      <div className="comments-body">
        <h2>Comments</h2>
        <button>Filter</button>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <p>
                  {comment.created_at
                    ? formatDate(individualArticle.created_at)
                    : ""}
                </p>
                <div className="single-comment-body">
                  <b>{comment.body}</b>
                </div>
                <b>{comment.votes}</b>
                <button>Upvote</button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
