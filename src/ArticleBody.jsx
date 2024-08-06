import { useState, useEffect } from "react";
import "./cssFiles/ArticlePage.css";
import { patchLikesByArticle } from "../API";
import {
  getLikesCount,
  getIsLiked,
  setLikesCount,
  setIsLiked,
} from "./localStorageUtils";

export default function ArticleBody({ individualArticle }) {
  const [likesCount, setLikesCountState] = useState(0);
  const [isLiked, setIsLikedState] = useState(false);

  useEffect(() => {
    if (individualArticle) {
      setLikesCountState(
        getLikesCount(individualArticle.article_id, individualArticle.votes)
      );
      setIsLikedState(getIsLiked(individualArticle.article_id));
    }
  }, [individualArticle]);

  const handleLike = () => {
    let newLikesCount = likesCount
    if (isLiked === false) {
      newLikesCount += 1;
      patchLikesByArticle(individualArticle.article_id, 1);
      setIsLikedState(true);
      setIsLiked(individualArticle.article_id, true);
    } else {
      newLikesCount -= 1;
      patchLikesByArticle(individualArticle.article_id, -1);
      setIsLikedState(false);
      setIsLiked(individualArticle.article_id, false);
    }
    setLikesCountState(newLikesCount);
    setLikesCount(individualArticle.article_id, newLikesCount);

  };

  function formatDate(isoString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoString).toLocaleDateString(undefined, options);
  }

  return (
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
        <button className="article" onClick={handleLike}>
          Upvote
        </button>
        <p>{likesCount}</p>
      </div>
    </section>
  );
}
