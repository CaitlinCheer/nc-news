import { useState } from "react";
import AddComment from "./AddComment.jsx";
import "./cssFiles/ArticlePage.css";

export default function Comments({ comments, individualArticle, setComments }) {
  
  function formatDate(isoString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoString).toLocaleDateString(undefined, options);
  }
  return (
    <div className="comments-body">
      <div className="comments-top">
        <h2>{comments.length} Comments </h2>
        <button>Filter</button>
      </div>
      <AddComment id={individualArticle.article_id} setComments={setComments}/>
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
              <button className="comment">Upvote</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
