import AddComment from "./AddComment.jsx";
import "./cssFiles/ArticlePage.css";
import CommentCard from "./CommentCard.jsx";

export default function Comments({ comments, individualArticle, setComments }) {
  return (
    <div className="comments-body">
      <div className="comments-top">
        <h2>{comments.length} Comments </h2>
        <button>Filter</button>
      </div>
      <AddComment id={individualArticle.article_id} setComments={setComments} />
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                comment={comment}
                comments={comments}
                individualArticle={individualArticle}
                setComments={setComments}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
