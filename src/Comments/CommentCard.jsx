import { useContext, useState } from "react";
import { UsersContext } from "../Context/Users";
import { deleteCommentById } from "../../API";

export default function CommentCard({
  comment,
  individualArticle,
  setComments,
}) {
  const { users } = useContext(UsersContext);

  function formatDate(isoString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoString).toLocaleDateString(undefined, options);
  }

  function deleteComment(e) {
    setComments((currComments) => {
     return currComments.filter((currComment) => {
        return currComment.comment_id !== comment.comment_id;
      });
    });
    deleteCommentById(e.target.id).catch((err) => {
      setComments((currComments) => [...currComments, comment]);
    });
  }

  return (
    <>
      <h3>{comment.author}</h3>
      <p>
        {comment.created_at ? formatDate(individualArticle.created_at) : ""}
      </p>
      <div className="single-comment-body">
        <b>{comment.body}</b>
      </div>
      <b>{comment.votes}</b>
      <button className="comment">Upvote</button>
      {users.username === comment.author && (
        <button
          className="delete"
          id={comment.comment_id}
          onClick={deleteComment}
        >
          Delete
        </button>
      )}
    </>
  );
}
