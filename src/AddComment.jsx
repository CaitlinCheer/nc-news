import TextField from "@mui/material/TextField";
import { addCommentOnArticle } from "../API.js";
import { useState } from "react";

export default function AddComment({ id, setComments }) {
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    const commentObject = {
      username: "tickle122",
      body: inputValue,
      comment_id: Date.now(),
      author: "tickle122",
      upvotes: 0,
    };
    setComments((currComments) => [commentObject, ...currComments]);
    setInputValue("");
    addCommentOnArticle(id, commentObject)
      .then((data) => {
        setComments((currComments) =>
          currComments.map((comment) => {
            return comment.comment_id === commentObject.comment_id
              ? data
              : comment;
          })
        );
      })
      .catch((err) => {
        console.log(err);
        setComments((currComments) =>
          currComments.filter(
            (comment) => comment.comment_id !== commentObject.comment_id
          )
        );
      });
  }
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <h2>Add a Comment</h2>

      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Add Comment..."
        variant="outlined"
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
}
